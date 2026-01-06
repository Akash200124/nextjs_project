import {z} from "zod";

export const messageSchema = z.object({
    content: z
    .string()
    .min(2, "Message must be at least 2 characters long")
    .max(1000, "Message must be at most 1000 characters long")
    
})