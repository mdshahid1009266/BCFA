import { useState } from "react";
import { searchCustomer } from "../api";
import Spinner from "../components/spinner";
import CustomerInfo from "./customerInfo";

export default () => {
    const [state, setState] = useState("");
    const [data, setData] = useState(null);  // Set initial state to null
    const [apiCall, setApiCall] = useState(false);

    const fetchData = async () => {
        if (state) {
            setApiCall(true);
            setData(null);  // Clear previous data before new search
            const response = await searchCustomer(state);
            setApiCall(false);
            if (response.success) {
                setData(response?.data || []);
            } else {
                setData([]);
                alert(response.message);
            }
        } else {
            alert("please fill the input");
        }
    };

    const handleKey = (e) => {
        if (e.key === "Enter") {
            fetchData();
        }
    };

    const handleSearch = () => {
        fetchData();
    };

    return (
        <div id="search">
            {apiCall && <Spinner message={"Searching Customer..."} />}
            <div className="searchContainer">
                <div className="searchBar flexc gap-5 my-5 flex-col md:flex-row">
                    <input
                        type="text"
                        placeholder="Enter Customer ID"
                        className="pc w-72 max-w-full sd2 rounded-md"
                        autoComplete="off"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        onKeyDown={handleKey}
                    />
                    <button onClick={handleSearch} className="cursor-pointer loginbtn px-7 py-3 rounded sd1">
                        Search
                    </button>
                </div>
            </div>
            {data && data.length === 0 && (
                <div className="storeName flexc text-xl sm:text-2xl md:text-3xl font-bold my-10 sm:my-14 md:my-16">
                    <h1>Nothing Found</h1>
                </div>
            )}
            {data && data.length > 0 && <CustomerInfo data={data[0]} />}
        </div>
    );
};
