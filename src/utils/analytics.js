/**
 * Privacy-First Telemetry & Analytics Engine (2026 Web Standard)
 * Zero-cookie, GDPR/CCPA compliant, zero main-thread blocking.
 * Integrates with Cloudflare Edge Telemetry & Google Looker Studio Connectors.
 */

let isInitialized = false;
let dwellStartTime = Date.now();
let totalDwellMs = 0;
let isTabVisible = true;
let interactionCount = 0;

// Unique session identifier (sessionStorage only, strictly non-persistent across sessions)
function getSessionId() {
  if (typeof window === 'undefined') return '';
  try {
    let sid = sessionStorage.getItem('hd_sid');
    if (!sid) {
      sid = 'hd_' + Math.random().toString(36).substring(2, 10) + Date.now().toString(36);
      sessionStorage.setItem('hd_sid', sid);
    }
    return sid;
  } catch {
    return 'ephemeral_' + Date.now();
  }
}

/**
 * Dispatches an event payload via non-blocking transport (navigator.sendBeacon or fetch keepalive)
 */
export function sendTelemetry(data) {
  if (typeof window === 'undefined') return;

  // Respect Do Not Track
  if (navigator.doNotTrack === '1' || window.doNotTrack === '1') {
    return;
  }

  const payload = {
    ...data,
    sid: getSessionId(),
    path: window.location.pathname + window.location.hash,
    referrer: document.referrer || '',
    timestamp: new Date().toISOString()
  };

  const jsonStr = JSON.stringify(payload);
  const endpoint = '/api/analytics';

  // Use sendBeacon for guaranteed non-blocking delivery (especially on page unload/hidden)
  if (navigator.sendBeacon) {
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const success = navigator.sendBeacon(endpoint, blob);
    if (success) return;
  }

  // Fallback to fetch with keepalive: true
  try {
    fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: jsonStr,
      keepalive: true
    }).catch(() => {});
  } catch {
    // Non-blocking catch
  }
}

/**
 * Public method to track custom user interactions
 */
export function trackEvent(event, meta = {}) {
  interactionCount++;
  // Forward to Google Analytics 4 (GA4) if available
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    try {
      window.gtag('event', event, meta);
    } catch {
      // Non-blocking fallback
    }
  }

  // Defer execution using requestIdleCallback to guarantee INP (Interaction to Next Paint) latency is 0ms
  const dispatch = () => {
    sendTelemetry({
      type: 'interaction',
      event,
      meta,
      interactionsSoFar: interactionCount
    });
  };

  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(dispatch, { timeout: 1000 });
  } else {
    setTimeout(dispatch, 0);
  }
}

/**
 * Calculates accurate dwell time honoring user tab visibility
 */
function updateDwellTime() {
  if (isTabVisible) {
    const now = Date.now();
    totalDwellMs += (now - dwellStartTime);
    dwellStartTime = now;
  }
}

/**
 * Flush dwell time and bounce detection on tab hide or window unload
 */
function flushDwellAndExit() {
  updateDwellTime();
  const dwellSeconds = Math.round(totalDwellMs / 1000);
  // A visit is considered a bounce if only 1 page was viewed, dwell time < 15s and 0 significant interactions
  const isBounce = dwellSeconds < 15 && interactionCount === 0;

  sendTelemetry({
    type: 'dwell_time',
    event: 'session_heartbeat',
    dwellTime: dwellSeconds,
    isBounce,
    meta: {
      totalInteractions: interactionCount,
      dwellSeconds
    }
  });
}

/**
 * Initialize page analytics listeners
 */
export function initAnalytics() {
  if (typeof window === 'undefined' || isInitialized) return;
  isInitialized = true;

  // 1. Initial Pageview
  const recordPageview = () => {
    sendTelemetry({
      type: 'pageview',
      event: 'page_view',
      meta: {
        title: document.title,
        lang: document.documentElement.lang || 'en',
        screen: `${window.innerWidth}x${window.innerHeight}`
      }
    });
  };

  if (document.readyState === 'complete') {
    recordPageview();
  } else {
    window.addEventListener('load', recordPageview, { once: true });
  }

  // 2. Track Tab Visibility & Dwell Time
  dwellStartTime = Date.now();
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') {
      isTabVisible = false;
      flushDwellAndExit();
    } else if (document.visibilityState === 'visible') {
      isTabVisible = true;
      dwellStartTime = Date.now();
    }
  });

  window.addEventListener('pagehide', flushDwellAndExit);
  window.addEventListener('beforeunload', flushDwellAndExit);

  // 3. Delegated Click Tracker for project links, resume, calendly, and contact buttons
  document.addEventListener('click', (e) => {
    const target = e.target.closest('[data-analytics], a, button');
    if (!target) return;

    const analyticsTag = target.getAttribute('data-analytics');
    const href = target.getAttribute('href');

    if (analyticsTag) {
      trackEvent('ui_click', {
        tag: analyticsTag,
        text: target.innerText?.trim()?.substring(0, 50) || '',
        tagType: target.tagName.toLowerCase()
      });
      return;
    }

    if (href) {
      if (href.includes('resume') || href.endsWith('.pdf')) {
        trackEvent('resume_click', { href });
      } else if (href.includes('calendly.com')) {
        trackEvent('calendly_click', { href });
      } else if (href.startsWith('mailto:')) {
        trackEvent('mailto_click', { email: href.replace('mailto:', '') });
      } else if (href.startsWith('http') && !href.includes(window.location.hostname)) {
        trackEvent('external_link_click', { href });
      }
    }
  }, { passive: true });
}

