import { Controller, type FieldValues } from "react-hook-form";
import type { customInputType } from "../types/customInput.type";
import { Textarea } from "./ui/textarea";

export function CustomInput<T extends FieldValues>({ name, control, rules, className, fieldChildren, labelClass, label, fieldId, placeholder, type, logoClass, errorClass, options, BeforeError }: customInputType<T>){
    return (
        <div className={className}>
        {label && <label htmlFor={fieldId} className={labelClass}> { label } </label>} 
        <Controller 
        name={name}
        control={control}
        rules={rules}
        render={
            ({ field: {onChange, value}, fieldState: {error} }) => (
                <>
                    <div className={logoClass ?? 'inptWrapper'} />

                    {
                        type && type === 'textarea' &&
                        <Textarea className="break-all" placeholder={placeholder} id={fieldId} value={value} onChange={onChange} children={fieldChildren}/>
                    }

                    {
                    type && type!== 'textarea' &&
                    <input type={type} placeholder={placeholder} id={fieldId} value={value} onChange={onChange}/>
                    }

                    {
                        options && <>
                        <select id={fieldId} value={value} onChange={onChange}>
                        {
                            options.map(
                                option => (
                                    <option key={option.value} value={option.value}> {option.key} </option>
                                )
                            )
                        }
                        </select>
                        </>
                    }
                    { BeforeError && <BeforeError /> }
                    <p className={`${errorClass ?? 'inputErrors'}`}> {error?.message} </p>
                </>
            )
        }
        />
        </div>
    )
}