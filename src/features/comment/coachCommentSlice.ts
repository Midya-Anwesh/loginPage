import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface coachCommentType {
    coachId: string;
    timeStamp: string;
    content: string | null;
}


export type coachCommentStateType = Record<string, { timeStamp: string; content: string }>;


export const coachCommentSlice = createSlice({
    name: 'coachComment',
    initialState: {} as coachCommentStateType,
    reducers: {
        setComment(state, action: PayloadAction<coachCommentType>) {
            Object.assign(state, {
                [action.payload.coachId]: {
                    timeStamp: action.payload.timeStamp,
                    content: action.payload.content
                }
            });
        }
    }
})

export const { setComment } = coachCommentSlice.actions;

export default coachCommentSlice.reducer;