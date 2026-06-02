import { notSelectedMessage } from '@/constants/messages';
import * as yup from 'yup';

type subsCriptionSelect = {
    subscriptionPlan: string;
}

export const subscriptionValidationSchema = yup.object<subsCriptionSelect>().shape(
    {subscriptionPlan: yup.string().required(notSelectedMessage('subscription Plan'))}
)