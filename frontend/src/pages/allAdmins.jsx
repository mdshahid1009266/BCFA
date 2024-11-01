import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Spinner from "../components/spinner"
import { AdminContext } from "../context/adminContext"
import { getAllAdmins, deleteSubAdmin } from "../api"
export default () => {
    const { storeId } = useContext(AdminContext)
    const [admins, setAdmins] = useState(null)
    const handleDelete = async (id) => {
        const response = await deleteSubAdmin(id);
        if (response.success) {
            setAdmins(response.data || null)
        } else {
            alert(response.message)
        }
    }
    useEffect(() => {
        const getAdminsData = async () => {
            const response = await getAllAdmins(storeId);
            if (response.success) {
                setAdmins(response.data || null)
            } else {
                alert(response.message)
            }
        }
        getAdminsData()
    }, [])

    return (
        <div id="allAdmins">
            <div className="allAdminsContainer" >
                {!admins && <Spinner message={"Geting all admins.."} />}
                {admins?.length ?
                    <table className="responsive-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Password</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {admins.map((user) => (
                                <tr key={user._id} >
                                    <td data-label="ID">{user.id}</td>
                                    <td data-label="Password">{user.password}</td>
                                    <td data-label="Action">
                                        <button onClick={() => handleDelete(user.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    : <div className="adduserTtle flexc flex-col">
                        <h2 className="text-2xl md:text-3xl font-bold my-6 text-center text-[#001d3d]">No SubAdmin Found</h2>
                        <Link to="/panel" className="actionbtn max-w-[180px] pc">GO Back</Link>
                    </div>
                }
            </div>
        </div>
    )
}