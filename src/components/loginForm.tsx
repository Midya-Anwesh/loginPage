import { useState } from 'react';
import { LoginFormHeader } from './loginFormHeader';
import { LoginFormFooter } from './loginFormFooter';
import { useForm } from 'react-hook-form';
import type { inputFormData } from '../types/inputFormType';

export function LoginForm(){

    const [inpType, toggleType] = useState("password");
    const { register, handleSubmit, formState: {errors} } = useForm<inputFormData>({
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

    return(
        <>

        <div className='loginForm'>

        <LoginFormHeader />

        <form className='loginFormFields' onSubmit={handleSubmit((data) => console.log(data))}>

            <div className='role'>
                <label htmlFor="roleField" className='roleLabel'> Your role </label>
                <div className='inptWrapper'/>
                <select {...register("role", {required: {
                    value: true,
                    message: "Please select a role"
                }})} id='roleField'>
                    <option value={""}> Select your role </option>
                    <option value='parent'> Parent  </option> 
                </select>
                <p className='inputErrors'> {errors.role?.message} </p>

            </div>

            <div className='name'>
                <label htmlFor="nameField" className='nameLabel'> Name </label>
                <div className='inptWrapper' />
                <input type='text' placeholder='Emma White' {...register("name", {
                    required: {
                        value: true,
                        message: "Enter Your name"
                    },
                    minLength: {
                        value: 1,
                        message: "Enter your name"
                    }
                })} id="nameField"/>
                <p className='inputErrors'> {errors.name?.message} </p>
            </div>
            
            <div className='email'>
                <label htmlFor="emailField" className='emailLabel'> Email </label>
                <div className='inptWrapper'/>
                <input type='text' {...register("email", {
                    required: {
                        value: true,
                        message: "Enter your Email"
                    },
                    pattern: {
                        value: new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'),
                        message: 'Enter a valid email'
                    }
                })} placeholder="emm.white@gmail.com" id="emailField"/>
                <p className='inputErrors'> {errors.email?.message} </p>
            </div>

            <div className='password'>
                <label htmlFor="passwordField" className='passwordLabel'> Password </label>
                <div className='inptWrapper'/>
                <input type={inpType} {...register("password", {
                    required: {
                        value: true,
                        message: "Enter your password"
                    },
                    validate: valdiatePassword
                })} placeholder={'•••••••••'} id="passwordField"/>
                <div className='togglePasswordHide' onClick={
                    () => {
                        toggleType( inpType === "password"? "text":"password" );
                    }
                }/>
                <p className='inputErrors'> {errors.password?.message} </p>
            </div>

            <button type='submit' className='loginBtn'> Login </button>
        </form>

        <LoginFormFooter />

        </div>

        </>
    );
}