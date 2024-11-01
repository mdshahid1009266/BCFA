import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AdminContext } from "../context/adminContext";
import { adminLogin } from "../api"
import Spinner from "../components/spinner";
// import Modal from "../components/modal";
export default () => {
    const { setstate } = useContext(AdminContext)
    const navigate = useNavigate()
    const [loginData, setLoginData] = useState({
        id: "",
        pass: "",
    });
    const [apiCall, setApiCall] = useState(false);

    const handleChange = (e) => {
        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!loginData.id || !loginData.pass) {
            alert("Please fill the form")
        } else {
            setApiCall(true)
            const response = await adminLogin(loginData);
            if (response.success) {
                setstate(response.data.id || null)
                setApiCall(false)
                navigate("/")
            } else {
                setApiCall(false)
                alert(response.message)
            }
        }

    };

    return (
        <div id="login">
            <div className="loginContainer">
                {
                    apiCall && <Spinner message="Logging..." />
                }
                <div className="storeLogo flexc">
                    <img src="/images/logo.png" className="w-36 sm:w-56 md:w-80" alt="Burger city frankfurter allee" />
                </div>
                <div className="storeName flexc text-xl sm:text-2xl md:text-6xl font-bold mb-10 sm:mb-14 md:mb-16">
                    <h1>Burger City Frankfurterallee</h1>
                </div>

                <div className="storeLogin flexc">
                    <form action="" className="flex flex-col gap-5 w-4/5 max-w-[400px]">
                        <input
                            type="text"
                            id="storeID"
                            name="id"
                            placeholder="Enter Your Store ID"
                            className="pc sd2 rounded-md"
                            autoComplete="off"
                            onChange={handleChange}
                            value={loginData.id} // Always provide a controlled value
                        />
                        <input
                            type="text"
                            id="StorePass"
                            name="pass"
                            placeholder="Enter Your Password"
                            className="pc sd2 rounded-md"
                            autoComplete="off"
                            onChange={handleChange}
                            value={loginData.pass} // Always provide a controlled value
                        />
                        <button className="loginbtn pc sd2 rounded-md" onClick={handleSubmit}>
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};