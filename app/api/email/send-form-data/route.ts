import { ContactUsEmailTemplate } from "@/app/templates/contactUsTemplate";
import { ContactUsPayload } from "@/types/email.types";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const travelingWith = formData.get("travelingWith") as string;
    const accomodationStandard = formData.get("accomodationStandard") as string;
    const country = formData.get("country") as string;
    const description = formData.get("description") as string | null;
    const quotationFile = formData.get("quotationFile") as File | null;
    const currentUrl = formData.get("currentUrl") as string;

    const attachments  : {filename : string , content : Buffer}[]= [];
    if(quotationFile){
        const buffer = Buffer.from(await quotationFile.arrayBuffer())
        attachments.push({
            filename : quotationFile.name,
            content : buffer
        })
    }

    const payload : ContactUsPayload = {
        name,
        email,
        phone,
        travelingWith,
        accomodationStandard,
        country,
        description : description || undefined,
        currentUrl
    }


    const data = await resend.emails.send({
      from: "Elephant-Island <notifications@elephant-island.com>",
      to: ["info@elephant-island.com"],
      bcc: ["workingrandila@gmail.com"],
      subject: `New Customer Inquiry : ${payload.name.concat("→", payload.phone || payload.email || "N/A")}`,
      html: ContactUsEmailTemplate(payload),
      attachments : attachments.length > 0 ? attachments : undefined
    });
    return Response.json({success : true , data : data});
  } catch (err) {
    return Response.json({ success: false, data: err });
  }
}
