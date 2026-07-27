import { useState } from 'react';
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

import { useAppSelector, useAppDispatch } from '@/app/hooks';
import { setComment } from '@/features/comment/coachCommentSlice';

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

    const coachCommentfromStore = useAppSelector(state => state.coachComment);
    const dispatch = useAppDispatch();
    console.log(`coachCommentfromStore: ${JSON.stringify(coachCommentfromStore)}`);


    let coachComment = null;
    if (coachCommentfromStore.hasOwnProperty(commentId)) {
        coachComment = {
            timeStamp: coachCommentfromStore[commentId].timeStamp,
            content: coachCommentfromStore[commentId].content
        }
    }
    
    const [isEditing, toggleEditing] = useState<boolean>(false);
    const [openDeleteAlert, toggleDeleteAlert] = useState<boolean>(false);
    
    const { control, handleSubmit, reset } = useForm<commentInpType>({
        defaultValues: {
            comment: ''
        }, resolver: yupResolver(commentSchema)
    })

    const onSubmit = (data: commentInpType) => {
        toggleEditing(false);
        dispatch(setComment({
            coachId: commentId,
            timeStamp: currTimeStamp(),
            content: data.comment
            
        }));
    }

    const handleEditClick = () => {
        reset({
            comment: coachComment?.content
        });
        toggleEditing(true);
    }

    // Delete the comment
    const handleDelete = () => {
        dispatch(setComment({
            coachId: commentId,
            timeStamp: currTimeStamp(),
            content: null
        }));

        reset({
            comment: ''
        })
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


    console.log(coachComment);
    return (
        <>
        <div className="commentHeader">
            Coach's Comment
            { (coachComment || isEditing) && coachComment?.content && <div className="editDeleteOption">
                <img className="editIcon" alt="" src={isEditing? assets.editingPencil : assets.editPen} onClick={handleEditClick}/>
                <img className="deleteIcon bounceEffect" alt="" src={assets.commentDeleteBin} onClick={()=> toggleDeleteAlert(prev => !prev)}/>
            </div> }
        </div>

        <div className="commentContent">
        

            {(!coachComment || !coachComment.content || isEditing) &&
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
                coachComment && coachComment.content && !isEditing &&
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