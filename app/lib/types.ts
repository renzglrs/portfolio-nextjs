
import { z } from "zod";

export const TodoSchema = z.object({
  id: z.string().optional(),
  title: z.string().min(8, {
    message: "Title must be at least 8 characters long."
  }).max(100),
  content: z.string().min(10, {
    message: "Content must be at least 10 characters long."
  })
});

export type Todo = z.infer<typeof TodoSchema>;