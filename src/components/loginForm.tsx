import { useState } from 'react';
import { LoginFormHeader } from './loginFormHeader';
import { LoginFormFooter } from './loginFormFooter';
import { useForm } from 'react-hook-form';
import type { inputFormData } from '../types/inputFormType';
import { CustomInput } from './customInput';
import { yupResolver } from '@hookform/resolvers/yup';
import { formSchema } from '../schema';

export function LoginForm(){

    const [inpType, toggleType] = useState<"password"|"text">("password");
    const { handleSubmit, formState: {errors}, control, reset } = useForm<inputFormData>({
        defaultValues: {
            name: "",
            email: "",
            password: "",
            role: ""
        },
        resolver: yupResolver(formSchema)
    });

    const onSubmit = (data: inputFormData) => {
        console.log(data);
        reset();
    }

    return(
        <>

        <div className='loginForm'>

        <LoginFormHeader />

        <form className='loginFormFields' onSubmit={handleSubmit(onSubmit)}>

            <CustomInput 
            control={control}
            name='role'
            errors={errors}
            className='role'
            fieldId='roleField'
            labelClass='roleLabel'
            label='Your Role'
            options={[
                {
                    key: 'Select your role',
                    value: ''
                },
                {
                    key: 'Parent',
                    value: 'parent'
                }
            ]}
            />

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

            <button type='submit' className='loginBtn bounceEffect squashClick'> Login </button>
        </form>

        <LoginFormFooter />

        </div>

        </>
    );
}