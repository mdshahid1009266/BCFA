import mongoose from "mongoose"
// {
//     "company": "abc",
//     "department": "cse",
//     "contactNumber": "01887457489",
//     "firstName": "md",
//     "lastName": "shahid",
//     "plz": "asdfsdf",
//     "city": "Chattogram",
//     "streetName": "Zakir Hossain Road",
//     "houseNumber": "12/A",
//     "doorbellName": "nothing",
//     "floor": "12",
//     "roomNumber": "2",
//     "email": "mdhsiad7384@gmail.com",
//     "date": "18/10/2024",
//     "customerId": "BCFA111111",
//     "order": 2
// }
const customerShema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    company: {
        type: String,
    },
    department: {
        type: String,
    },
    contactNumber: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    plz: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    streetName: {
        type: String,
        required: true
    },
    houseNumber: {
        type: String,
        required: true
    },
    doorbellName: {
        type: String
    },
    floor: {
        type: String
    },
    roomNumber: {
        type: String
    },
    email: {
        type: String,
    },
    order: {
        type: Number,
    },
    date: {
        type: String,
        default: Date.now
    }
});

export default mongoose.model('User', customerShema);