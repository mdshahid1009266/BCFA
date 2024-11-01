import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getAllCustomers, deleteCustomers, checkMainAdmin } from "../api"
import Spinner from "../components/spinner"
import { AdminContext } from "../context/adminContext"
export default () => {
    const [isadmin, setAdmin] = useState(false)
    const [admins, setAdmins] = useState(null)
    const { storeId } = useContext(AdminContext)

    const handleDelete = async (id) => {
        if (confirm("Are you sure to Delete")) {
            const response = await deleteCustomers(id);
            if (response.success) {
                setAdmins(response.data || null)
            } else {
                alert(response.message)
            }
        }
    }
    useEffect(() => {
        const getCustomers = async () => {
            const response = await getAllCustomers();
            if (response.success) {
                setAdmins(response.data || null)
            } else {
                alert(response.message)
            }
        }
        const checkAdmin = async () => {
            const response = await checkMainAdmin(storeId);
            if (response.success) {
                setAdmin(response.success || null)
            } else {
                setAdmin(false)
            }
        }
        checkAdmin()
        getCustomers()
    }, [])

    return (
        <div id="allAdmins">
            <div className="allAdminsContainer" >
                {!admins && <Spinner message={"Geting all Customers.."} />}
                {admins?.length ?
                    (
                        isadmin ?
                            <table className="responsive-table">
                                <thead>
                                    <tr>
                                        <th>sl</th>
                                        <th>ID</th>
                                        <th>Number</th>
                                        <th>Order</th>
                                        <th>Date</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {admins.map((user, i) => (
                                        <tr key={user._id} >
                                            <td data-label="sl">{i + 1}</td>
                                            <td data-label="ID">{user.id}</td>
                                            <td data-label="Number">{user.contactNumber}</td>
                                            <td data-label="Order">{user.order}</td>
                                            <td data-label="Date">{user.date}</td>
                                            <td data-label="Action">
                                                <button onClick={() => handleDelete(user._id)}>Delete</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            : <table className="responsive-table">
                                <thead>
                                    <tr>
                                        <th>sl</th>
                                        <th>ID</th>
                                        <th>Number</th>
                                        <th>Order</th>
                                        <th>Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {admins.map((user, i) => (
                                        <tr key={user._id} >
                                            <td data-label="sl">{i + 1}</td>
                                            <td data-label="ID">{user.id}</td>
                                            <td data-label="Number">{user.contactNumber}</td>
                                            <td data-label="Order">{user.order}</td>
                                            <td data-label="Date">{user.date}</td>

                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                    )

                    : <div className="adduserTtle flexc flex-col">
                        <h2 className="text-2xl md:text-3xl font-bold my-6 text-center text-[#001d3d]">No Customer Found</h2>
                        <Link to="/panel" className="actionbtn max-w-[180px] pc">GO Back</Link>
                    </div>
                }
            </div>
        </div>
    )
}