import styles from './DriverDashBoard.module.css';
import Contact from '../Contact/Contact.jsx';
import NavBar from '../NavBar/NavBar.jsx';
import img from '../../public/DriverImages/driver.png';
import BusNoPlate from '../DriversData/Data';
import { useState, useEffect } from 'react';




function DriverDashBoard() {

    const [watchId, setWatchId] = useState(null);
    const [isSharing, setIsSharing] = useState(false);
    const [sharingMsg, setSharingMsg] = useState({
        message:"",
        color:""
    });
    const Driverdata = JSON.parse(localStorage.getItem("DriverData"));




    useEffect(() => {
        fetch(`http://localhost:8080/api/location/${Driverdata.BusSelected}`)
            .then(res => res.json())
            .then(data => {
                setIsSharing(data.sharing);

                // If already sharing, restore watchPosition
                if (data.sharing) {
                    startSharing();
                }
            })
            .catch(() => {
                setIsSharing(false);
            });

    }, []);




    const startSharing = () => {
        const id = navigator.geolocation.watchPosition((position) => {

            const data = {
                driverName: Driverdata.DriverName,
                mobileNo: Driverdata.DriverNo,
                busNo: Driverdata.BusSelected,
                busPlate: BusNoPlate[Driverdata.BusSelected],
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            };

            fetch("http://localhost:8080/api/location/share", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            });

        });
        setWatchId(id);
        setIsSharing(true)
         setSharingMsg({
            message:"Location Is Sharing",
            color:"green"
        })
    };



    const stopSharing = () => {

        if (watchId !== null) {
            navigator.geolocation.clearWatch(watchId);
            setWatchId(null);
        }

        fetch(`http://localhost:8080/api/location/stop/${Driverdata.BusSelected}`, {
            method: "POST"
        });

        setIsSharing(false);
        setSharingMsg({
            message:"Location Is Not Yet Shared",
            color:"red"
        })
    };

    useEffect(() => {
        return () => {
            if (watchId !== null) {
                navigator.geolocation.clearWatch(watchId);
            }
        };
    }, [watchId]);

    return (
        <>
            <NavBar />
            <div className={styles.DriverDashBoard}>
                <div><img src={img} /></div>
                <div className={styles.DriverName}>{Driverdata.DriverName}</div>
                <div className={styles.LocationSharingStatus} style={{color:`${sharingMsg.color}`}}>{sharingMsg.message}</div>
                <div className={styles.BusDetails}>
                    <div className={styles.q}>
                        <div >Mobile No :</div>
                        <div >Age :</div>
                        <div > Selected Bus No. :</div>
                        <div >Experience :</div>
                        <div > Native Place :</div>
                        <div > Bus Number Plate :</div>
                    </div>
                    <div className={styles.a}>
                        <div >{Driverdata.DriverNo} </div>
                        <div >{Driverdata.Age} </div>
                        <div >{Driverdata.BusSelected} </div>
                        <div >{Driverdata.Experience} </div>
                        <div >{Driverdata.NativePlace} </div>
                        <div >{BusNoPlate[Driverdata.BusSelected]} </div>
                    </div>
                </div>
                <div className={styles.buttons}>
                    {isSharing ? (
                        <button onClick={stopSharing} style={{backgroundColor:"red"}}>Stop Sharing</button>
                    ) : (
                        <button onClick={startSharing}>Start Sharing</button>
                    )}
                </div>
            </div>

            <Contact />
        </>
    )
}

export default DriverDashBoard;