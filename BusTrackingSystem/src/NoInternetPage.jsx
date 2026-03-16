import style from '../src/LocationTracking/TrackingPage.module.css'
import Contact from './Contact/Contact';

function NoInternetPage(){
    return(
        <>
        <div className={style.loadingMapCon}>
            <div>Internet Disconnected or Backend Not Reachable<br/><br/>KINDLY CONTACT INSTITUE FOR MORE ENQUERIES (scroll down for contact page)</div>
        </div>
            <Contact/>
        </>
        
    )
}


export default NoInternetPage;