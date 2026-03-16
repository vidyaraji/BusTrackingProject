import offline from '../../public/offline.jpg'
import Contact from '../Contact/Contact'

function OfflineTrackingPage() {

    const style = {
        objectFit: "contain",
        width: "100%",
        height: "100%"
    }
    const mainContainer={
        display:"flex",
        flexDirection:"column",
        width:"100%",
        height:"100%",
        backgroundColor:"#f8f8f8",
        position:"fixed"
    }
    const Message={
        textAlign:"center",
        fontSize:"20px",
        fontFamily:"Arial",
        color:"red",
        fontWeight:"bold",
        padding:"20px"
    }
    return (
        <>
            <div style={mainContainer}>
                <div style={Message}>Location is Not Yet Shared or Check Your Internet Connection</div>
                <img src={offline} style={
                    style
                } />
                <Contact/>
            </div>
        </>
    )
}

export default OfflineTrackingPage;