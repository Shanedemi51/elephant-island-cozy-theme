import z from "zod";

export const ContactUsSchema = z.object({
    name : z.string().min(3 , "Enter a valid name"),
    email : z.email("Enter a valid email"),
    phone : z.string().min(10 , "Enter a valid phone number").max(10 , "Enter a valid phone number"),
    travelingWith : z.string(),
    accomodationStandard : z.string(),
    country : z.string(),
    description : z.string().optional(),
    quotationFile : z.file().optional()
});


export type ContactUsPayload = z.infer<typeof ContactUsSchema>;