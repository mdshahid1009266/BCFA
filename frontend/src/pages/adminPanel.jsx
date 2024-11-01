import { useContext, useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AdminContext } from "../context/adminContext"
import { checkMainAdmin } from "../api"

export default () => {
    const navigate = useNavigate()
    const { storeId, setstate } = useContext(AdminContext);
    const [isAdmin, setIsAdmin] = useState(false)
    const Logout = () => {
        setstate(null)
        navigate("/login")
    }
    const gohome = () => {
        navigate("/")
    }
    useEffect(() => {
        const checkAdmin = async () => {
            const response = await checkMainAdmin(storeId)
            if (response.success) setIsAdmin(true)
            else setIsAdmin(false)
        }
        checkAdmin()
    })
    return (
        <div id="adminPanel">
            <div className="adminPanelContainer">
                <div className="storeName flexc text-xl sm:text-2xl md:text-3xl font-bold my-10 sm:my-14 md:my-16">
                    <h1>Admin Panel</h1>
                </div>
                {
                    isAdmin ?
                        <div className="homeActions flexc flex-col md:flex-row flex-wrap gap-5">
                            <div className="actionItem">
                                <Link to={"/allAdmins"} className="actionbtn pc sd2 rounded-md">All Admins</Link>
                            </div>
                            <div className="actionItem">
                                <Link to={"/addSubAdmin"} className="actionbtn pc sd2 rounded-md">Add subAdmin</Link>
                            </div>
                            <div className="actionItem">
                                <Link to={"/update"} className="actionbtn pc sd2 rounded-md">Update</Link>
                            </div>
                            <div className="actionItem">
                                <button className="actionbtn pc sd2 rounded-md" onClick={Logout}>Logout</button>
                            </div>
                            <div className="actionItem">
                                <button className="actionbtn pc sd2 rounded-md" onClick={gohome}>Home</button>
                            </div>
                        </div>
                        : <div className="homeActions flexc flex-col md:flex-row flex-wrap gap-5">
                            <div className="actionItem">
                                <button className="actionbtn pc sd2 rounded-md" onClick={Logout}>Logout</button>
                            </div>
                            <div className="actionItem">
                                <button className="actionbtn pc sd2 rounded-md" onClick={gohome}>Home</button>
                            </div>
                        </div>
                }

            </div>
        </div>
    )
}