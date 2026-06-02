import { Comment } from '@/constants/limits';
import { emptyInputMessage, minLengthMessage } from '@/constants/messages';
import * as yup from 'yup';

import type { commentInpType } from '@/types/commentInput.type';

export const commentSchema = yup.object<commentInpType>().shape({
    comment: yup.string().required(emptyInputMessage('comment'))
    .min(Comment.minLength, minLengthMessage('comment', Comment.minLength))
})