import React, { useState, useRef, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { AdminContext } from "../context/adminContext"
import Discount from "../components/discount"
import Order from '../components/order';
import Map from "./map"
// import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
export default () => {
    const contextData = useContext(AdminContext);
    const navigate = useNavigate()
    const IS = {
        company: '',
        department: '',
        contactNumber: '',
        firstName: '',
        lastName: '',
        plz: '',
        city: '',
        streetName: '',
        houseNumber: '',

        doorbellName: '',
        floor: '',
        roomNumber: '',
        email: '',

        customerId: '',
        date: getDate(),
    }
    const [customer, setCustomer] = useState(IS);
    const [order, setOrder] = useState(0);
    const [showmap, setShowmap] = useState(false);
    // Create refs for each input
    const refs = {
        company: useRef(null),
        department: useRef(null),
        contactNumber: useRef(null),
        firstName: useRef(null),
        lastName: useRef(null),
        plz: useRef(null),
        city: useRef(null),
        streetName: useRef(null),
        houseNumber: useRef(null),
        doorbellName: useRef(null),
        floor: useRef(null),
        roomNumber: useRef(null),
        email: useRef(null),

        // customerId: useRef(null),
        // date: useRef(null),
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCustomer({
            ...customer,
            [name]: value,
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        // const address = `${customer.roomNumber} ${customer.streetName}, ${customer.city}, ${customer.plz}`;
        // const geocodedLocation = await geocodeAddress(address);
        // setLocation(geocodedLocation);
        console.log(customer);

    };
    const handleReset = (e) => {
        e.preventDefault();
        setCustomer(IS)
    }
    const handleMap = (e) => {
        e.preventDefault();
        setShowmap(true)
    }
    const goHome = (e) => {
        e.preventDefault();
        navigate("/")
    }


    const handleKeyDown = (e, fieldName) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            const nextField = Object.keys(refs)[Object.keys(refs).indexOf(fieldName) + 1];
            if (nextField) {
                refs[nextField].current.focus();
            }
        }
    };



    return (
        <div id="adduser">
            <div className="adduserContaienr">
                <div className="adduserTtle">
                    <h2 className="text-2xl font-bold my-6 text-center text-[#001d3d]">Add New Customer</h2>
                </div>
                <div className="pageContext grid grid-cols-2 md:grid-cols-4 gap-y-2">
                    <div className="pageContextItem">
                        <p><span className="font-medium">Store :</span> Burger City Frankfurterallee</p>
                    </div>
                    <div className="pageContextItem">
                        <p><span className="font-medium"> Customer ID :</span> BCFA176235</p>
                    </div>
                    <div className="pageContextItem">
                        <p><span className="font-medium">Date     : </span> {getDate()}</p>
                    </div>
                    <div className="pageContextItem">
                        <p> <span className="font-medium"> Street Name: </span> Frankfurter Allee 255 <br /> 10365 Berlin </p>
                    </div>
                </div>
                <div className="userForm">
                    <div className="my-5">
                        <form className="space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Company</label>
                                    <input
                                        ref={refs.company}
                                        type="text"
                                        name="company"
                                        value={customer.company}
                                        onChange={handleChange}
                                        onKeyDown={(e) => handleKeyDown(e, 'company')}
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Department</label>
                                    <input
                                        ref={refs.department}
                                        type="text"
                                        name="department"
                                        value={customer.department}
                                        onChange={handleChange}
                                        onKeyDown={(e) => handleKeyDown(e, 'department')}
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Contact Number</label>
                                    <input
                                        ref={refs.contactNumber}
                                        type="text"
                                        name="contactNumber"
                                        value={customer.contactNumber}
                                        onChange={handleChange}
                                        onKeyDown={(e) => handleKeyDown(e, 'contactNumber')}
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">First Name</label>
                                    <input
                                        ref={refs.firstName}
                                        type="text"
                                        name="firstName"
                                        value={customer.firstName}
                                        onChange={handleChange}
                                        onKeyDown={(e) => handleKeyDown(e, 'firstName')}
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Last Name</label>
                                    <input
                                        ref={refs.lastName}
                                        type="text"
                                        name="lastName"
                                        value={customer.lastName}
                                        onChange={handleChange}
                                        onKeyDown={(e) => handleKeyDown(e, 'lastName')}
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">PLZ</label>
                                    <input
                                        ref={refs.plz}
                                        type="text"
                                        name="plz"
                                        value={customer.plz}
                                        onChange={handleChange}
                                        onKeyDown={(e) => handleKeyDown(e, 'plz')}
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">City</label>
                                    <input
                                        ref={refs.city}
                                        type="text"
                                        name="city"
                                        value={customer.city}
                                        onChange={handleChange}
                                        onKeyDown={(e) => handleKeyDown(e, 'city')}
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Street Name</label>
                                    <input
                                        ref={refs.streetName}
                                        type="text"
                                        name="streetName"
                                        value={customer.streetName}
                                        onChange={handleChange}
                                        onKeyDown={(e) => handleKeyDown(e, 'streetName')}
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">House Number</label>
                                    <input
                                        ref={refs.houseNumber}
                                        type="text"
                                        name="houseNumber"
                                        value={customer.houseNumber}
                                        onChange={handleChange}
                                        onKeyDown={(e) => handleKeyDown(e, 'houseNumber')}
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                    />
                                </div>


                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Doorbell Name</label>
                                    <input
                                        ref={refs.doorbellName}
                                        type="text"
                                        name="doorbellName"
                                        value={customer.doorbellName}
                                        onChange={handleChange}
                                        onKeyDown={(e) => handleKeyDown(e, 'doorbellName')}
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Floor</label>
                                    <input
                                        ref={refs.floor}
                                        type="text"
                                        name="floor"
                                        value={customer.floor}
                                        onChange={handleChange}
                                        onKeyDown={(e) => handleKeyDown(e, 'floor')}
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Room Number</label>
                                    <input
                                        ref={refs.roomNumber}
                                        type="text"
                                        name="roomNumber"
                                        value={customer.roomNumber}
                                        onChange={handleChange}
                                        onKeyDown={(e) => handleKeyDown(e, 'roomNumber')}
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Email</label>
                                    <input
                                        ref={refs.email}
                                        type="email"
                                        name="email"
                                        value={customer.email}
                                        onChange={handleChange}
                                        onKeyDown={(e) => handleKeyDown(e, 'email')}
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col-reverse md:flex-row gap-2 justify-between mt-10">
                                <div className="flex flex-col">
                                    <div className="flex flex-col md:flex-row gap-2 justify-between">
                                        <div className="orders">
                                            <Order order={order} setOrder={setOrder} />
                                        </div>
                                        <div className="discount">
                                            <Discount />
                                        </div>
                                    </div>
                                    <div className="formactions flexc flex-col sm:flex-row flex-wrap gap-4  mt-6">
                                        <button className="actionbtn w-full sm:w-auto text-white px-4 py-2 rounded-md" onClick={handleSubmit}>Add</button>
                                        <button className="actionbtn w-full sm:w-auto text-white px-4 py-2 rounded-md" onClick={handleReset}>Reset</button>
                                        <button className="actionbtn w-full sm:w-auto text-white px-4 py-2 rounded-md" onClick={handleMap}>Show Map</button>
                                        <button className="actionbtn w-full sm:w-auto text-white px-4 py-2 rounded-md">Print</button>
                                        <button className="actionbtn w-full sm:w-auto text-white px-4 py-2 rounded-md" onClick={goHome}>Home</button>
                                    </div>
                                </div>
                                <div className="map w-full md:w-[400px] h-[300px] ">
                                    {
                                        showmap &&
                                        <Map data={{
                                            postcode: customer.plz,
                                            city: customer.city,
                                            streetName: customer.streetName,
                                            houseNumber: customer.houseNumber,
                                        }} />
                                    }
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}


 
const getDate = () => {
    const currentDate = new Date();
    const day = currentDate.getDate().toString().padStart(2, '0');
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const year = currentDate.getFullYear();
    const formattedDate = `${day}/${month}/${year}`;
    return formattedDate;
}