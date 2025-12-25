// app/components/FormSchema.ts
import { z } from "zod";

export const SkillSchema = z.object({
  name: z.string().min(1, "Skill name required"),
  level: z.enum(["Beginner", "Advanced"]),
});

export const FormSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  password: z.string().min(6),

  social: z.object({
    facebook: z.string().optional(),
    twitter: z.string().optional(),
  }),

  phonenumbers: z.array(z.string().min(1)),

  skills: z.array(SkillSchema).min(1),

  age: z.number().min(18),

  db: z.date(),

  hasSocial: z.boolean(),

  socialMediaUrl: z.string().optional(),
}).refine(
  (data) => {
    if (data.hasSocial) {
      return !!data.socialMediaUrl;
    }
    return true;
  },
  {
    path: ["socialMediaUrl"],
    message: "Social media URL is required",
  }
);

export type FormValues = z.infer<typeof FormSchema>;
