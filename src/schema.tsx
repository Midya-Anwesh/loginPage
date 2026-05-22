import * as yup from 'yup';
import type { inputFormData } from './types/inputFormType';

const valdiatePassword = (password: string) => {
    if (password.length < 6){
        return "Password must be atleast 6 digits";
    }
    const hasSpecial = /[^a-zA-Z0-9 ]/.test(password);
    const alphaNumeric = /[^a-zA-Z0-9 ]/.test(password);

    if (! (hasSpecial && alphaNumeric)){
        return "Invalid password";
    }
    
    return true;
}

export const formSchema = yup.object<inputFormData>().shape({
  name: yup
    .string()
    .required("Enter your name")
    .min(1, "Name can't be empty"),
    
  email: yup
    .string()
    .required("Enter your email")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 
      "Enter a valid email"
    ),
    
  password: yup
    .string()
    .required("Enter password")
    .test(
        async (value, context) => {
        const result = valdiatePassword(value); 
        return typeof result === "string" 
            ? context.createError({ message: result }) 
            : result;
        }
    ),

    role: yup.string().required("Select a role")
});
