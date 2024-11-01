import customerSchema from "../database/customerSchema.js";
import numberSchema from "../database/numberSchema.js";

const getCustomerID = async (req, res) => {
   
    
    try {
        const resdata = await numberSchema.findOne({})
        res.status(201).json(resdata)
    } catch (error) {
        res.status(401).json(error.message)
    }
}

const createNewCustomer = async (req, res) => {
    const newdata = new customerSchema(req.body)
    try {
        let resNumber = await numberSchema.findOne({})
        const newNumber={
            id:(parseInt(resNumber.id)+1)+''
        }
        const updatedData = await numberSchema.findByIdAndUpdate(resNumber._id, {
            $set: newNumber,
        }, { new: true })
        const resdata = await newdata.save()
        res.status(201).json(updatedData)
    } catch (error) {
        res.status(401).json(error.message)
    }
}

const getCustomer = async (req, res) => {
    const id=req.params.id || req.body.id;
    try {
        const resdata=await customerSchema.find({id:id.toUpperCase()})
        res.status(201).json(resdata)
    } catch (error) {
        res.status(201).json(error.message)
    }
}
const updateCustomer = async (req, res) => {
    const id=req.params.id;
    const data=req.body;
    try {
        const updatedData = await customerSchema.findByIdAndUpdate(id, {
            $set: data,
        }, { new: true })
        res.status(201).json(updatedData)
    } catch (error) {
        res.status(201).json(error.message)
    }
}
const deleteCustomer = async (req, res) => {
    const id=req.params.id;
    try {
        let resNumber = await numberSchema.findOne({})
        const newNumber={
            id:(parseInt(resNumber.id)-1)+''
        }
        const updatedData = await numberSchema.findByIdAndUpdate(resNumber._id, {
            $set: newNumber,
        }, { new: true })
        await customerSchema.deleteOne({_id:id})
        const resdata = await customerSchema.find( {}, {_id:1,id:1,date:1,order:1,contactNumber:1 })
        res.status(201).json(resdata)
    } catch (error) {
        res.status(401).json(error.message)
    }
}
const getAllCustomers = async (req, res) => {

    try {
        const resdata = await customerSchema.find( {}, {id:1,date:1,order:1,contactNumber:1 })
        res.status(201).json(resdata)
    } catch (error) {
        res.status(201).json(error.message)
    }
}
export { getCustomerID, createNewCustomer, getCustomer, updateCustomer, getAllCustomers ,deleteCustomer}


// const createCustomerID=async ()=>{
//     const id={
//         id:"111111"
//     }
//     try {
//         const newdata=new numberSchema(id)
//         const resdata=await newdata.save()
//         console.log(resdata);
        
//     } catch (error) {
        
//     }
// }
// export default createCustomerID;