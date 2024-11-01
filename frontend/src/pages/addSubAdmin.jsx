import { useContext, useState } from "react"
import { AdminContext } from "../context/adminContext";
import { createSubAdmin } from "../api";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/spinner";

export default () => {
    const { storeId, setstate } = useContext(AdminContext)
    const [subAdminData, setSubAdminData] = useState(null);
    const [message, setMessage] = useState(null);
    const [apiCall, setApiCall] = useState(false);

    const navigate = useNavigate()
    const handleChange = (e) => {
        setSubAdminData({
            ...subAdminData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!subAdminData.id || !subAdminData.password) {
            alert("Please fill the form")
        } else {
            setMessage("Creating Sub Admin...");
            setApiCall(true)
            const response = await createSubAdmin(storeId, subAdminData);
            if (response.success) {
                setSubAdminData(response.data || null)
                setApiCall(false)
                navigate("/panel")
                alert("New Subadmin added");
            } else {
                setApiCall(false)
                alert(response.message)
                navigate("/")
            }
        }
    };
    return (
        <div id="updateMainAdmin">
            <div className="updateMainAdminContainer">
                {
                    apiCall && <Spinner message={message} />
                }
                <div className="storeName flexc text-xl sm:text-2xl md:text-3xl font-bold my-10 sm:my-14 md:my-16">
                    <h1>Create New Subadmin</h1>
                </div>

                <div className="storeLogin flexc">
                    <form action="" className="flex flex-col gap-5 w-4/5 max-w-[400px]">
                        <input
                            type="text"
                            id="storeID"
                            name="id"
                            placeholder="Enter New Store ID"
                            className="pc sd2 rounded-md"
                            autoComplete="off"
                            onChange={handleChange}
                            value={subAdminData?.id || ""} // Always provide a controlled value
                        />
                        <input
                            type="text"
                            id="StorePass"
                            name="password"
                            placeholder="Enter Password"
                            className="pc sd2 rounded-md"
                            autoComplete="off"
                            onChange={handleChange}
                            value={subAdminData?.password || ""} // Always provide a controlled value
                        />
                        <button className="loginbtn pc sd2 rounded-md" onClick={handleSubmit}>
                            Add subAdmin
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}