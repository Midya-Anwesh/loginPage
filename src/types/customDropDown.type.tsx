import type { LucideIcon } from "lucide-react";

export type dropDownItemType = {
    leftIcon?: LucideIcon|string;
    itemLabel: string;
    rightIcon?: LucideIcon|string;
    onClick?: () => void;
}

export type dropDownGroupType = {
    label: string;
    items: dropDownItemType[];
}

export type customDropdownPropType = {
    Open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    itemRef?: React.RefObject<string>;
    itemOnClick?: (param: string) => void;
    children?: React.ReactNode;
    groups?: dropDownGroupType[];
    items: dropDownItemType[];
    cls?: string;
    dropdownGroupCls?: string;
    itemCls?: string;
}