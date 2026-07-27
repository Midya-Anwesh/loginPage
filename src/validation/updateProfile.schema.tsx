import * as yup from "yup";
import { invalidMessage, maxLengthMessage, minLengthMessage } from "@/constants/messages";
import { valdiatePassword } from "./loginForm.schema";
import type { inputFormData } from "@/types/inputForm.type";
import { Name, Password } from "@/constants/limits";
import { emailRegex } from "@/constants/regex";

// Omit BOTH 'role' and 'subscribed' from your schema validation shape definition
type UpdateProfileSchemaShape = Partial<Omit<inputFormData, 'role' | 'subscribed'>>;

export const updateProfileSchema: yup.ObjectSchema<UpdateProfileSchemaShape> = yup.object().shape({
  name: yup
    .string()
    .optional()
    .min(Name.minLength, minLengthMessage('name', Name.minLength))
    .max(Name.maxLength, maxLengthMessage('name', Name.maxLength)),    
    
  email: yup
    .string()
    .optional()
    .matches(
      emailRegex, 
      invalidMessage('email')
    ),
    
  password: yup
    .string()
    .transform((value) => (value === '' ? undefined : value))
    .optional()
    .max(Password.maxLength, maxLengthMessage('password', Password.maxLength))
    .test(
        "password-validation",
        async (value, context) => {
          if (!value) return true; 
          
          const result = valdiatePassword(value); 
          return typeof result === "string" 
              ? context.createError({ message: result }) 
              : result;
        }
    )
});
