import { assets } from '../assets/images';

export function PlayStoreBanner(){
    return (
        <div className='banner'>
            <div className='circle'></div>
            <img src={assets.playArrow} className='playArrow'/>
            <img src={assets.PlayStoreBanner} className='playstoreBanner'/>
        </div>
    )
}