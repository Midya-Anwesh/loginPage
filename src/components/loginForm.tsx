import { useState } from 'react';
import { LoginFormHeader } from './loginFormHeader';
import { LoginFormFooter } from './loginFormFooter';
import { useForm } from 'react-hook-form';
import type { inputFormData } from '../types/inputFormType';
import { CustomInput } from './customInput';

export function LoginForm(){

    const [inpType, toggleType] = useState<"password"|"text">("password");
    const { handleSubmit, formState: {errors}, control, reset } = useForm<inputFormData>({
        defaultValues: {
            name: "",
            email: "",
            password: "",
            role: ""
        }
    });

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
            rules={{
                required: {
                    value: true,
                    message: "Please select a role"
                }
            }}
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
            rules={{
                required: {
                    value: true,
                    message: "Enter your name"
                },
                minLength: {
                    value: 1,
                    message: "Name can't be empty"
                }
            }}
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
            rules={{
                required: {
                    value: true,
                    message: 'Enter your email'
                },
                pattern: {
                    value: new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'),
                    message: 'Enter a valid email'
                }
            }}
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
            rules={{
                required: {
                    value: true,
                    message: 'Enter password'
                },
                validate: valdiatePassword
            }}
            
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