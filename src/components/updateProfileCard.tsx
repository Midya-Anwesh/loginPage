import { updateProfileSchema } from "@/validation/updateProfile.schema";
import { type inputFormData } from "@/types/inputForm.type";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { CustomInput } from "./customInput";
import React, { useState } from "react";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "./ui/dialog";

import '../styles/updateProfileForm.css';

export type updateProfileData = Omit<inputFormData, 'role'>;

type updateProfilePropType = {
    Open: boolean,
    toggleOpen: React.Dispatch<React.SetStateAction<boolean>>,
    clsName?: string,
    formClsName?: string,
}

export function UpdateProfileCard({ Open, toggleOpen, clsName, formClsName}: updateProfilePropType){
    const userInfo = JSON.parse(localStorage.getItem('user') ?? '{}') as inputFormData;

    const [inpType, toggleType] = useState<'text'|'password'>('password');

    const { control, formState: {errors}, handleSubmit, reset } = useForm<updateProfileData>({
        defaultValues: {
            name: userInfo.name,
            email: userInfo.email,
            password: ''
        },
        resolver: yupResolver(updateProfileSchema)
    });

    const onSubmit = (data: updateProfileData) => {
        Object.assign(userInfo, data);
        localStorage.setItem('user', JSON.stringify(userInfo));
        reset({
            name: data.name,
            email: data.email
        });
        toggleOpen(false);
    }

    return (
        <Dialog open={Open} onOpenChange={toggleOpen}>
            <DialogTrigger><></></DialogTrigger>

            <DialogContent className={`${clsName}`}>

                <DialogTitle> Update Profile </DialogTitle>

                <form onSubmit={handleSubmit(onSubmit)} className={`${formClsName}`}>

                    <CustomInput 
                    control={control}
                    name='name'
                    className='name'
                    fieldId='nameField'
                    placeholder='Emma White'
                    labelClass='nameLabel'
                    label='Name'
                    errors={errors}
                    type='text'
                    />

                    <CustomInput 
                    control={control}
                    name='email'
                    className='email'
                    fieldId='emailField'
                    placeholder='emm.white@gmail.com'
                    labelClass='emailLabel'
                    label='Email'
                    type='text'
                    errors={errors}
                    />

                    <CustomInput 
                    control={control}
                    name='password'
                    className='password'
                    fieldId='passwordField'
                    placeholder='•••••••••'
                    labelClass='passwordLabel'
                    label='Password'
                    type={inpType}
                    errors={errors}
                    
                    BeforeError={
                        () => {
                            return (
                                <div className='togglePasswordHide' onClick={
                                    () => {
                                        toggleType( inpType === "password"? "text":"password" );
                                    }
                                }/>
                            )
                        }
                    }
                    />

                    <button type='submit' className='loginBtn updateBtn bounceEffect squashClick'> Update Profile </button>
                </form>

            </DialogContent>
        </Dialog>
    )
}