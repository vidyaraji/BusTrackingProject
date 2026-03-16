import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import L from "leaflet";
import busIcon from "leaflet/dist/images/bus-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from './TrackingPage.module.css';
import { Tooltip } from "react-leaflet";
import Contact from "../Contact/Contact";
import driverImage from '../../public/DriverImages/driver.png'


function TrackingPage() {
    const [location, setLocation] = useState(null);
    // const data=JSON.parse(localStorage.getItem("DriverData"));
    const { busNo } = useParams();


    const DefaultIcon = L.icon({
        iconUrl: busIcon,
        iconSize: [50, 50],
        iconAnchor: [20, 40],
        popupAnchor: [0, -40],
        shadowUrl: markerShadow
    });

    L.Marker.prototype.options.icon = DefaultIcon;

    useEffect(() => {

        const fetchLocation = () => {
            fetch(`http://localhost:8080/api/location/${busNo}`)
                .then(res => {
                    if (res.status === 204) {
                        setLocation(null);
                        return null;
                    }
                    return res.json();
                })
                .then(data => {
                    if (data) setLocation(data);
                });
        };

        fetchLocation(); // first call immediately

        const interval = setInterval(fetchLocation, 3000);

        return () => clearInterval(interval);

    }, [busNo]);

    console.log(location);

    if (!location) return <div className={style.loadingMapCon}><div>Loading Map...</div></div>;

    return (
        <>
            <div className={style.TrackingPage}>
                {/* <div > */}
                    <MapContainer
                    className={style.map}
                        center={[location.latitude, location.longitude]}
                        zoom={25}
                        style={{height:"90vh",width:"70%"}}
                    >
                        <TileLayer
                            attribution="&copy; OpenStreetMap contributors"
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />

                        <Marker
                            position={[location.latitude, location.longitude]}
                            icon={DefaultIcon}
                        >
                            <Tooltip permanent direction="top" offset={[0, -35]}>
                                <div>
                                    <strong>Bus:</strong> {location.busNo} <br />
                                    <strong>Driver:</strong> {location.driverName}<br />
                                    <strong>Updated At:</strong> {location.updatedAt}
                                </div>
                            </Tooltip>
                        </Marker>
                    </MapContainer>
                {/* </div> */}
                <div className={style.DriverDetails}>
                    <img src={driverImage} width={100} />
                    <h1>Operator Details</h1>
                    <div>
                        <p>Name: {location.driverName}</p>
                        <p>Name: {location.mobileNo}</p>
                        {/* <p>Name: {location.}</p> */}
                    </div>
                    <h1>Bus Details</h1>
                    <p>Bus No: {location.busNo}</p>
                    <p>Bus Plate: {location.busPlate}</p>
                    <button>Contact</button>
                </div>
            </div>
            <Contact />
        </>

    );
}


export default TrackingPage;
