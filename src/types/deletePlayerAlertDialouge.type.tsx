import type React from "react";
import type { ReactNode } from "react";

export type customAlertDialouge = {
    contentCls?: string;
    contentBgColor?: string;
    cancelIconColor?: string;
    children?: ReactNode;
    title?: string;
    titleCls?: string;
    header?: string;
    headerCls?: string;
    desc?: string | React.JSX.Element;
    descCls?: string;
    deleteAction?: (id: number) => void;
    deleteActionCls?: string;
    deleteBtnText?: string;
    plyerId?: number;
    media?: string;
    mediaCls?: string;
    mediaImgCls?: string;
    Open?: boolean;
    setOpen?: React.Dispatch<React.SetStateAction<boolean>>
}