import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, company, role, email, projectType, message } = body;

  if (!name || !company || !email) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const ZEPTO_TOKEN = process.env.ZEPTOMAIL_TOKEN;

  if (!ZEPTO_TOKEN) {
    console.log("[RequestPreview] No ZeptoMail token — logging submission:", { name, company, role, email, projectType, message });
    return NextResponse.json({ ok: true });
  }

  const res = await fetch("https://api.zeptomail.in/v1.1/email", {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": ZEPTO_TOKEN,
    },
    body: JSON.stringify({
      from: { address: "noreply@arqflo.ai", name: "ArqFlo Website" },
      to: [
        { email_address: { address: "ravi@arqflo.ai", name: "Ravi" } },
        { email_address: { address: "hello@arqflo.ai", name: "ArqFlo" } },
        { email_address: { address: "info@arqflo.ai", name: "ArqFlo Info" } },
      ],
      subject: `Preview request from ${name} — ${company}`,
      htmlbody: `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#0f1117;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0f1117;padding:40px 20px">
    <tr>
      <td align="center">
        <table width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%">

          <!-- Header -->
          <tr>
            <td style="background:#0f1117;padding:0 0 28px 0" align="center">
              <span style="font-size:13px;font-weight:700;letter-spacing:0.25em;text-transform:uppercase;color:#67e8f9">ARQFLO</span>
            </td>
          </tr>

          <!-- Card -->
          <tr>
            <td style="background:#161b27;border:1px solid rgba(255,255,255,0.08);border-radius:16px;overflow:hidden">

              <!-- Card header -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="background:linear-gradient(135deg,rgba(34,211,238,0.12) 0%,rgba(45,212,191,0.06) 100%);padding:28px 32px;border-bottom:1px solid rgba(255,255,255,0.06)">
                    <p style="margin:0 0 6px 0;font-size:11px;font-weight:600;letter-spacing:0.18em;text-transform:uppercase;color:#67e8f9">New Request</p>
                    <h1 style="margin:0;font-size:22px;font-weight:700;color:#ffffff;line-height:1.3">Preview Request Received</h1>
                    <p style="margin:8px 0 0 0;font-size:13px;color:rgba(255,255,255,0.45)">Submitted via arqflo.ai</p>
                  </td>
                </tr>

                <!-- Details -->
                <tr>
                  <td style="padding:28px 32px">
                    <table width="100%" cellpadding="0" cellspacing="0">

                      <tr>
                        <td style="padding:0 0 16px 0">
                          <p style="margin:0 0 4px 0;font-size:11px;font-weight:600;letter-spacing:0.12em;text-transform:uppercase;color:rgba(255,255,255,0.3)">Full Name</p>
                          <p style="margin:0;font-size:15px;font-weight:500;color:#ffffff">${name}</p>
                        </td>
                      </tr>

                      <tr>
                        <td style="padding:0 0 16px 0;border-top:1px solid rgba(255,255,255,0.05)">
                          <p style="margin:12px 0 4px 0;font-size:11px;font-weight:600;letter-spacing:0.12em;text-transform:uppercase;color:rgba(255,255,255,0.3)">Company</p>
                          <p style="margin:0;font-size:15px;font-weight:500;color:#ffffff">${company}</p>
                        </td>
                      </tr>

                      <tr>
                        <td style="padding:0 0 16px 0;border-top:1px solid rgba(255,255,255,0.05)">
                          <p style="margin:12px 0 4px 0;font-size:11px;font-weight:600;letter-spacing:0.12em;text-transform:uppercase;color:rgba(255,255,255,0.3)">Role</p>
                          <p style="margin:0;font-size:15px;font-weight:500;color:#ffffff">${role || "Not provided"}</p>
                        </td>
                      </tr>

                      <tr>
                        <td style="padding:0 0 16px 0;border-top:1px solid rgba(255,255,255,0.05)">
                          <p style="margin:12px 0 4px 0;font-size:11px;font-weight:600;letter-spacing:0.12em;text-transform:uppercase;color:rgba(255,255,255,0.3)">Email</p>
                          <a href="mailto:${email}" style="margin:0;font-size:15px;font-weight:500;color:#67e8f9;text-decoration:none">${email}</a>
                        </td>
                      </tr>

                      <tr>
                        <td style="padding:0 0 16px 0;border-top:1px solid rgba(255,255,255,0.05)">
                          <p style="margin:12px 0 4px 0;font-size:11px;font-weight:600;letter-spacing:0.12em;text-transform:uppercase;color:rgba(255,255,255,0.3)">Project Type</p>
                          <p style="margin:0;font-size:15px;font-weight:500;color:#ffffff">${projectType || "Not specified"}</p>
                        </td>
                      </tr>

                      ${message ? `
                      <tr>
                        <td style="padding:0;border-top:1px solid rgba(255,255,255,0.05)">
                          <p style="margin:12px 0 8px 0;font-size:11px;font-weight:600;letter-spacing:0.12em;text-transform:uppercase;color:rgba(255,255,255,0.3)">Message</p>
                          <p style="margin:0;font-size:14px;line-height:1.6;color:rgba(255,255,255,0.65);background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.06);border-radius:8px;padding:14px 16px">${message}</p>
                        </td>
                      </tr>` : ""}

                    </table>
                  </td>
                </tr>

                <!-- CTA -->
                <tr>
                  <td style="padding:0 32px 28px 32px">
                    <a href="mailto:${email}" style="display:inline-block;background:linear-gradient(135deg,rgba(34,211,238,0.2),rgba(45,212,191,0.2));border:1px solid rgba(34,211,238,0.3);border-radius:8px;padding:12px 24px;font-size:13px;font-weight:600;color:#67e8f9;text-decoration:none">
                      Reply to ${name}
                    </a>
                  </td>
                </tr>

              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:24px 0 0 0" align="center">
              <p style="margin:0;font-size:11px;color:rgba(255,255,255,0.2)">© ${new Date().getFullYear()} ArqFlo · Decision Intelligence for the Built World</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
      `,
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    console.error("[RequestPreview] ZeptoMail error:", err);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
