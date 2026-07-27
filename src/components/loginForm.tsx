import { useMemo, useState } from 'react';
import { LoginFormHeader } from './loginFormHeader';
import { LoginFormFooter } from './loginFormFooter';
import { useForm } from 'react-hook-form';
import type { inputFormData } from '../types/inputForm.type';
import { CustomInput } from './customInput';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginFormSchema } from '../validation/loginForm.schema';
import { useNavigate, type ActionFunctionArgs } from 'react-router';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { updateState } from '@/features/user/userSlice';


export const LoginFormAction = ({ request }: ActionFunctionArgs) => {
    return request.formData();
}

export function LoginForm(){

    // const user = useAppSelector((state) => state.user);
    const dispatch = useAppDispatch();

    const naviagte = useNavigate();
    const [inpType, toggleType] = useState<"password"|"text">("password");
    const { handleSubmit, formState: {errors}, control, reset } = useForm<inputFormData>({
        defaultValues: {
            name: '',
            role: '',
            email: '',
            password:''
        },
        resolver: yupResolver(loginFormSchema)
    });

    const roleOptions = useMemo(() => {
        return [
            {
                key: 'Select your role',
                value: ''
            },
            {
                key: 'Parent',
                value: 'parent'
            }
        ]
    }, []);
    

    const onSubmit = (data: inputFormData) => {
        // localStorage.setItem('user', JSON.stringify(data));
        dispatch(updateState({
            ...data
        }));
        reset({
            name: '',
            role: '',
            password: '',
            email: ''
        })
        naviagte('/dashboard');
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
            options={roleOptions}
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