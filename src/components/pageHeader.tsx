import { assets } from '../assets/images';

export function PageHeader() {
    return (
        <div className='loginHeader'>
            <img src={assets.headerLogo} className='headerLogo'/>
        </div>
    )
}