import { useState } from "react";
import styles from './NavBar.module.css';
import DriverLogIn from "../Drivers/DriverLogIn";
import AdminLogIn from "../Admin/AdminLogIn";

function NavBar(){
    const[activeTab,setActiveTab]=useState('home');
    const[DriverLogInPage,setDriverLogInPage]=useState(false);
    const[AdminLogInPage,setAdminLogInPage]=useState(false);

    const goToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth"
    });
  };

  const goToHome = () => {
        console.log("gotoContact")
    document.getElementById("home")?.scrollIntoView({
      behavior: "smooth"
    });
  };

    return(
    <div className={styles.MainNavBar} >
        <div className={styles.CollegeName}>@abcCollegeOfEducation</div>
        <ul>
          <li className={activeTab==='home'? styles.active: ''} onClick={()=>{setActiveTab('home'); goToHome()}}><a><span>Home</span></a></li>
          <li className={activeTab==='admin'? styles.active: ''} onClick={()=>setAdminLogInPage(true)}><a><span>Admin</span></a></li>
          <li className={activeTab==='driver'? styles.active: ''} onClick={()=>setDriverLogInPage(true)}><a><span>Driver</span></a></li>
          <li className={activeTab==='contact'? styles.active: ''} onClick={()=>{setActiveTab('contact'); goToContact()}}><a><span>Contact</span></a></li>
        </ul>
        {DriverLogInPage && <DriverLogIn close={setDriverLogInPage}/>}
        {AdminLogInPage && <AdminLogIn close={setAdminLogInPage}/>}
    </div>
    )
}

export default NavBar;