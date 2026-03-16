import styles from './DriversLogIn.module.css';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState,useRef } from 'react';



let DriverData;
let AllowDriver; 
let StartDrive;

function DriverLogIn({close}){
    const[driver,setDriver]=useState({
        name:"",
        experience:"",
        age:"",
        phoneNumber:"",
        place:"",
        BusSelected:""
    });
    const[enteredPhoneNumber,setPhoneNumber]=useState("");
    const[enteredDriverPassword,setDriverPassword]=useState("");
    const [isLoggedIn,setisLoggedIn]=useState(false)
    const [selectedValue, setSelectedValue] = useState("");
    const selectedValRef=useRef("");
    const [loginStatus, setLoginStatus] = useState({
        message: "",
        color: ""
    });

    const handleValueChange = (e) => {
        selectedValRef.current = e.target.value;
        setSelectedValue(e.target.value);
    }
    const navigate=useNavigate();







    const HandleLogIn = async () => {
        console.log(enteredPhoneNumber,enteredDriverPassword);
        try {
            const response = await fetch("http://localhost:8080/driver/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    phoneNumber: enteredPhoneNumber,
                    password: enteredDriverPassword
                })
            });

            if (!response.ok) {
                setisLoggedIn(false);
                setLoginStatus({
                    message: "Login credentials are invalid",
                    color: "red"
                });
                return;
            }
            const data = await response.json();
            console.log(data);
            setDriver(data)
            setisLoggedIn(true);
            setLoginStatus({
                message: "Login successful. Please select your bus.",
                color: "green"
            });
        } catch (error) {
            console.error(error);
            alert("Backend not reachable");
        }
    };








    // const HandleLogIn=()=>{
    //     // AllowDriver =Data.find(
    //     // data=> data.DriverName==enteredDriverName && data.Driverpassword== enteredDriverPassword
    //     // )
        
    //     if(AllowDriver){
    //         setisLoggedIn(true);
    //         document.getElementById("LoginStatus").innerHTML="LogIn Credentials are Valid <br />Now Your Can Select Your Bus No.";
    //         document.getElementById("LoginStatus").style="color:green";
    //     }
    //     else{
    //         document.getElementById("LoginStatus").innerHTML="LogIn Credentials are Invalid";
    //         document.getElementById("LoginStatus").style="color:red";
    //     }


        // StartDrive = () => {
        //     if (!selectedValRef.current) {
        //         alert("Please select Bus");
        //         return;
        //     }

        //     const DriverData = {
        //         DriverName: AllowDriver.DriverName,
        //         DriverImage: AllowDriver.Driverimage,
        //         BusSelected: selectedValRef.current,
        //         DriverNo: AllowDriver.MobileNo,
        //         Experience: AllowDriver.Experience,
        //         Age: AllowDriver.Age,
        //         NativePlace: AllowDriver.NativePlace
        //     };
        //     localStorage.setItem("DriverData", JSON.stringify(DriverData));
        //     navigate('./DriverDashBoard');
        // };
    // }


    StartDrive = () => {
            if (!selectedValRef.current) {
                alert("Please select Bus");
                return;
            }

            const DriverData = {
                DriverName: driver.name,
                // DriverImage: driver.image,
                BusSelected: selectedValRef.current,
                DriverNo: driver.phoneNumber,
                Experience: driver.experience,
                Age: driver.age,
                NativePlace: driver.place
            };
            localStorage.setItem("DriverData", JSON.stringify(DriverData));
            navigate('./DriverDashBoard');
        };
    


    return(
        <>
        <div className={styles.Modal}>
            {/* <div></> */}
            <div className={styles.Modal_Container}>
                <h3 > Welcome Super Man Log In Your Details</h3>
                <div className='Form'>
                    <input type="number" htmlFor="phoneNumber" placeholder='Enter Your Mobile Number' id="phoneNumber" onChange={(e)=>setPhoneNumber(e.target.value)} autoComplete="on" />
                    <input type="password" htmlFor="DriverPassword" placeholder='Enter Your Password' id="password" onChange={(e)=>setDriverPassword(e.target.value)} />
                    {/* <input type="Submit" value="Submit" onClick={HandleLogIn} /> */}

                    <button onClick={HandleLogIn}>Check Credentials</button>

                    <p style={{ color: loginStatus.color }}>
                        {loginStatus.message}</p>
                    
                   { isLoggedIn && (<div><label htmlFor="bus-select">Select Your Bus:</label>
                    <select id="bus-select" value={selectedValue} onChange={handleValueChange} >
                            <option value="">Select Bus</option>
                            <option value="1">Bus No. 1</option>
                            <option value="2">Bus No. 2</option>
                            <option value="3">Bus No. 3</option>
                            <option value="4">Bus No. 4</option>
                    </select> 
                    <button type="button" onClick={StartDrive}> Start To Drive </button></div>)}
                    
                </div>
            </div>
        </div>
        </>
    )
}


export default DriverLogIn;