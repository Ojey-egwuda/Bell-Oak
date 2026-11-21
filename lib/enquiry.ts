import { z } from "zod";
import { enquiryTypes } from "@/lib/site";

export const enquirySchema = z.object({
  fullName: z.string().trim().min(1, "Please enter your name.").max(120),
  email: z.string().trim().email("Please enter a valid email address.").max(200),
  phone: z.string().trim().max(40).optional().default(""),
  enquiryType: z.enum(enquiryTypes),
  message: z.string().trim().min(1, "Please enter a message.").max(5000),
  // Honeypot: real people never see or fill this field.
  website: z.string().max(0).optional().default(""),
});

export type Enquiry = z.infer<typeof enquirySchema>;
