import '../App.css';
import NavBar from '../NavBar/NavBar.jsx';
import Comments from '../Comments/Comments.jsx';
import Contact from '../Contact/Contact.jsx';
import { useNavigate } from 'react-router-dom';

function Home() {

  const navigate= useNavigate();

  return(
    < > 
    <div className='Main' id="home">
      {/* <img src='/waves.svg' className='waves'/> */}

      {/* NavBar */}
      <NavBar/>

      <div className='MainContainer'>
        <div className='MainContainer1'>
          <div className='MainContainerBus'><img src="/main1.png" /><h1>Smart Transit for the Modern <br/>Campus.</h1></div>
          <h4>Never Miss Your Bus</h4>
          <button onClick={()=>navigate('./LocationTrackingLogin')}> <img src="/location.png" /> <span>Click To Track</span></button>
        </div>
        <img src="/main.png"  />
      </div>
    </div>


        {/* comments here*/}
        <Comments comments="Safety isn't just a feature it's our promise. We monitor 
        every journey to ensure your child is always in safe hands." author='- The ChairMan'/>
        <Comments comments="Your child’s safety is our highest priority. We track every mile 
        so you can have peace of mind every day." author='- The Correspont'/>
        <Comments comments="Beyond the classroom, we care. Real-time tracking is our 
        commitment to a secure and reliable commute for every student." author="- The Principal"/>



        {/* Contact Component*/}
        <Contact />  

    </>
  )
}

export default Home;
