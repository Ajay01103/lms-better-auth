import * as z from "zod/v4"

export const signInSchema = z.object({
  email: z.email(),
  password: z.string().min(1, { message: "Password required" }),
})

export const signUpSchema = z
  .object({
    firstName: z.string().min(2, { message: "Name is required" }),
    lastName: z.string(),
    email: z.email(),
    password: z.string().min(1, { message: "Password required" }),
    confirmPassword: z.string().min(1, { message: "Password required" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password does'nt match",
    path: ["confirmPassword"],
  })
