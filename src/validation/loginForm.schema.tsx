import * as yup from 'yup';
import type { inputFormData } from '../types/inputForm.type';
import { Password, Name } from '@/constants/limits';
import { maxLengthMessage, minLengthMessage, notSelectedMessage, invalidMessage, emptyInputMessage } from '@/constants/messages';
import { emailRegex } from '@/constants/regex';


const valdiatePassword = (password: string) => {
    if (password.length < Password.minLength){
        return minLengthMessage('password', Password.minLength);
    }
    const hasSpecial = /[^a-zA-Z0-9 ]/.test(password);
    const alphaNumeric = /[^a-zA-Z0-9 ]/.test(password);

    if (! (hasSpecial && alphaNumeric)){
      return `Should've alphabet & special character`;
    }
    
    return true;
}

export const loginFormSchema = yup.object<inputFormData>().shape({
  name: yup
    .string()
    .required(emptyInputMessage('name'))
    .min(Name.minLength, minLengthMessage('name', Name.minLength))
    .max(Name.maxLength, maxLengthMessage('name', Name.maxLength)),    
    
  email: yup
    .string()
    .required("Enter your email")
    .matches(
      emailRegex, 
      invalidMessage('email')
    ),
    
  password: yup
    .string()
    .required(emptyInputMessage('password'))
    .max(Password.maxLength, maxLengthMessage('password', Password.maxLength))
    .test(
        async (value, context) => {
        const result = valdiatePassword(value); 
        return typeof result === "string" 
            ? context.createError({ message: result }) 
            : result;
        }
    ),

    role: yup.string().required(notSelectedMessage('role'))
});
