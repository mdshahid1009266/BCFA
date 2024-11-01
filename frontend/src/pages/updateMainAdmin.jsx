import { useContext, useEffect, useState } from "react"
import { AdminContext } from "../context/adminContext";
import { getMainAdminData, updateMainAdminData } from "../api";
import Spinner from "../components/spinner";
import { useNavigate } from "react-router-dom";

export default () => {
    const { storeId, setstate } = useContext(AdminContext)
    const [mainAdminData, setMainAdminData] = useState(null);
    const [message, setMessage] = useState(null);
    const [apiCall, setApiCall] = useState(false);

    const navigate = useNavigate()
    const handleChange = (e) => {
        setMainAdminData({
            ...mainAdminData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!mainAdminData.id || !mainAdminData.password) {
            alert("Please fill the form")
        } else {
            setMessage("Updating Admin Data...");
            setApiCall(true)
            const response = await updateMainAdminData(mainAdminData);
            if (response.success) {
                setMainAdminData(response.data || null)
                setApiCall(false)
                setstate(response.data.id)
                navigate("/panel")
                alert("Data Updated");
            } else {
                setApiCall(false)
                alert(response.message)
            }
        }

    };
    useEffect(() => {
        const get_main_admin_data = async () => {
            setMessage("Geating Admin Data...");
            setApiCall(true)
            const response = await getMainAdminData(storeId)
            if (response.success) {
                setMainAdminData(response.data)
                setApiCall(false)
            } else {
                alert(response.message);
                setApiCall(false)
                navigate("/")
            }
        }
        get_main_admin_data();
    }, [])
    return (
        <div id="updateMainAdmin">
            <div className="updateMainAdminContainer">
                {
                    apiCall && <Spinner message={message} />
                }
                <div className="storeName flexc text-xl sm:text-2xl md:text-3xl font-bold my-10 sm:my-14 md:my-16">
                    <h1>Update Your Data</h1>
                </div>

                <div className="storeLogin flexc">
                    <form action="" className="flex flex-col gap-5 w-4/5 max-w-[400px]">
                        <input
                            type="text"
                            id="storeID"
                            name="id"
                            placeholder="Enter Your New Store ID"
                            className="pc sd2 rounded-md"
                            autoComplete="off"
                            onChange={handleChange}
                            value={mainAdminData?.id || ""} // Always provide a controlled value
                        />
                        <input
                            type="text"
                            id="StorePass"
                            name="password"
                            placeholder="Enter Your New Password"
                            className="pc sd2 rounded-md"
                            autoComplete="off"
                            onChange={handleChange}
                            value={mainAdminData?.password || ""} // Always provide a controlled value
                        />
                        <button className="loginbtn pc sd2 rounded-md" onClick={handleSubmit}>
                            Update
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}