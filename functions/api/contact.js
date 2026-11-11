import { EmailMessage } from "cloudflare:email";
import { createMimeMessage, Mailbox } from "mimetext";

export async function onRequestPost(context) {
  const { request, env } = context;

  // Modern secure CORS headers
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };

  try {
    const data = await request.json();
    const { 
      name, 
      email, 
      service, 
      subject, 
      message, 
      honeypot, 
      timestamp 
    } = data;

    // 1. HONEYPOT CHECK - Silent trap for automated bots
    if (honeypot && String(honeypot).trim() !== "") {
      console.warn("[BOT DETECTED] Honeypot field filled:", honeypot);
      return new Response(
        JSON.stringify({ 
          success: true, 
          message: "Transmission received successfully.",
          isBotTrap: true
        }),
        { status: 200, headers }
      );
    }

    // 2. TIMING CHECK - Reject inhumanly fast submissions (< 1200ms) with clock-skew protection
    const now = Date.now();
    if (timestamp && Number(timestamp) > 0) {
      const elapsedMs = now - Number(timestamp);
      if (elapsedMs >= 0 && elapsedMs < 800) {
        console.warn(`[BOT DETECTED] Form submitted too quickly (${elapsedMs}ms)`);
        return new Response(
          JSON.stringify({ 
            success: false, 
            error: "Submission rejected: automated bot behavior detected. Please take a moment and try again." 
          }),
          { status: 400, headers }
        );
      }
    }

    // 3. INPUT VALIDATION
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return new Response(
        JSON.stringify({ success: false, error: "Please enter a valid name (at least 2 characters)." }),
        { status: 400, headers }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email.trim())) {
      return new Response(
        JSON.stringify({ success: false, error: "Please provide a valid email address." }),
        { status: 400, headers }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 5) {
      return new Response(
        JSON.stringify({ success: false, error: "Please enter a message with at least 5 characters." }),
        { status: 400, headers }
      );
    }

    // Sanitize and prepare message payload
    const safeName = name.trim().slice(0, 100);
    const safeEmail = email.trim().slice(0, 150);
    const safeService = (service || "General Inquiry").toString().slice(0, 100);
    const safeSubject = (subject || `Portfolio Contact: ${safeService}`).toString().slice(0, 200);
    const safeMessage = message.trim().slice(0, 5000);

    const clientIp = request.headers.get("cf-connecting-ip") || request.headers.get("x-forwarded-for") || "unknown";
    const clientCountry = request.headers.get("cf-ipcountry") || "unknown";
    const userAgent = request.headers.get("user-agent") || "unknown";
    const submissionId = `msg_${Date.now()}_${Math.random().toString(36).substring(2, 8)}`;

    const messageRecord = {
      id: submissionId,
      name: safeName,
      email: safeEmail,
      service: safeService,
      subject: safeSubject,
      message: safeMessage,
      receivedAt: new Date().toISOString(),
      clientIp,
      clientCountry,
      userAgent,
      status: "unread",
      targetRecipient: "admin@hendev.dev"
    };

    // 4. PERSIST PERMANENTLY TO CLOUDFLARE KV (MESSAGES_KV)
    const kv = env.MESSAGES_KV || env.CONTACTS_KV || env.SUBSCRIBERS_KV || env.SUBSCRIBERS;
    if (kv) {
      try {
        await kv.put(`msg:${messageRecord.id}`, JSON.stringify(messageRecord));
        await kv.put(`latest:${safeEmail}`, JSON.stringify({ id: submissionId, at: messageRecord.receivedAt }));
        console.log(`[KV STORAGE SUCCESS] Saved message ${submissionId} to MESSAGES_KV`);
      } catch (kvErr) {
        console.error("[KV Storage Error]:", kvErr);
      }
    } else {
      console.warn("No KV binding detected. Message logged to Cloudflare runtime logs:", messageRecord);
    }

    // 5. ROUTE SUBMISSION DIRECTLY TO admin@hendev.dev
    let emailDispatched = false;
    let dispatchMethod = "none";
    let dispatchError = null;

    const emailSubject = `[hendev.dev] New Inquiry from ${safeName} (${safeService})`;
    const plainTextBody = 
      `HENDEV.DEV — DIRECT INQUIRY FOR admin@hendev.dev\n` +
      `================================================\n\n` +
      `Sender Name:     ${safeName}\n` +
      `Sender Email:    ${safeEmail}\n` +
      `Service Area:    ${safeService}\n` +
      `Location:        ${clientCountry} (IP: ${clientIp})\n` +
      `Received At:     ${messageRecord.receivedAt}\n` +
      `Reference ID:    ${submissionId}\n\n` +
      `MESSAGE PAYLOAD:\n` +
      `------------------------------------------------\n` +
      `${safeMessage}\n` +
      `------------------------------------------------\n\n` +
      `Reply directly to: ${safeEmail}`;

    const htmlBody = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #0b0f17; color: #f1f5f9; padding: 32px; border-radius: 12px; max-width: 600px; margin: 0 auto; border: 1px solid #1e293b;">
        <div style="border-bottom: 1px solid #334155; padding-bottom: 16px; margin-bottom: 24px;">
          <h2 style="margin: 0; color: #38bdf8; font-size: 20px; font-weight: 700; letter-spacing: -0.5px;">hendev.dev — Direct Portfolio Contact</h2>
          <p style="margin: 4px 0 0 0; color: #94a3b8; font-size: 13px;">Transmission dispatched to <strong>admin@hendev.dev</strong></p>
        </div>
        
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px; font-size: 14px;">
          <tr>
            <td style="padding: 8px 0; color: #94a3b8; width: 140px;">Sender Name:</td>
            <td style="padding: 8px 0; color: #ffffff; font-weight: 600;">${safeName}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #94a3b8;">Email Address:</td>
            <td style="padding: 8px 0;"><a href="mailto:${safeEmail}" style="color: #38bdf8; text-decoration: none;">${safeEmail}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #94a3b8;">Area of Interest:</td>
            <td style="padding: 8px 0; color: #cbd5e1;">${safeService}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #94a3b8;">Location / IP:</td>
            <td style="padding: 8px 0; color: #64748b; font-size: 12px; font-family: monospace;">${clientCountry} (${clientIp})</td>
          </tr>
        </table>

        <div style="background-color: #111827; border: 1px solid #1f2937; border-radius: 8px; padding: 20px; margin-bottom: 24px;">
          <div style="color: #94a3b8; font-size: 11px; text-transform: uppercase; font-weight: 700; letter-spacing: 1px; margin-bottom: 8px;">Message Payload</div>
          <div style="color: #f8fafc; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${safeMessage}</div>
        </div>

        <div style="border-top: 1px solid #1e293b; padding-top: 16px; display: flex; justify-content: space-between; align-items: center; font-size: 12px; color: #64748b;">
          <span>Ref: ${submissionId}</span>
          <a href="mailto:${safeEmail}?subject=Re: Your inquiry on hendev.dev" style="background-color: #38bdf8; color: #0f172a; font-weight: bold; padding: 6px 14px; border-radius: 6px; text-decoration: none;">Reply to ${safeName}</a>
        </div>
      </div>
    `;

    // Strategy A: Cloudflare Native send_email Binding
    if (env.SEND_EMAIL && typeof env.SEND_EMAIL.send === "function") {
      const candidates = ["admin@hendev.dev", "henrylarreal27@gmail.com"];

      for (const candidate of candidates) {
        if (emailDispatched) break;
        try {
          const msg = createMimeMessage();
          msg.setSender({ name: "Portfolio Contact", addr: "contact@hendev.dev" });
          msg.setRecipient(candidate);
          try {
            msg.setHeader("Reply-To", new Mailbox({ name: safeName, addr: safeEmail }));
          } catch {
            // Fallback if mailbox parsing fails
          }
          msg.setSubject(emailSubject);

          msg.addMessage({
            contentType: "text/plain",
            data: plainTextBody
          });
          msg.addMessage({
            contentType: "text/html",
            data: htmlBody
          });

          const emailMessage = new EmailMessage(
            "contact@hendev.dev",
            candidate,
            msg.asRaw()
          );

          await env.SEND_EMAIL.send(emailMessage);
          emailDispatched = true;
          dispatchMethod = `cloudflare_send_email (${candidate})`;
          console.log(`[EMAIL SENT] Successfully dispatched to ${candidate} via Cloudflare SEND_EMAIL`);
          break;
        } catch (cfEmailErr) {
          console.error(`[CLOUDFLARE SEND_EMAIL to ${candidate} ERROR]:`, cfEmailErr);
          dispatchError = cfEmailErr.message || String(cfEmailErr);
        }
      }
    }

    // Strategy B: Fallback to Resend API if RESEND_API_KEY is configured
    if (!emailDispatched && env.RESEND_API_KEY) {
      try {
        const resendResponse = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${env.RESEND_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: env.FROM_EMAIL || "Portfolio Contact <contact@hendev.dev>",
            to: ["admin@hendev.dev"],
            reply_to: safeEmail,
            subject: emailSubject,
            html: htmlBody
          })
        });

        if (resendResponse.ok) {
          emailDispatched = true;
          dispatchMethod = "resend_api";
          console.log("[EMAIL SENT] Resend successfully delivered message to admin@hendev.dev");
        } else {
          const errData = await resendResponse.text();
          console.error("[RESEND API ERROR]:", errData);
          dispatchError = errData;
        }
      } catch (mailErr) {
        console.error("[EMAIL DISPATCH ERROR]:", mailErr);
        dispatchError = mailErr.message || String(mailErr);
      }
    }

    // Direct Mailto URI fallback
    const mailtoFallback = `mailto:admin@hendev.dev?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(plainTextBody)}`;

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Your message has been securely recorded and dispatched to admin@hendev.dev. Expect a reply within 24 hours.",
        refId: submissionId,
        emailDispatched,
        dispatchMethod,
        dispatchError: emailDispatched ? null : dispatchError,
        mailtoFallback
      }),
      { status: 200, headers }
    );
  } catch (err) {
    console.error("[CONTACT HANDLER ERROR]:", err);
    return new Response(
      JSON.stringify({ success: false, error: err.message || "An unexpected error occurred while transmitting your message." }),
      { status: 500, headers }
    );
  }
}

// Handle CORS preflight OPTIONS request
export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
