import adminSchema from "../database/adminSchema.js"

const getMainAdmin = async (req, res) => {
    try {
        const resData = await adminSchema.findOne({ id: req.params.id })
        if (resData.role !== "main") res.status(400).json({ message: "Your are not  Allowed to change Admin data" });
        else {
            res.status(201).json(resData);
        }
    } catch (error) {
        res.status(412).json(error)
    }
}

const updateMainAdmin = async (req, res) => {
    const data = req.body;
    try {
        const resData = await adminSchema.findById(req.params._id)
        if (resData.role !== "main") res.status(400).json({ message: "Your are not  Allowed to change Admin data" });
        else {
            const updatedData = await adminSchema.findByIdAndUpdate(req.params._id, {
                $set: data,
            }, { new: true })
            res.status(201).json(updatedData);
        }

    } catch (error) {
        res.status(412).json(error.message)
    }
}
const checkMainAdmin = async (req, res) => {
    try {
        const resData = await adminSchema.findOne({ id: req.params.id })
        if (resData?.role !== "main") res.status(400).json({ message: "not admin" });
        else res.status(201).json({ message: "Admin" });
    } catch (error) {
        res.status(412).json(error.message)
    }
}
// const getSingelStudent = async (req, res, nxt) => {
//     const studentid = req.params.id;
//     try {
//         const resData = await userSchema.findOne({ id: studentid });
//         res.status(200).json(resData)
//     } catch (error) {
//         console.log(error);
//     }
// }
const adminLogin = async (req, res) => {
    const data = req.body;
    const newData = await adminSchema.findOne({ id: data.id });
    if (newData) {
        if (data.pass === newData.password) res.status(201).json(newData);
        else res.status(400).json({ message: "Password is not correct" });
    }
    else {
        res.status(404).json({ message: "admin is not found" });
    }
}

const getAllAdmins = async (req, res) => {
    const id = req.params.id;

    try {
        const data = await adminSchema.findOne({ id: id });
        if (data && data.role === "main") {
            const resData = await adminSchema.find({ role: "sub" });
            res.status(201).json(resData)
        } else {
            res.status(404).json({ message: "You are not allowd to see all admins" });
        }
    } catch (error) {
        res.status(412).json(error.message)
    }
}
const createSubAdmin = async (req, res) => {
    const data = req.body;
    const id = req.params.id;
    data.role = "sub";

    const newData = new adminSchema(data);
    try {
        const response = await adminSchema.findOne({ id: id });
        if (response && response?.role === "main" && response?.id !== data.id) {
            const resData = await newData.save();
            res.status(201).json(resData)
        } else {
            res.status(404).json({ message: "You are not allowd to create an admin" });
        }
    } catch (error) {
        res.status(412).json(error.message)
    }
}
const deleteSubAdmin = async (req, res) => {
    const id = req.params.id;
    try {
        await adminSchema.deleteOne({ id: id })
        const resData = await adminSchema.find({ role: "sub" });
        res.status(201).json(resData)
    } catch (error) {
        res.status(412).json(error.message)
    }
}




export { getMainAdmin, updateMainAdmin, checkMainAdmin, adminLogin, createSubAdmin, getAllAdmins, deleteSubAdmin }







const mainAdmin = {
    id: "BCFA000111",
    password: "mdshahid7384",
    role: "main"
}
const createMainAdmin = async () => {
    const adminData = new adminSchema(mainAdmin);
    try {
        const newData = await adminData.save();
        console.log(newData);
    } catch (error) {
        console.log(error);
    }
}

export default createMainAdmin;