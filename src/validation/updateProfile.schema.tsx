import { loginFormSchema } from "./loginForm.schema";

export const updateProfileSchema = loginFormSchema.omit(['role'])