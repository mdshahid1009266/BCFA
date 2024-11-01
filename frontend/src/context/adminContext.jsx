import { createContext, useEffect, useState } from "react";
const IS=localStorage.getItem("si") === undefined ? null : JSON.parse(localStorage.getItem("si"))
export const AdminContext=createContext(IS)

export const AdminContextProvider = ({ children }) => {
    const [state,setstate ] = useState(IS);

    useEffect(() => {
        localStorage.setItem("si", JSON.stringify(state));
    }, [state]);
    

    return (
        <AdminContext.Provider value={{
            storeId:state,
            setstate
        }}>
            {children}
        </AdminContext.Provider>
    );
};

