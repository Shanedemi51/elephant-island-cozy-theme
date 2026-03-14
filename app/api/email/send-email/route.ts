import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  await resend.emails.send({
    from: "Elephant-Island <notifications@elephant-island.com>",
    to: ["randilasenath.rs@gmail.com"],
    subject: `Email Test`,
    html: "Hello World",
  });
}
