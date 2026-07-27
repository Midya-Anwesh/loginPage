import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { updatePasswordSchema, type UpdatePasswordSchemaType } from '../validation/updatePassword.schema';
import { useForm } from 'react-hook-form';
import { useAppSelector, useAppDispatch } from '@/app/hooks';
import { updateState } from '@/features/user/userSlice';
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from './ui/dialog';
import { CustomInput } from './customInput';

import '../styles/updatePasswordForm.css';

type updatePasswordfieldName = 'newPassword' | 'confirmNewPassword';

type updatePasswordPropType = {
    Open: boolean,
    toggleOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export function UpdatePasswordForm ({Open, toggleOpen}: updatePasswordPropType) {
    const userInfo = useAppSelector(state => state.user);
    const dispatch = useAppDispatch();
    const [inpType0, toggleType0] = useState<'text'|'password'>('password');
    const [inpType1, toggleType1] = useState<'text'|'password'>('password');

    const initialValue: UpdatePasswordSchemaType = {
        newPassword: '',
        confirmNewPassword: ''
    }

    const onSubmit = (data: UpdatePasswordSchemaType) => {
        dispatch(updateState({
            ...userInfo,
            password: data.newPassword
        }));
        reset(initialValue);
        toggleOpen(false);
    }

    const { control, handleSubmit, formState: { errors }, reset } = useForm<UpdatePasswordSchemaType>({
        defaultValues: initialValue,
        resolver: yupResolver(updatePasswordSchema)
    });


    return (
        <Dialog open={Open} onOpenChange={toggleOpen}>
            <DialogTrigger><></></DialogTrigger>

            <DialogContent className={'updatePasswordContainer'}>

                <DialogTitle> Update Password </DialogTitle>

                <form onSubmit={handleSubmit(onSubmit)} className={'updatePasswordForm'}>

                    {
                        ['newPassword', 'confirmNewPassword'].map((fieldName, index) => {
                            return <CustomInput
                                key={index} 
                                control={control}
                                name={fieldName as updatePasswordfieldName}
                                className='password'
                                fieldId='passwordField'
                                placeholder='•••••••••'
                                labelClass='passwordLabel'
                                label={fieldName === 'newPassword' ? 'New Password' : 'Confirm New Password'}
                                type={index? inpType1 : inpType0}
                                errors={errors}
                                
                                BeforeError={
                                    () => {
                                        return (
                                            <div className='togglePasswordHide' onClick={
                                                () => {
                                                    index ? toggleType1(inpType1 === "password" ? "text" : "password") : toggleType0(inpType0 === "password" ? "text" : "password");
                                                }
                                            }/>
                                        )
                                    }
                                }
                                />
                        })
                    }

                    <button type='submit' className='loginBtn updateBtn bounceEffect squashClick'> Update Password </button>
                </form>

            </DialogContent>
        </Dialog>
    )
}