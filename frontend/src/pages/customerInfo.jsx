import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import { updateCustomer } from "../api"
import Discount from "../components/discount"
import Order from '../components/order';
import MapComponent from "./map"
import PrintComponent from '../components/printComponent';
import "./customerInfo.css";

export default ({ data }) => {
    const navigate = useNavigate();
    const IS = {
        "company": "Deutsche Bank AG",
        "department": "Marketing",
        "contactNumber": "+49 69 910 70",
        "firstName": "Hans",
        "lastName": "Müller",
        "plz": "60325",
        "city": "Frankfurt am Main",
        "streetName": "Bockenheimer Landstraße",
        "houseNumber": "123",
        "doorbellName": "Büro 123",
        "floor": "2",
        "roomNumber": "3",
        "email": "hans.mueller@deutschebank.de",
        "date": "16/10/2024",
        "customerId": "BCFA176235",
        "order": 3
    };
    const { _id, __v, ...restData } = data;

    const [customerData, setCustomerData] = useState(restData);
    const [edite, setEdite] = useState(false);
    const [order, setOrder] = useState(customerData.order || 0);
    const [showmap, setShowmap] = useState(false);
    const [apiCall, setApiCall] = useState(false);
    console.log(customerData);
    
    const contentRef = useRef();
    const reactToPrintFn = useReactToPrint({ contentRef });
    const inputRefs = useRef([]);

    const handleChange = (e) => {
        setCustomerData({
            ...customerData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        let data = customerData;
        data.order = order;
        setEdite(false);
        setApiCall(true);
        const response = await updateCustomer({ data: customerData, id: _id })
        if (response.success) {
            setApiCall(false);
            const { _id, __v, ...restResData } = response.data;
            setCustomerData(restResData)
            alert("Customer Update Successfully")

        } else {
            setApiCall(false);
            alert("Customer Update failed")
        }
    };

    const handleEdite = (e) => {
        e.preventDefault();
        setEdite(!edite);
    };

    const handleMap = (e) => {
        e.preventDefault();
        setEdite(false);
        if (showmap) setShowmap(showmap + 1)
        else setShowmap(1)
    };

    const handlePrint = (e) => {
        e.preventDefault();
        setEdite(false);
        reactToPrintFn();
    };

    const goHome = (e) => {
        e.preventDefault();
        navigate("/");
    };

    const handleKeyDown = (e, index) => {
        if (e.key === "Enter") {
            e.preventDefault();
            if (index < inputRefs.current.length - 1) {
                inputRefs.current[index + 1].focus();
            } else {
                handleSubmit(e);
            }
        }
    };

    useEffect(() => {
        if (edite && inputRefs.current.length > 0) {
            inputRefs.current[0].focus();
        }
    }, [edite]);

    return (
        <div id="coustomerInfo">
            <div className="coustomerInfoContainer pc text-xl">
                <h1 className="text-2xl md:text-3xl font-bold my-6 text-center text-[#001d3d]">Customer Info</h1>
                <div className="informations grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-33">
                    {Object.entries(customerData).map(([key, value], index) => (
                        <div className="infoItem" key={key}>
                            <h3>{key}</h3>
                            {edite ? (
                                <input
                                    type="text"
                                    name={key}
                                    value={value}
                                    onChange={handleChange}
                                    onKeyDown={(e) => handleKeyDown(e, index)}
                                    ref={el => inputRefs.current[index] = el}
                                />
                            ) : (
                                <p>{value}</p>
                            )}
                        </div>
                    ))}
                </div>
                <div className="flex flex-col-reverse md:flex-row gap-2 justify-between mt-10">
                    <div>
                        <div className="flex flex-col md:flex-row flex-wrap gap-2 justify-between">
                            <div className="orders">
                                <Order order={order} setOrder={setOrder} />
                            </div>
                            <div className="discount">
                                <Discount />
                            </div>
                        </div>
                        <div className="customerInfoActions flexc flex-col sm:flex-row flex-wrap gap-4 mt-6">
                            <button className="actionbtn w-full sm:w-auto text-white px-4 py-2 rounded-md" onClick={handleEdite}>Edit</button>
                            <button className="actionbtn w-full sm:w-auto text-white px-4 py-2 rounded-md" onClick={handleSubmit}>Save</button>
                            <button className="actionbtn w-full sm:w-auto text-white px-4 py-2 rounded-md" onClick={handleMap}>Show Map</button>
                            <button className="actionbtn w-full sm:w-auto text-white px-4 py-2 rounded-md" onClick={handlePrint}>Print</button>
                            <button className="actionbtn w-full sm:w-auto text-white px-4 py-2 rounded-md" onClick={goHome}>Home</button>
                        </div>
                    </div>
                    <div className="map w-full md:w-[400px] h-[300px] ">
                        {showmap &&
                            <MapComponent data={{
                                postcode: customerData.plz,
                                city: customerData.city,
                                streetName: customerData.streetName,
                                houseNumber: customerData.houseNumber,
                                ftch: showmap
                            }} />
                        }
                    </div>
                </div>
                <div style={{ display: "none" }}>
                    <div ref={contentRef}>
                        <PrintComponent data={{
                            number: customerData.contactNumber,
                            id: customerData.id,
                            fn: customerData.firstName,
                            ln: customerData.lastName,
                            sn: customerData.streetName,
                            hn: customerData.houseNumber,
                            pc: customerData.plz,
                            city: customerData.city,
                            db: customerData.doorbellName
                        }} />
                    </div>
                </div>
            </div>
        </div>
    );
};
