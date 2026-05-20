import { assets } from '../assets/images';

export function LoginFormFooter(){
    return (
        <div className='formFooter'>
            <div className="formFooterHeading">
                <p> or </p>
            </div>

            <div className='formFooterLogos'>
                <img src={assets.apple} className='logo'/>
                <img src={assets.google} className='logo'/>
            </div>
        </ div>
    );
}