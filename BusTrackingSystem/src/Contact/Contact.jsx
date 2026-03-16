import styles from './Contact.module.css';

function Contact(props){
    return(
        <>
        <div className={styles.contact} id="contact">
            <div className={styles.Collegename}>@abcCollegeOfEducation<br/> <span>Connecting our campus community with precision and care.</span></div>
           
            <div className={styles.Contactaddress}>
                <p>abc Education Institute <br/> Gills Inber Street <br/> 5th Floor, #No 23, Old Airport Road,<br/>Coimbatore</p>
                <p>Ph No. +91 4475842100 <br/> For Enquires: abcinstitute@edu.in</p>
            </div>
            <div className={styles.image}>
                <div><img src='/mail.png'/><span>Mail</span></div>
                <div><img src='/linkedIn.png'/><span>LinkedIn</span></div>
                {/* <button><img src='/website.png'/><span>WebSite</span></button> */}
                <div><img src='/location2.png'/><span>Location</span></div>
            </div>
        </div>
        </>
    )
}

export default Contact;