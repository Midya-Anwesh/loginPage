import * as yup from 'yup';
import { emptyInputMessage, minLengthMessage, maxLengthMessage, mismatchMessage } from '@/constants/messages';
import { Password } from '@/constants/limits';
import { valdiatePassword } from './loginForm.schema';

export interface UpdatePasswordSchemaType {
    newPassword: string;
    confirmNewPassword: string;
}


export const updatePasswordSchema = yup.object<UpdatePasswordSchemaType>().shape({
    newPassword: yup.string().required(emptyInputMessage('New Password')).
    min(Password.minLength, minLengthMessage('New Password', Password.minLength))
    .max(Password.maxLength, maxLengthMessage('New Password', Password.maxLength)).test(
        async (value, context) => {
        const result = valdiatePassword(value); 
        return typeof result === "string" 
            ? context.createError({ message: result }) 
            : result;
        }
    ),

    confirmNewPassword: yup.string().required(emptyInputMessage('Confirm Password'))
    .oneOf([yup.ref('newPassword')], mismatchMessage('Confirm Password', 'New Password'))
})