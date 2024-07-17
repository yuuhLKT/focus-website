import { z } from 'zod'

export const formSchema = z.object({
    authorName: z
        .string()
        .min(3, 'Username must be at least 3 characters.')
        .max(25, 'Username must be at most 25 characters.'),
    title: z
        .string()
        .min(3, 'Title must be at least 3 characters.')
        .max(25, 'Title must be at most 25 characters.'),
    content: z
        .string()
        .min(30, 'Description must be at least 30 characters.')
        .max(255, 'Description must be at most 255 characters.'),
    type: z.enum(['feedback', 'bug']),
})

export type formSchema = z.infer<typeof formSchema>
