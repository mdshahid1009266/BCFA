import React, { useState, useRef, useContext, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import { AdminContext } from "../context/adminContext"
import { getCustomerId, createNewCustomer } from "../api"
import Discount from "../components/discount"
import Order from '../components/order';
import MapComponent from "./map"
import Addinputes from '../components/addinputes';
import PrintComponent from '../components/printComponent';
import Spinner from '../components/spinner';
export default () => {
    const contextData = useContext(AdminContext);
    const navigate = useNavigate()
    const contentRef = useRef()
    const reactToPrintFn = useReactToPrint({ contentRef });
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

        date: getDate(),
    }
    const [customer, setCustomer] = useState(IS);
    const [order, setOrder] = useState(0);
    const [showmap, setShowmap] = useState(false);
    const [userID, setUserID] = useState("");
    const [apiCall, setApiCall] = useState(false);


    const handleSubmit = async (e) => {
        e.preventDefault();
        const requiredFields = ['contactNumber', 'firstName', 'lastName', 'plz', 'city', 'streetName', 'houseNumber', 'doorbellName', 'floor'];
        let isValid = true;

        for (let i = 0; i < requiredFields.length; i++) {
            if (!customer[requiredFields[i]]) {
                alert(`Please Fill ${requiredFields[i]} field`)
                isValid = false;
                return;
            }
        }

        let data = customer;
        if (userID && isValid && confirm("Are you really sure to add")) {
            setApiCall(true)
            data.id = userID;
            data.order = order;
            const response = await createNewCustomer(data);
            if (response.success) {
                alert("Customer Create Successfully")
                setApiCall(false)
                setUserID("BCFA" + response.data.id)
            } else {
                setApiCall(false)
                alert("Customer Create Failed")
            }
        }
    };
    const handleReset = (e) => {
        e.preventDefault();
        setCustomer(IS)
    }
    const handleMap = (e) => {
        e.preventDefault();
        if (showmap) setShowmap(showmap + 1)
        else setShowmap(1)
    }
    const handlePrint = (e) => {
        e.preventDefault();
        reactToPrintFn()
    }
    const goHome = (e) => {
        e.preventDefault();
        navigate("/")
    }
    useEffect(() => {
        const getCustomerID = async () => {
            const response = await getCustomerId();

            if (response.success) {
                setUserID("BCFA" + response.data.id)
            } else {
                alert(response.message)
            }
        }
        getCustomerID();
    }, [])
    return (
        <div id="adduser">
            {
                apiCall && <Spinner message={"Adding Customer..."} />
            }
            <div className="adduserContaienr">
                <div className="adduserTtle">
                    <h2 className="text-2xl md:text-3xl font-bold my-6 text-center text-[#001d3d]">Add New Customer</h2>
                </div>
                <div className="pageContext grid grid-cols-2 md:grid-cols-4 gap-y-2">
                    <div className="pageContextItem">
                        <p><span className="font-medium">Store :</span> Burger City Frankfurterallee</p>
                    </div>
                    <div className="pageContextItem">
                        <p><span className="font-medium"> Customer ID :</span> {userID}</p>
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
                        <div className="inputes">
                            <Addinputes customer={customer} setCustomer={setCustomer} />
                        </div>
                        <div className="flex flex-col-reverse md:flex-row gap-2 justify-between mt-10">
                            <div className="flex flex-col">
                                <div className="flex flex-col md:flex-row flex-wrap gap-2 justify-between">
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
                                    <button className="actionbtn w-full sm:w-auto text-white px-4 py-2 rounded-md" onClick={handlePrint}>Print</button>
                                    <button className="actionbtn w-full sm:w-auto text-white px-4 py-2 rounded-md" onClick={goHome}>Home</button>
                                </div>
                            </div>
                            <div className="map w-full md:w-[400px] h-[300px] ">
                                {showmap &&
                                    <MapComponent data={{
                                        postcode: customer.plz,
                                        city: customer.city,
                                        streetName: customer.streetName,
                                        houseNumber: customer.houseNumber,
                                        ftch: showmap
                                    }} />
                                }
                            </div>
                            <div style={{ display: "none" }}>
                                <div ref={contentRef}>
                                    <PrintComponent data={{
                                        number: customer.contactNumber,
                                        id: userID,
                                        fn: customer.firstName,
                                        ln: customer.lastName,
                                        sn: customer.streetName,
                                        hn: customer.houseNumber,
                                        pc: customer.plz,
                                        city: customer.city,
                                        db: customer.doorbellName
                                    }} />
                                </div>
                            </div>
                        </div>
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