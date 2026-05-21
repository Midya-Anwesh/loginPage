import type { inputFormData } from "./inputFormType";
import type { Control, RegisterOptions, FieldErrors } from "react-hook-form";

export type customInputType = {
    control: Control<inputFormData>;
    name: 'name'|'email'|'password'|'role';
    rules?: RegisterOptions<inputFormData>;
    className: string;
    errors: FieldErrors<inputFormData>;
    labelClass: string;
    label: string;
    fieldId: string;
    placeholder?: string;
    type?: 'text'|'password';
    logoClass?: string;
    errorClass?: string;
    options?:
    {
        key: string;
        value: string;
    }[];
    BeforeError?: () => React.JSX.Element;
}