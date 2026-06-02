import type { ElementType } from "react";
import type { inputFormData } from "./inputForm.type";
import type { Control, RegisterOptions, FieldErrors, FieldValues, FieldName, Path } from "react-hook-form";
import type { updateProfileData } from "@/components/updateProfileCard";

export type customInputType<T extends FieldValues> = {
    control: Control<T>;
    name: Path<T>;
    rules?: RegisterOptions<T, Path<T>>;
    className: string;
    errors?: FieldErrors<T>;
    labelClass?: string;
    label?: string;
    fieldId?: string;
    placeholder?: string;
    type?: 'text'|'password'|'textarea';
    logoClass?: string;
    errorClass?: string;
    fieldChildren?: React.ReactNode;
    options?:
    {
        key: string;
        value: string;
    }[];
    BeforeError?: (() => React.JSX.Element);
}