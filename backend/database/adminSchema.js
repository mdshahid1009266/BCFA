import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: String
})

export default mongoose.model("Admin",adminSchema)
