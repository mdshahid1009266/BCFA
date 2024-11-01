import express from "express"
const router = express.Router()


import { getCustomerID, createNewCustomer, getCustomer, updateCustomer, getAllCustomers,deleteCustomer } from "../controllers/customerController.js";

router.get("/getCustomerID", getCustomerID)
router.post("/createNewCustomer", createNewCustomer)
router.post("/getCustomer/:id", getCustomer)
router.post("/updateCustomer/:id", updateCustomer)
router.post("/deleteCustomer/:id", deleteCustomer)
router.get("/getAllCustomers", getAllCustomers)


export default router;
