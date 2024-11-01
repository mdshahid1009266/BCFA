import { useContext } from "react"
import { Routes, Route } from "react-router-dom"
import { AdminContext } from "../context/adminContext"
import Login from "./login"
import Home from "./home"
import Adduser from "./adduser1"
import Search from "./search"
import AdminPanel from "./adminPanel"
import AddSubAdmin from "./addSubAdmin"
import UpdateMainAdmin from "./updateMainAdmin"
import AllAdmins from "./allAdmins"
import NotFound from "./notfound"
import AllCustomers from "./allCustomers"
export default () => {
    const { storeId } = useContext(AdminContext)
    return (
        <div id="main">
            <div className="mainContainer maxw px-2">
                <Routes>
                    <Route path='/' element={storeId ? <Home /> : <Login />} />
                    {
                        storeId && (
                            <>
                                <Route path='/view' element={< AllCustomers />} />
                                <Route path='/add' element={<Adduser />} />
                                <Route path='/search' element={<Search />} />
                                <Route path='/panel' element={<AdminPanel />} />
                                <Route path='/allAdmins' element={<AllAdmins />} />
                                <Route path='/addSubAdmin' element={<AddSubAdmin />} />
                                <Route path='/update' element={<UpdateMainAdmin />} />
                            </>
                        )
                    }
                    <Route path='/login' element={storeId ? <Home /> : <Login />} />
                    <Route path="/*" element={<NotFound />} />
                </Routes >

            </div>
        </div>
    )
}