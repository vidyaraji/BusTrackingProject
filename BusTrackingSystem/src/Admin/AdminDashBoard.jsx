import { useState, useEffect } from 'react';
import style from './AdminDashBoard.module.css';
import admin from '/Admin.png';
import axios from "axios";

function AdminDashBoard() {


    const [tab, setTab] = useState('1');
    const Admin = JSON.parse(localStorage.getItem('AdminName'));
    const [searchNumber, setSearchNumber] = useState("");
    const [driverId, setdriverId] = useState(null);
    const [formEnabled, setFormEnabled] = useState(false);
    const [drivers, setDrivers] = useState([]);






    const [driver, setDriver] = useState({
        name: "",
        age: "",
        phoneNumber: "",
        experience: "",
        place: "",
        photoPath: "",
        password: ""
    });


    const handleChange = (e) => {
        setDriver({
            ...driver,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formattedDriver = {
            ...driver,
            age: Number(driver.age),
            experience: Number(driver.experience)
        };

        try {
            const response = await axios.post(
                "http://localhost:8080/api/drivers/register",
                formattedDriver
            );

            alert("Driver Registered Successfully!");
            console.log(response.data);

            // Clear form
            setDriver({
                name: "",
                age: "",
                phoneNumber: "",
                experience: "",
                place: "",
                photoPath: ""
            });

        } catch (error) {
            console.error("Error:", error);
            alert("Error registering driver");
        }
    };



    //Update Driver

    const handleSearch = async () => {
        try {
            const response = await axios.get(
                `http://localhost:8080/api/drivers/mobile/${searchNumber}`
            );

            const data = response.data;

            setDriver(data);          // autofill form
            setdriverId(data.id);     // store ID for update
            setFormEnabled(true);     // enable form

            console.log(data.id);
            alert("Driver Found! You can now update details.");

        } catch (error) {
            alert("Driver Not Found!");
            setFormEnabled(false);
        }
    };



    const handleUpdate = async (e) => {
        e.preventDefault();

        console.log(driverId);
        console.log(driver);
        try {
            await axios.put(
                `http://localhost:8080/api/drivers/update/${driverId}`,
                driver
            );

            alert("Driver Updated Successfully!");
            setFormEnabled(false);

        } catch (error) {
            alert("Error updating driver");
        }
    };



    //Delete Driver





    const handleDelete = async () => {

        if (!driverId) {
            alert("Search driver first");
            return;
        }

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this driver?"
        );

        if (!confirmDelete) return;

        try {
            await axios.delete(
                `http://localhost:8080/api/drivers/delete/${driverId}`
            );

            alert("Driver deleted successfully");

            // Clear form
            setDriver({
                name: "",
                age: "",
                phoneNumber: "",
                experience: "",
                place: ""
            });

            setdriverId(null);
            setFormEnabled(false);

        } catch (error) {
            alert("Error deleting driver");
        }
    };


    //Fetch All Drivers
    useEffect(() => {
        fetchDrivers();
    }, []);

    const fetchDrivers = async () => {
        try {
            const response = await axios.get(
                "http://localhost:8080/api/drivers/all"
            );
            setDrivers(response.data);
        } catch (error) {
            console.error("Error fetching drivers", error);
        }
    };


    return (
        <>
            <div className={style.AdminDashBoard}>
                <div className={style.AdminNav}>
                    <div className={style.welcome}> <img src={admin} />
                        <p>Welcome <span>{Admin} </span></p></div>
                    <div className={style.NavList}>
                        <ul>
                            <div onClick={() => setTab('1')}><li className={tab == 1 ? style.activeTab : style.tab}>Register A New Driver</li></div>
                            <div onClick={() => setTab('2')}><li className={tab == 2 ? style.activeTab : style.tab}>Update Driver Information</li></div>
                            <div onClick={() => setTab('3')}><li className={tab == 3 ? style.activeTab : style.tab}>Remove Driver Information</li></div>
                            <div onClick={() => setTab('4')}><li className={tab == 4 ? style.activeTab : style.tab}>Drivers List</li></div>
                            <div onClick={() => setTab('5')}><li className={tab == 5 ? style.activeTab : style.tab}>Bus List</li></div>
                        </ul>
                    </div>
                </div>




                {/* <div className={tab==1? style.activeContent:style.Content}> */}
                <div className={`${style.mainContent} ${tab == 1 ? style.activeContent : style.Content}`}>
                    <div className={style.DriverRegister}>
                        <h3>Register a New Driver</h3>
                        <form onSubmit={handleSubmit}><label> Upload a Photo
                            < input type="file" accept='image/*' /></label>
                            <input type="name" name="name" placeholder="Enter Driver Name" value={driver.name} onChange={handleChange} />
                            <input type="number" name="age" placeholder="Enter Driver Age" value={driver.age} onChange={handleChange} />
                            <input type="number" name="phoneNumber" placeholder="Enter Driver Number" value={driver.phoneNumber} onChange={handleChange} />
                            <input type="number" name="experience" placeholder="Enter Driver Experience" value={driver.experience} onChange={handleChange} />
                            <input type="name" name="place" placeholder="Enter Driver Place" value={driver.place} onChange={handleChange} />
                            <input type="password" name="password" placeholder="set a Password" value={driver.password} onChange={handleChange} />
                            <input type="submit" value="Add New Driver" />
                        </form>
                    </div>
                </div>
                {/* </div> */}

                <div className={`${style.mainContent} ${tab == 2 ? style.activeContent : style.Content}`}>
                    <div className={style.updateDriver}>
                        <h3>Update Driver</h3>
                        <div className={style.forSearch}>
                            <input
                                type="text"
                                placeholder="Enter Mobile Number"
                                value={searchNumber}
                                onChange={(e) => setSearchNumber(e.target.value)}
                            />

                            <button onClick={handleSearch}>Search</button></div>

                        <form onSubmit={handleUpdate}>
                            <label>Driver Name
                                <input
                                    type="text"
                                    name="name"
                                    value={driver.name}
                                    onChange={handleChange}
                                    disabled={!formEnabled}
                                /></label>


                            <label>Driver Age
                                <input
                                    type="number"
                                    name="age"
                                    value={driver.age}
                                    onChange={handleChange}
                                    disabled={!formEnabled}
                                /></label>


                            <label>Driver Mobile Number
                                <input
                                    type="text"
                                    name="phoneNumber"
                                    value={driver.phoneNumber}
                                    onChange={handleChange}
                                    disabled={!formEnabled}
                                /></label>


                            <label>Driver Experience
                                <input
                                    type="number"
                                    name="experience"
                                    value={driver.experience}
                                    onChange={handleChange}
                                    disabled={!formEnabled}
                                /></label>


                            <label>Driver Place
                                <input
                                    type="text"
                                    name="place"
                                    value={driver.place}
                                    onChange={handleChange}
                                    disabled={!formEnabled}
                                /></label>

                            <button type="submit" disabled={!formEnabled}>
                                Update Driver
                            </button>

                        </form>
                    </div>
                </div>


                <div className={`${style.mainContent} ${tab == 3 ? style.activeContent : style.Content}`}>
                    <div className={style.removeDriver}>
                        <h3>Remove a Driver</h3>
                        <div className={style.forSearch}>
                            <input
                                type="text"
                                placeholder="Enter Mobile Number"
                                value={searchNumber}
                                onChange={(e) => setSearchNumber(e.target.value)}
                            />

                            <button onClick={handleSearch}>
                                Search
                            </button>
                        </div>
                        <div className={style.tableContainer}>
                        <table >
                            <tr>
                                <td>Name</td>
                                <td>Age</td>
                                <td>Mobile No.</td>
                                <td>Experience</td>
                                <td>Place</td>
                            </tr>
                            <tr>
                                <td>{driver.name}</td>
                                <td>{driver.age}</td>
                                <td>{driver.phoneNumber}</td>
                                <td>{driver.experience}</td>
                                <td>{driver.place}</td>
                            </tr>
                        </table>
                        </div>
                        <button id={style.delete} onClick={handleDelete} disabled={!formEnabled}>
                            Delete
                        </button>
                    </div>
                </div>

                <div className={`${style.mainContent} ${tab == 4 ? style.activeContent : style.Content}`}>
                    <div className={style.driverList}>
                        <h3>Drivers List</h3>

                        <table >
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Age</th>
                                    <th>Phone</th>
                                    <th>Experience</th>
                                    <th>Place</th>
                                </tr>
                            </thead>

                            <tbody>
                                {drivers.length > 0 ? (
                                    drivers.map((driver) => (
                                        <tr key={driver.id}>
                                            <td>{driver.id}</td>
                                            <td>{driver.name}</td>
                                            <td>{driver.age}</td>
                                            <td>{driver.phoneNumber}</td>
                                            <td>{driver.experience}</td>
                                            <td>{driver.place}</td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="6">No Drivers Found</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                        <button onClick={fetchDrivers}>Refresh Data</button>
                        <marquee style={{ color: "red" }}>Click Refresh Data for Updation of Driver Details </marquee>
                    </div>
                </div>
            </div>
        </>

    )
}


export default AdminDashBoard;