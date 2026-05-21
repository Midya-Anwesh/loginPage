import { Controller } from "react-hook-form";
import type { customInputType } from "../types/customInputType";

export function CustomInput({ name, control, rules, className, errors, labelClass, label, fieldId, placeholder, type, logoClass, errorClass, options, BeforeError }: customInputType){
    return (
        <Controller 
        name={name}
        control={control}
        rules={rules}
        render={
            ({ field: {onChange, value} }) => (
                <div className={className}>
                    <label htmlFor={fieldId} className={labelClass}> {label} </label>
                    <div className={logoClass ?? 'inptWrapper'} />

                    {
                    type &&
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
                    <p className={errorClass ?? 'inputErrors'}> {errors[name]?.message} </p>
                </div>
            )
        }
        />
    )
}