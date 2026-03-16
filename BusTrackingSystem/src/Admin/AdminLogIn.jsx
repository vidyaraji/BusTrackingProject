import styles from '../Drivers/DriversLogIn.module.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AdminLogIn() {
    const [adminName, setAdminName] = useState("");
    const [password, setPassword] = useState("");
    const [dob, setDob] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [email, setEmail] = useState("");

    
    const navigate = useNavigate();



    const LogIn = async() => {

        const data = {
            adminName,
            password,
            // dob,
            // mobileNumber,
            // email
        }

        try{
        const response = await fetch("http://localhost:8080/api/admin/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                adminName,
                password
            })
        })
        if(!response.ok){
            if(response.status==401){
                alert("Invalid Admin Credentials");
            }else{
                alert("Server Error. try Again");
            }
            return;
        }
        const result= await response.json();
        alert("LogIn Success");
        localStorage.setItem("AdminName",JSON.stringify(adminName));
        console.log(adminName)
        setAdminName("");
        setPassword("");
        navigate("/AdminDashBoard")
    }catch(error){
        console.error(error);
        alert("Backend Not reachable")
    }

    }




    return (
        <>
            <div className={styles.Modal}>
                {/* <div></> */}
                <div className={styles.Modal_Container}>
                    <h3 >Admin LogIn Only</h3>
                    <div className='Form'>
                        <input type="name" htmlFor="DriverName" placeholder='Enter Your Name' id="adminName" value={adminName} onChange={(e) => setAdminName(e.target.value)} />
                        <input type="password" htmlFor="DriverPassword" placeholder='Enter Your Password' id="password" value={password} onChange={(e) => setPassword(e.target.value)} />

                        <button onClick={LogIn}>Check Credentials</button>

                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminLogIn;