import { useEffect, useRef, useState } from 'react';
import { useForm } from "react-hook-form";

import { CustomInput } from "@/components/customInput.tsx";
import { yupResolver } from '@hookform/resolvers/yup';
import { commentSchema } from '@/validation/comment.schema.tsx';
import { assets } from "@/assets/images";

import { Button } from './ui/button';

import type { commentInpType } from '@/types/commentInput.type';
import { Avatar, AvatarFallback } from './ui/avatar';
import { Card, CardDescription, CardHeader, CardTitle } from './ui/card';

import { CustomAlertDialouge } from './customAlertDialouge';

type commentAPIResType = {
    timeStamp: string,
    content: string
}

function CommentSectionAvatar({ initial, name }: { initial: string, name: string }){
    return(
        <div className="coachInfo">
        <Avatar>
            <AvatarFallback className="coachAvatar"> {initial} </AvatarFallback>
        </Avatar>
        <span className='coachName'> {name} </span>
        </div>
    )

}

export function CommentInput({coachName, commentId}:
    {
        coachName: string,
        commentId: string

    }
    ){
    // load coach comment if any
    const comment: commentAPIResType = JSON.parse(localStorage.getItem(commentId) ?? 'null')

    const [coachComment, setCoachComment] = useState<commentAPIResType|null>(comment);
    const [isEditing, toggleEditing] = useState<boolean>(false);
    const [openDeleteAlert, toggleDeleteAlert] = useState<boolean>(false);
    
    const { control, handleSubmit, reset } = useForm<commentInpType>({
        defaultValues: {
            comment: ''
        }, resolver: yupResolver(commentSchema)
    })

    const onSubmit = (data: commentInpType) => {
        toggleEditing(false);
        setCoachComment({
            timeStamp: currTimeStamp(),
            content: data.comment
        });
    }

    const handleEditClick = () => {
        reset({
            comment: coachComment?.content
        });
        toggleEditing(true);
    }

    // Delete the comment, change state, then useEffect will remove from localstorage
    const handleDelete = () => {
        setCoachComment(null);
        reset({
            comment: ''
        });
        toggleEditing(false);
    }

    const currTimeStamp = () => (
        new Date()
        .toLocaleString('en-GB', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        }).replace(',', ' ')
    )

    useEffect(
        () => localStorage.setItem(commentId, JSON.stringify(coachComment)),
        [coachComment]
    )

    return (
        <>
        <div className="commentHeader">
            Coach's Comment
            { (coachComment || isEditing) && <div className="editDeleteOption">
                <img className="editIcon" alt="" src={isEditing? assets.editingPencil : assets.editPen} onClick={handleEditClick}/>
                <img className="deleteIcon bounceEffect" alt="" src={assets.commentDeleteBin} onClick={()=> toggleDeleteAlert(prev => !prev)}/>
            </div> }
        </div>

        <div className="commentContent">
        

            {(!coachComment || isEditing) &&
            <form className='commentForm' onSubmit={handleSubmit(onSubmit)}>
            <CommentSectionAvatar initial={coachName.charAt(0).toUpperCase()} name={coachName}/>
            <div className="commentInputWrapper">
            <CustomInput 
                control= { control }
                name="comment"
                className="commentInput"
                placeholder="write comment here..."
                fieldId={crypto.randomUUID().toString()}
                type="textarea"
            />

            <Button  className='sendMsgBadge bounceEffect squashClick' type='submit'>
                <img className="sendMsgLogo" src={assets.sendMsgIcon} alt=""/>
            </Button>
            </div>
            </form>
            }

            {
                coachComment && !isEditing &&
                <Card className='commentCard'>
                    <CardHeader className='commentCardHeader'>
                        <CardTitle className='commentCardTitle'>
                            <CommentSectionAvatar initial={coachName.charAt(0).toUpperCase()} name={coachName}/>
                            <span className='commentTimeStamp'> {coachComment?.timeStamp ?? currTimeStamp()} </span>
                        </CardTitle>

                        <CardDescription className='commentDesc'>
                            {coachComment?.content}
                        </CardDescription>
                    </CardHeader>
                </Card>
            }

        </div>

        <CustomAlertDialouge title="Are you sure?" desc="Are you sure you want to delete the comment?"
        deleteAction={handleDelete}
        contentCls="alertContent"
        titleCls="deleteAlertTitle"
        headerCls="deleteAlertHeader"
        deleteActionCls="deleteActions bounceEffect"
        deleteBtnText="Yes, Delete"
        Open={openDeleteAlert}
        setOpen={toggleDeleteAlert}
        />
        </>
    )
}