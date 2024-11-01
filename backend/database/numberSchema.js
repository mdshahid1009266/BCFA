import mongoose from "mongoose";

const numerSchema=new mongoose.Schema({
    id:String,
})

export default mongoose.model('id', numerSchema);