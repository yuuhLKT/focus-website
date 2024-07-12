import { z } from 'zod';

export const formSchema = z.object({
    username: z.string().min(5, "Username must be at least 5 characters.").max(35),
    title: z.string().min(5, "Title must be at least 5 characters.").max(35),
    description: z.string().min(30, "Description must be at least 30 characters.").max(150, "Description must be at most 150 characters."),
    formType: z.enum(['feedback', 'bug']),
})