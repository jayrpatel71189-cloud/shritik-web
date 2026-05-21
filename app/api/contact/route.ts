import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface ContactFormData {
  name: string;
  company: string;
  country: string;
  email: string;
  phone: string;
  product: string;
  quantity?: string;
  message: string;
}

function buildEmailHtml(data: ContactFormData): string {
  const { name, company, country, email, phone, product, quantity, message } = data;

  const row = (label: string, value: string) => `
    <tr>
      <td style="padding:10px 16px;background:#f0f7f2;border-bottom:1px solid #d1e8d8;width:38%;vertical-align:top;">
        <span style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:#2d6a4f;">${label}</span>
      </td>
      <td style="padding:10px 16px;background:#ffffff;border-bottom:1px solid #edf5ef;vertical-align:top;">
        <span style="font-size:14px;color:#1a1a1a;">${value}</span>
      </td>
    </tr>`;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Export Inquiry — Shritik Enterprises</title>
</head>
<body style="margin:0;padding:0;background:#f0f7f2;font-family:'Segoe UI',Arial,sans-serif;">

  <!-- Wrapper -->
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f0f7f2;padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(29,100,64,0.13);">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#1a472a 0%,#2d6a4f 60%,#52b788 100%);padding:36px 32px 28px;text-align:center;">
              <p style="margin:0 0 6px;font-size:11px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:#b7e4c7;">Shritik Enterprises LLP</p>
              <h1 style="margin:0 0 6px;font-size:26px;font-weight:800;color:#ffffff;line-height:1.2;">
                New Export Inquiry
              </h1>
              <p style="margin:0;font-size:13px;color:#b7e4c7;">Received via Contact Form</p>
              <!-- Gold accent bar -->
              <div style="width:56px;height:3px;background:linear-gradient(90deg,#d4a017,#f0c040);margin:18px auto 0;border-radius:2px;"></div>
            </td>
          </tr>

          <!-- Alert banner -->
          <tr>
            <td style="background:#d4a017;padding:10px 32px;text-align:center;">
              <p style="margin:0;font-size:13px;font-weight:700;color:#1a1a00;letter-spacing:0.04em;">
                &#9888;&nbsp; Action Required: Please respond within 24 business hours
              </p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="background:#ffffff;padding:28px 32px 8px;">
              <h2 style="margin:0 0 4px;font-size:15px;font-weight:700;color:#1a472a;text-transform:uppercase;letter-spacing:0.06em;">Contact Details</h2>
              <div style="width:40px;height:2px;background:#52b788;margin-bottom:16px;border-radius:2px;"></div>
            </td>
          </tr>

          <!-- Contact info table -->
          <tr>
            <td style="background:#ffffff;padding:0 32px 20px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-radius:10px;overflow:hidden;border:1px solid #d1e8d8;">
                ${row('Full Name', name)}
                ${row('Company', company)}
                ${row('Country', country)}
                ${row('Email', `<a href="mailto:${email}" style="color:#2d6a4f;text-decoration:none;">${email}</a>`)}
                ${row('Phone / WhatsApp', `<a href="tel:${phone}" style="color:#2d6a4f;text-decoration:none;">${phone}</a>`)}
              </table>
            </td>
          </tr>

          <!-- Product inquiry section -->
          <tr>
            <td style="background:#ffffff;padding:8px 32px 8px;">
              <h2 style="margin:0 0 4px;font-size:15px;font-weight:700;color:#1a472a;text-transform:uppercase;letter-spacing:0.06em;">Inquiry Details</h2>
              <div style="width:40px;height:2px;background:#52b788;margin-bottom:16px;border-radius:2px;"></div>
            </td>
          </tr>

          <tr>
            <td style="background:#ffffff;padding:0 32px 20px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-radius:10px;overflow:hidden;border:1px solid #d1e8d8;">
                ${row('Product', `<strong style="color:#2d6a4f;">${product}</strong>`)}
                ${quantity ? row('Quantity Required', quantity) : ''}
              </table>
            </td>
          </tr>

          <!-- Message section -->
          <tr>
            <td style="background:#ffffff;padding:8px 32px 8px;">
              <h2 style="margin:0 0 4px;font-size:15px;font-weight:700;color:#1a472a;text-transform:uppercase;letter-spacing:0.06em;">Message / Requirements</h2>
              <div style="width:40px;height:2px;background:#52b788;margin-bottom:16px;border-radius:2px;"></div>
            </td>
          </tr>

          <tr>
            <td style="background:#ffffff;padding:0 32px 28px;">
              <div style="background:#f8fdf9;border:1px solid #d1e8d8;border-left:4px solid #2d6a4f;border-radius:8px;padding:16px 18px;">
                <p style="margin:0;font-size:14px;color:#374151;line-height:1.7;white-space:pre-wrap;">${message.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p>
              </div>
            </td>
          </tr>

          <!-- Quick reply CTA -->
          <tr>
            <td style="background:#f8fdf9;padding:20px 32px;border-top:1px solid #d1e8d8;text-align:center;">
              <a href="mailto:${email}?subject=Re: Your Inquiry for ${encodeURIComponent(product)} — Shritik Enterprises"
                 style="display:inline-block;background:linear-gradient(135deg,#2d6a4f,#52b788);color:#ffffff;font-size:14px;font-weight:700;text-decoration:none;padding:12px 28px;border-radius:8px;letter-spacing:0.03em;">
                &#8594;&nbsp; Reply to ${name}
              </a>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:linear-gradient(135deg,#1a472a,#2d6a4f);padding:22px 32px;text-align:center;">
              <p style="margin:0 0 4px;font-size:13px;font-weight:700;color:#b7e4c7;letter-spacing:0.06em;">SHRITIK ENTERPRISES LLP</p>
              <p style="margin:0 0 10px;font-size:11px;color:#7ecda0;">Manufacturer &amp; Exporter · India</p>
              <p style="margin:0;font-size:11px;color:#7ecda0;">
                This is an automated notification from your website contact form.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export async function POST(req: NextRequest) {
  try {
    const body: ContactFormData = await req.json();
    const { name, company, country, email, phone, product, message } = body;

    if (!name || !company || !country || !email || !phone || !product || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"Shritik Enterprises — Contact Form" <${process.env.GMAIL_USER}>`,
      to: process.env.CONTACT_EMAIL ?? 'info@shritikenterprises.com',
      replyTo: email,
      subject: `New Export Inquiry: ${body.product} — ${name} (${company}, ${country})`,
      html: buildEmailHtml(body),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Contact form email error:', err);
    return NextResponse.json({ error: 'Failed to send email. Please try again.' }, { status: 500 });
  }
}
