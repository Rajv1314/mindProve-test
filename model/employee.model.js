const mongoose = require("mongoose")

const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    },
    dec: {
        type: String,
        required: true
    },
    isDeleted: {
        type: Boolean,
        default: false,
        enum: [true, false]
    }
}, {
    timestamps: true
})


const EmployeeModel = mongoose.model("employee", employeeSchema)
module.exports = EmployeeModel