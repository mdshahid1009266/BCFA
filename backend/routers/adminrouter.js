import express from "express"
const route = express.Router()

import { getMainAdmin, updateMainAdmin, checkMainAdmin, adminLogin, createSubAdmin, deleteSubAdmin, getAllAdmins } from "../controllers/adminController.js"

route.put("/getMainAdminData/:id", getMainAdmin)
route.put("/updateMainAdmin/:_id", updateMainAdmin)
route.post("/checkMainAdmin/:id", checkMainAdmin)
route.post("/createSubAdmin/:id", createSubAdmin)
route.delete("/deleteSubAdmin/:id", deleteSubAdmin)
route.post("/adminLogin", adminLogin)
route.post("/getAllAdmins/:id", getAllAdmins)
route.put("/create-subadmin", updateMainAdmin)



export default route;