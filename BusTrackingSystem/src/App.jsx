import './App.css';
import Home from './Home/Home.jsx';
import DriverDashBoard from './Drivers/DriverDashBoard.jsx';
import LocationTracking from './LocationTracking/LocationTracking.jsx';
// import TrackingPage from './LocationTracking/TrackingPage.jsx';
import AdminDashBoard from './Admin/AdminDashBoard.jsx';
import UsersTrackingPage from './LocationTracking/UsersTrackingPage.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import "leaflet/dist/leaflet.css";



function App() {
  const router=createBrowserRouter(
    [
      {
        path:'/',
        element: <Home />
      },
      {
        path:'/DriverDashBoard',
        element: <DriverDashBoard />
      },
      {
        path:'/LocationTrackingLogin',
        element:<LocationTracking/>
      },
      {
        path:'/LocationTrackingLogin/TrackingPage/:busNo',
        element:<UsersTrackingPage/>
      },
      {
        path: '/AdminDashBoard',
        element: <AdminDashBoard/>
      }
    ]
  )
  return(
    <>
    <RouterProvider router={router} />
    </>
  )
}


export default App;