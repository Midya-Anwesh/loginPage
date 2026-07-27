import type { inputFormData } from '@/types/inputForm.type';
import { assets } from '../assets/images';
import { useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router';
import { useAppDispatch } from '@/app/hooks';
import { updateState } from '@/features/user/userSlice';

export function LoginFormFooter(){

    const dispatch = useAppDispatch();
    const dummyInfo = useMemo(() => {
        return {
                name: 'Dummy User',
                email: 'emm.emm@gmail.com',
                password: 'fsgfsf$%'
            } as inputFormData
        } , []);

    const navigate = useNavigate();
    const handleClick = () => {
        dispatch(updateState(dummyInfo));
        navigate('/dashboard/role-select');
    }

    return (
        <div className='formFooter'>
            <div className="formFooterHeading">
                <p> or </p>
            </div>

            <div className='formFooterLogos'>
                <img src={assets.apple} className='logo bounceEffect squashClick' onClick={handleClick} alt=''/>
                <img src={assets.google} className='logo bounceEffect squashClick' onClick={handleClick} alt=''/>
            </div>
        </ div>
    );
}