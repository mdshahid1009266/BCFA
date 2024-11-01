import axios from "axios"
const Base_Url = "https://apibcfa.vercel.app"
const getMainAdminData = async (id) => {
    try {
        const resdata = await axios.put(`${Base_Url}/getMainAdminData/${id}`)
        return { success: true, data: resdata.data };
    } catch (error) {
        return { success: false, message: error.response?.data?.message || "faild to get admin data" };
    }
}
const updateMainAdminData = async (data) => {
    try {
        const resdata = await axios.put(`${Base_Url}/updateMainAdmin/${data._id}`, data)
        return { success: true, data: resdata.data };
    } catch (error) {
        return { success: false, message: error.response?.data?.message || "faild to update admin data" };
    }
}
const checkMainAdmin = async (id) => {
    try {
        const resdata = await axios.post(`${Base_Url}/checkMainAdmin/${id}`)
        return { success: true };
    } catch (error) {
        return { success: false };
    }
}
const adminLogin = async (data) => {
    try {
        const resdata = await axios.post(`${Base_Url}/adminLogin`, data);
        return { success: true, data: resdata.data };
    } catch (error) {
        return { success: false, message: error.response?.data?.message || "Failed to admin login" };
    }
}

const createSubAdmin = async (id, data) => {
    try {
        const resdata = await axios.post(`${Base_Url}/createSubAdmin/${id}`, data)
        return { success: true, data: resdata.data };
    } catch (error) {
        return { success: false, message: error.response?.data?.message || "faild to create a subadmin" };
    }
}
const deleteSubAdmin = async (id) => {
    try {
        const resdata = await axios.delete(`${Base_Url}/deleteSubAdmin/${id}`)
        return { success: true, data: resdata.data };
    } catch (error) {
        return { success: false, message: error.response?.data?.message || "faild to delete subadmin" };
    }
}

const getAllAdmins = async (id) => {
    try {
        const resdata = await axios.post(`${Base_Url}/getAllAdmins/${id}`)
        return { success: true, data: resdata.data };
    } catch (error) {
        return { success: false, message: error.response?.data?.message || "faild to get all admin data" };
    }
}
const getCustomerId = async (id) => {
    try {
        const resdata = await axios.get(`${Base_Url}/getCustomerID`)
        return { success: true, data: resdata.data };
    } catch (error) {
        return { success: false, message: error.response?.data?.message || "faild to get new customer ID" };
    }
}
const createNewCustomer = async (data) => {
    try {
        const resdata = await axios.post(`${Base_Url}/createNewCustomer`, data)
        return { success: true, data: resdata.data };
    } catch (error) {
        return { success: false, message: error.response?.data?.message || "faild to create new customer" };
    }
}
const searchCustomer = async (data) => {
    try {
        const resdata = await axios.post(`${Base_Url}/getCustomer/${data}`, { id: data })
        return { success: true, data: resdata.data };
    } catch (error) {
        return { success: false, message: error.response?.data?.message || "faild to search customer" };
    }
}
const updateCustomer = async (props) => {
    try {
        const resdata = await axios.post(`${Base_Url}/updateCustomer/${props.id}`, props.data)
        return { success: true, data: resdata.data };
    } catch (error) {
        return { success: false, message: error.response?.data?.message || "faild to update customer" };
    }
}
const getAllCustomers = async () => {
    try {
        const resdata = await axios.get(`${Base_Url}/getAllCustomers`)
        return { success: true, data: resdata.data };
    } catch (error) {
        return { success: false, message: error.response?.data?.message || "faild to update customer" };
    }
}
const deleteCustomers = async (id) => {
    try {
        const resdata = await axios.post(`${Base_Url}/deleteCustomer/${id}`,)
        return { success: true, data: resdata.data };
    } catch (error) {
        return { success: false, message: error.response?.data?.message || "faild to delete customer" };
    }
}

export { getMainAdminData, updateMainAdminData, checkMainAdmin, adminLogin, createSubAdmin, deleteSubAdmin, getAllAdmins, getCustomerId, createNewCustomer, searchCustomer, updateCustomer, getAllCustomers, deleteCustomers }
