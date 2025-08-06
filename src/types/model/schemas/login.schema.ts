import { z } from "zod";


export const LoginSchema = z.object({
    handle: z.string().min(5),
    password: z
        .string()
        .min(1),
  })