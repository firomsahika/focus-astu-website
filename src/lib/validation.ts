import { z } from "zod";

export const registrationSchema = z.object({
  fullName: z.string().trim().min(2, "Full name is required."),
  phoneNumber: z.string().trim().min(7, "Phone number is required."),
  tgUsername: z.string().trim().min(2, "Telegram username is required."),
  location: z.string().trim().min(2, "Location/city is required."),
  batch: z.string().trim().min(2, "Batch is required."),
  faculty: z.string().trim().min(2, "Faculty is required."),
});

export const adminLoginSchema = z.object({
  email: z.string().trim().email("Enter a valid email."),
  password: z.string().min(6, "Password is required."),
});

export const adminPasswordSchema = z
  .object({
    password: z.string().min(8, "Password must be at least 8 characters long."),
    confirmPassword: z.string().min(8, "Please confirm your new password."),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match.",
    path: ["confirmPassword"],
  });
