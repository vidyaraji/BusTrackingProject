import TrackingPage from './TackingPage.jsx';
import OfflineTrackingPage from './OfflineTrackingPage.jsx';
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import NoInternetPage from '../NoInternetPage.jsx';

function UsersTrackingPage() {
    const [InternetError, setInternetError] = useState(!navigator.onLine);
    const [sharing, setSharing] = useState(null);
    const [loading, setLoading] = useState(true);
    const { busNo } = useParams();

    useEffect(() => {

        const fetchStatus = async () => {

            setLoading(true);

            try {
                const res = await fetch(`http://localhost:8080/api/location/${busNo}`);

                if (!res.ok) {
                    setSharing(false);
                    setInternetError(false);
                    setLoading(false);
                    return;
                }

                const text = await res.text();

                // Empty response = driver not sharing
                if (!text) {
                    setSharing(false);
                    setInternetError(false);
                    setLoading(false);
                    return;
                }

                const data = JSON.parse(text);

                setSharing(data.sharing);
                setInternetError(false);
                setLoading(false);

            } catch (error) {
                // Internet OFF
                setInternetError(true);
                setLoading(false);
                setSharing(null);   // important reset
            }
        };

        fetchStatus();

        const interval = setInterval(fetchStatus,15000);
        return () => clearInterval(interval);

    }, [busNo]);
    // useEffect(() => {
    //     fetch(`http://localhost:8080/api/location/${busNo}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             setSharing(data.sharing);
    //         });
    // }, []);
    useEffect(() => {

        const handleOffline = () => setInternetError(true);
        const handleOnline = () => setInternetError(false);

        window.addEventListener("offline", handleOffline);
        window.addEventListener("online", handleOnline);

        return () => {
            window.removeEventListener("offline", handleOffline);
            window.removeEventListener("online", handleOnline);
        };

    }, []);

    if (InternetError) {
        return <NoInternetPage />
    }
    if (loading) return <div>Loading...</div>
    if (sharing === false) return <OfflineTrackingPage />;


    return (
        <>
            <TrackingPage busNo={busNo} />
        </>
    );
}

export default UsersTrackingPage;