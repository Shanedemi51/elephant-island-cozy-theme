import z from "zod";

export const ContactUsSchema = z.object({
    name : z.string().min(3 , "Enter a valid name"),
    email : z.email("Enter a valid email"),
    phone : z.string().regex(/^\+?[0-9]\d{9,14}$/, "Invalid phone number"),
    travelingWith : z.string().min(1 , "Please select a valid option"),
    accomodationStandard : z.string().min(1 , "Please select a valid option"),
    country : z.string().min(1 , "Please select a valid country"),
    description : z.string().optional(),
    currentUrl : z.string().optional(),
    quotationFile : z.any().refine((files)=> !files || files.length === 0 || files[0].size <5*1024*1024 , "Max file size is 5 MB").optional(),
    formLocation : z.string().optional(),    
});


export type ContactUsPayload = z.infer<typeof ContactUsSchema>;