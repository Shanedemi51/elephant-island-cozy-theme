import { ContactUsPayload } from "@/types/email.types";

export const ContactUsEmailTemplate =(payload : ContactUsPayload)=>`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Enquiry - Elephant Island</title>
  <style type="text/css">
    body { margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f4f7f9; color: #333333; }
    .container { max-width: 620px; margin: 20px auto; background-color: #ffffff; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 16px rgba(0,0,0,0.1); }
    .header { background: linear-gradient(to right, #1a4d2e, #2e8b57); padding: 30px 25px; text-align: center; color: white; }
    .header h1 { margin: 0; font-size: 28px; font-weight: 600; }
    .header p { margin: 10px 0 0; font-size: 16px; opacity: 0.95; }
    .content { padding: 35px 30px; }
    .content h2 { margin: 0 0 18px; font-size: 22px; color: #1a4d2e; border-bottom: 2px solid #e0f0e8; padding-bottom: 8px; }
    .info-table { width: 100%; border-collapse: collapse; margin: 20px 0; }
    .info-table td { padding: 12px 0; border-bottom: 1px solid #e8ecef; vertical-align: top; }
    .info-table .label { width: 140px; font-weight: 600; color: #444; }
    .info-table .value { color: #222; }
    .message-box { background-color: #f8fafc; padding: 20px; border-radius: 8px; border: 1px solid #e0e7e0; margin: 25px 0; white-space: pre-wrap; font-size: 15px; line-height: 1.55; }
    .action { text-align: center; margin: 30px 0; }
    .button { display: inline-block; background-color: #2e8b57; color: white !important; padding: 14px 32px; font-size: 16px; font-weight: 600; text-decoration: none; border-radius: 6px; }
    .button:hover { background-color: #1a4d2e; }
    .footer { background-color: #1a4d2e; color: #d4e8d9; text-align: center; padding: 25px 20px; font-size: 13px; }
    .footer a { color: #a8d0bd; text-decoration: none; }
    .footer a:hover { text-decoration: underline; }
    @media only screen and (max-width: 600px) {
      .content { padding: 25px 20px; }
      .header { padding: 25px 20px; }
      .header h1 { font-size: 24px; }
      .info-table td { display: block; width: 100%; }
      .info-table .label { padding-bottom: 4px; }
      .button { width: 100%; box-sizing: border-box; text-align: center; }
    }
  </style>
</head>
<body>

  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f4f7f9;">
    <tr>
      <td align="center">

        <table class="container" cellpadding="0" cellspacing="0" border="0">
          <!-- Header -->
          <tr>
            <td class="header">
              <h1>New Customer Enquiry</h1>
              <p>Received via Elephant Island website •</p>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td class="content">

              <h2>Enquiry Details</h2>

              <table class="info-table">
                <tr>
                  <td class="label">Name:</td>
                  <td class="value">${payload.name || "N/A"}</td>
                </tr>
                <tr>
                  <td class="label">Email:</td>
                  <td class="value"><a href="mailto:${payload.email || ""}" style="color:#2e8b57;">${payload.email || "N/A"}</a></td>
                </tr>
                <tr>
                  <td class="label">Phone / WhatsApp:</td>
                  <td class="value">${payload.phone || "N/A"}</td>
                </tr>
                <tr>
                  <td class="label">Traveling With:</td>
                  <td class="value">${payload.travelingWith || "N/A"}</td>
                </tr>
                <tr>
                  <td class="label">Standard of Accomodation:</td>
                  <td class="value">${payload.accomodationStandard || "N/A"}</td>
                </tr>
                <tr>
                  <td class="label">Country:</td>
                  <td class="value">${payload.country || "N/A"}</td>
                </tr>
              </table>

              <h2>Message from Customer</h2>
              <div class="message-box">
                ${payload.description || "N/A"}
              </div>

              <div class="action">
                <a href="mailto:${payload.email || ""}?subject=Re%3A%20Your%20Sri%20Lanka%20Holiday%20Enquiry%20-%20Elephant%20Island&body=Dear%20${payload.name || ""}%2C%0A%0AThank%20you%20for%20your%20enquiry%21%20We%27re%20excited%20to%20help%20craft%20your%20perfect%20Sri%20Lanka%20journey.%0A%0A..." class="button">Reply to Customer →</a>
              </div>

              <p style="font-size:15px; color:#555; text-align:center; margin-top:30px;">
                Please respond within 24 hours to maintain our high service standards.<br>
                This enquiry came from: <strong>https://elephant-island.com</strong>
              </p>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td class="footer">
              <p>Elephant Island – Sri Lanka In Luxury Ltd</p>
              <p><a href="https://www.elephant-island.com/">www.elephant-island.com</a> • <a href="mailto:info@elephant-island.com">info@elephant-island.com</a> • +94 77 707 2265</p>
              <p style="margin-top:18px; opacity:0.85;">© 2026 Elephant-Island. Internal use only.</p>
            </td>
          </tr>
        </table>

      </td>
    </tr>
  </table>

</body>
</html>`;