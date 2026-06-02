import { assets } from '../assets/images';

export function PlayStoreBanner(){
    return (
        <div className='banner bounceEffect squashClick' style={{['--bg-color' as any]: '#29281E'}}>
            <div className='circle'></div>
            <img src={assets.playArrow} className='playArrow' alt=''/>
            <img src={assets.PlayStoreBanner} className='playstoreBanner' alt=''/>
        </div>
    )
}