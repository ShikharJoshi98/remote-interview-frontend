import { email, z } from "zod";

export const registerSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email"),
    password: z.string().min(1, "Password is required"),
    role: z.string().min(1, "Select a role"),
    confirmPassword: z.string()
  })
  .refine(
    (data) => data.password === data.confirmPassword,
    {
      message: "Passwords do not match",
      path: ["confirmPassword"]
    }
);
  
export const loginSchema = z.object({
    email: z.string().email("Invalid Email"),
    password: z.string().min(1, "Password is required"),
})
