import userSchema from "../database/schemas.js"

import express from "express";
const router = express.Router();


router.get("/user", (req, res) => {
    try {
        console.log("its user path");
        res.send("hello")
    } catch (error) {
        console.log(error.message)
    }
})
router.get("/saveUser", async (req, res) => {
    const data = {
        name: "Mohammad Shahid",
        id: "C213124",
        age: 22
    }
    try {
        const newUserData = await userSchema.create(data); ; // Efficient bulk creation
        res.status(201).json(newUserData); // Created (201) status code for new resources
    } catch (error) {
        console.error(error.message); // Log detailed error messages for debugging
        res.status(500).json({ message: "Error saving user data" }); // Informative error response
    }
})

export default router;