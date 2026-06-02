import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogHeader, AlertDialogMedia, AlertDialogTitle, AlertDialogTrigger } from "./ui/alert-dialog";
import type { customAlertDialouge } from "@/types/deletePlayerAlertDialouge.type";
import { XIcon } from "lucide-react";

import '../styles/deletePlayerAlert.css';
import type React from "react";

export function CustomAlertDialouge({Open, setOpen, children, title, desc, deleteAction, plyerId, media,
    contentCls, headerCls, titleCls, deleteActionCls, deleteBtnText, mediaCls, mediaImgCls, descCls,
    contentBgColor, cancelIconColor
 }: customAlertDialouge){
    contentBgColor ??= '#ffffff';
    return (
        <AlertDialog open={Open} onOpenChange={setOpen}>
            <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>

            <AlertDialogContent className={`!max-w-[553px] ${contentCls}`} style={{backgroundColor: contentBgColor, '--hover-color': contentBgColor } as React.CSSProperties}>
                <AlertDialogHeader className={headerCls}>

                    <AlertDialogTitle className={titleCls}>
                        <span>{title}</span> <AlertDialogCancel className={`border-none bg-transparent hover:!bg-[var(--hover-color)] bounceEffect sqashClick`}
                        >
                            <XIcon color={cancelIconColor}/></AlertDialogCancel>
                    </AlertDialogTitle>

                    {
                        media &&
                        <div className={mediaCls}>
                            <img className={mediaImgCls} src={media} alt=""/>
                        </div>

                    }

                    <AlertDialogDescription className={descCls}>
                        {desc}
                        
                    </AlertDialogDescription>
                </AlertDialogHeader>

                { deleteAction &&
                <div className={deleteActionCls}>
                <AlertDialogAction className="deletAlertAccept" onClick={() => deleteAction(plyerId ?? -1)}>
                {deleteBtnText ?? "Delete"}
                </AlertDialogAction>
                </div>
                }
            </AlertDialogContent>

        </AlertDialog>
    )
}