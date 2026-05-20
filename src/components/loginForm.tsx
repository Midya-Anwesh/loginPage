import { useState } from 'react';
import { LoginFormHeader } from './loginFormHeader';
import { LoginFormFooter } from './loginFormFooter';
import { useForm, Controller } from 'react-hook-form';
import type { inputFormData } from '../types/inputFormType';

export function LoginForm(){

    const [inpType, toggleType] = useState("password");
    const { handleSubmit, formState: {errors}, control } = useForm<inputFormData>({
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

            <Controller
            name='role'
            control={control}
            rules={{
                required: {
                    value: true,
                    message: "Please select a role"
                }
            }}
            render={
                ({ field: { onChange, value} }) => (
                    <div className='role'>
                    <label htmlFor="roleField" className='roleLabel'> Your role </label>
                    <div className='inptWrapper'/>
                    <select id='roleField' value={value} onChange={onChange}>
                        <option value={""}> Select your role </option>
                        <option value='parent'> Parent  </option> 
                    </select>
                    <p className='inputErrors'> {errors.role?.message} </p>
                    </div>
                )
            }
            />


            <Controller 
            name='name'
            control={control}
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
            render={
                ({field: {onChange, value}}) => (
                    <div className='name'>
                    <label htmlFor="nameField" className='nameLabel'> Name </label>
                    <div className='inptWrapper' />
                    <input type='text' placeholder='Emma White' id="nameField" value={value} onChange={onChange}/>
                    <p className='inputErrors'> {errors.name?.message} </p>
                    </div>
                )
            }
            />
            

            <Controller 
            name='email'
            control={control}
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
            render={
                ({field: {onChange, value}}) => (
                    <div className='email'>
                    <label htmlFor="emailField" className='emailLabel'> Email </label>
                    <div className='inptWrapper'/>
                    <input type='text' placeholder="emm.white@gmail.com" value={value} id="emailField" onChange={onChange}/>
                    <p className='inputErrors'> {errors.email?.message} </p>
                </div>
                )
            }
            />


            <Controller 
            name='password'
            control={control}
            rules={{
                required: {
                    value: true,
                    message: 'Enter password'
                },
                validate: valdiatePassword
            }}
            render={
                ({ field: {onChange, value} }) => (
                    <div className='password'>
                    <label htmlFor="passwordField" className='passwordLabel'> Password </label>
                    <div className='inptWrapper'/>
                    <input type={inpType}  placeholder={'•••••••••'} id="passwordField" value={value} onChange={onChange}/>
                    <div className='togglePasswordHide' onClick={
                        () => {
                            toggleType( inpType === "password"? "text":"password" );
                        }
                    }/>
                    <p className='inputErrors'> {errors.password?.message} </p>
                </div>
                )
            }
            />

            <button type='submit' className='loginBtn bounceEffect squashClick' style={{['--bg-color' as any]: '#3E3F3A'}}> Login </button>
        </form>

        <LoginFormFooter />

        </div>

        </>
    );
}