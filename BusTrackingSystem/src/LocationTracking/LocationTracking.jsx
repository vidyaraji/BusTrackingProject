import { useState } from 'react';
import style from './BusLogIn.module.css';
import Contact from '../Contact/Contact';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';



function LocationTracking() {
    const { register, handleSubmit, reset } = useForm();
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [id, setId] = useState("");
    const [email, setEmail] = useState("");
    const [loginStatus, setLoginStatus] = useState({
        message: "",
        color: ""
    });
    // const[loginEmail,setLoginEmail]=useState("");
    // const[loginPassword,setLoginPassword]=useState("");



    const navigate = useNavigate();

    const LogIn = (e) => {
        e.preventDefault();

        const data = {
            email,
            password
        }
        fetch("http://localhost:8080/api/users/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.text())
            .then(result => {
                if (result == "valid") {
                    setLoginStatus({
                        message: "Login Credentials Are Valid",
                        color: "green"
                    })
                    // navigate('/LocationTrackingLogin/TrackingPage')
                    document.getElementById("LogInSuccessful").style = "display:block"
                }
                else {
                    setLoginStatus({
                        message: "Invalid Email or Password",
                        color: "red"
                    })
                }
            });
        setEmail("");
        setPassword("");

    }


    const Submit = (e) => {
        e.preventDefault();


        const data = {
            name,
            email,
            password,
            // id
        }
        fetch("http://localhost:8080/api/users/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log("Registered:", data);
            });
        alert("Registered Successfully. LogIn To Track Your Bus");
        setEmail("");
        setPassword("");
        setName("");
        setId("");

    }


    const registerToRegister = (e) => {
        document.getElementById("LogIn").style = "display:none"
        document.getElementById("register").style = "display:flex";
    }

    const ClickToLogIn = () => {
        document.getElementById("LogIn").style = "display:flex"
        document.getElementById("register").style = "display:none";
    }

    const buses = [
        { busNo: 1, from: "Trichy", to: "Avaniyapuram", busPlate: "TN CF3465", route: "FlowerMarket" },
        { busNo: 2, from: "Tambaram", to: "Thirumangalam", busPlate: "TN AB1234", route: "Kappalur" },
        { busNo: 3, from: "Coimbatore", to: "Trichy", busPlate: "TN XY9876", route: "RTO" },
        { busNo: 4, from: "Aladipatti", to: "Periyar", busPlate: "TN QP5285", route: "Goverment Hospital" }
    ];







    return (
        <>
            <div className={style.BusLogIn}>
                <div className={style.LogInSuccessful} id="LogInSuccessful">
                    <div className={style.BusSelction}>
                        <p>Login Successful</p>
                        <p>Select Your Bus To Track</p>
                        <ul>
                            <div className={style.BusList}>
                                {buses.map((bus) => (
                                    <div key={bus.busNo}>
                                        <li><div className={style.BusNo}><div>Bus No.{bus.busNo}</div><div>Bus Plate No. : {bus.busPlate}</div></div>
                                            <div className={style.BusDestination}><div>{bus.from}</div><span >&rarr;</span><div>{bus.to}</div></div>
                                            <div className={style.BusRoute}><b>Route :</b> Flower Market</div></li>
                                        <button onClick={() => navigate(`/LocationTrackingLogin/TrackingPage/${bus.busNo}`)}>Track</button>
                                    </div>

                                ))

                                }
                            </div>
                            {/* <div className={style.BusList}>
                                <li><div className={style.BusNo}><div>Bus No.2</div><div>Bus Plate No. : TN FF5681</div></div>
                                    <div className={style.BusDestination}><div>Tambaram</div> <span >&rarr;</span> <div>Thirumangalam</div></div>
                                    <div className={style.BusRoute}><b>Route :</b> kappalur</div></li>
                                <button onClick={() => navigate(`/LocationTrackingLogin/TrackingPage/2`)}>Track</button></div>
                            <div className={style.BusList}>
                                <li><div className={style.BusNo}><div>Bus No.3</div><div>Bus Plate No. : TN KK9231</div></div>
                                    <div className={style.BusDestination}><div>Coimbatore</div> <span >&rarr;</span><div>Trichurapalli</div></div>
                                    <div className={style.BusRoute}><b>Route :</b>Flower Market</div></li>
                                <button onClick={() => navigate(`/LocationTrackingLogin/TrackingPage/3`)}>Track</button></div>

                            <div className={style.BusList}>
                                <li><div className={style.BusNo}><div>Bus No.4</div><div>Bus Plate No. : TN ET5467</div></div>
                                    <div className={style.BusDestination}><div>Aladipatti</div> <span >&rarr;</span> <div>Periyar</div></div>
                                    <div className={style.BusRoute}> <b>Route :</b> Flower Market</div></li>
                                <button onClick={() => navigate(`/LocationTrackingLogin/TrackingPage/4`)}>Track</button></div> */}
                        </ul>
                    </div>
                </div>
                {/* <div> */}
                <div className={style.img1}>
                    {/* <img src="BusLogIn.jpg" className={style.img1}/> */}


                    <div className={style.LogIn} id="LogIn">
                        <div><img src="LogIn.jpg" /></div>
                        <div className={style.form}>
                            <h3>Welcome Back !!</h3>
                            <form onSubmit={LogIn}>
                                <input type="email" id="email" placeholder='Enter Your Email Id' value={email} onChange={(e) => setEmail(e.target.value)} />
                                <input type="password" id="password" placeholder='Enter Your Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                                <p style={{ color: loginStatus.color }}>{loginStatus.message}</p>
                                < input type="submit" value="LogIn" onClick={LogIn} />
                            </form>
                            <div className={style.register}>
                                <p>Not Registered?</p>
                                <a onClick={registerToRegister}>Click to register</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`${style.LogIn} ${style.registerPage}`} id="register">
                    <div className={style.form}>
                        <h3>Register To Track</h3>
                        <form onSubmit={Submit}>
                            <input type="name" id="name" placeholder='Set Username' value={name} onChange={(e) => setName(e.target.value)} />
                            <input type="password" id="password" placeholder='Set Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                            <input type="number" id="id" placeholder='Mobile Number' value={id} onChange={(e) => setId(e.target.value)} />
                            <input type="mail" id="email" placeholder='Email Id' value={email} onChange={(e) => setEmail(e.target.value)} />
                            < input type="submit" value="Register" />
                        </form>
                        <div className={style.register}>
                            <p>Registered?</p>
                            <a onClick={ClickToLogIn}>Click to LogIn</a>
                        </div>
                    </div>
                    <div><img src="./registerPage.png" /></div>
                </div>
            </div>
        </>
    )
}

export default LocationTracking;