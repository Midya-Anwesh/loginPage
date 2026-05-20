import { assets } from '../assets/images';

export function LoginFormHeader(){
    return (
        <div className="formHeader">
            <div className='important'>
                <img src={assets.important} className="formHeaderImg"/>
                <p> Important: </p>
            </div>
            <p> Use your own email, not the player's email.</p>
        </div>
    );
}