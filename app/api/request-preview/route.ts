import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, company, role, email, projectType, message } = body;

  if (!name || !company || !email) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;

  if (!SENDGRID_API_KEY) {
    // Log to console so we can see submissions without email configured yet
    console.log("[RequestPreview]", { name, company, role, email, projectType, message });
    return NextResponse.json({ ok: true });
  }

  const htmlBody = `
    <h2>New Preview Request</h2>
    <table cellpadding="6" style="font-family:sans-serif;font-size:14px">
      <tr><td><strong>Name</strong></td><td>${name}</td></tr>
      <tr><td><strong>Company</strong></td><td>${company}</td></tr>
      <tr><td><strong>Role</strong></td><td>${role || "—"}</td></tr>
      <tr><td><strong>Email</strong></td><td>${email}</td></tr>
      <tr><td><strong>Project type</strong></td><td>${projectType || "—"}</td></tr>
      <tr><td><strong>Message</strong></td><td>${message || "—"}</td></tr>
    </table>
  `;

  const sgRes = await fetch("https://api.sendgrid.com/v3/mail/send", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${SENDGRID_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      personalizations: [
        {
          to: [{ email: "eric@arqflo.ai" }, { email: "mark@arqflo.ai" }],
          subject: `Preview request from ${name} — ${company}`,
        },
      ],
      from: { email: "noreply@arqflo.ai", name: "ArqFlo Website" },
      reply_to: { email },
      content: [{ type: "text/html", value: htmlBody }],
    }),
  });

  if (!sgRes.ok) {
    console.error("[RequestPreview] SendGrid error", await sgRes.text());
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
