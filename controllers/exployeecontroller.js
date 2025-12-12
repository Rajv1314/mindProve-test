const EmployeeModel = require('../model/employee.model')

const addEmployee = async (req, res) => {
    try {
        if (!req.body) {
            throw new Error(" missing body")
        }
        const { name, email, contact, dec } = req.body
        if (!name || !email || !contact || !dec) {
            throw new Error(" missing required feiled ")
        }
        const employee = await EmployeeModel.findOne({ email })
        // console.log(employee);

        if (employee) {
            throw new Error(" emplye alrady ")

        }
        const response = await EmployeeModel.create(req.body)
        res.status(201).json({ message: "Employee created", data: response })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

const deletedEmployee = async (req, res) => {
    try {
        console.log(req);

        const id = req.params.id;
        if (!id) {
            throw new Error(" missing id")
        }

        const employee = await EmployeeModel.findOne({ _id: id })
        console.log(employee);

        if (!employee) {
            throw new Error(" emplyee not found  ")
        }
        employee.isDeleted = true;
        await employee.save()
        // const response = await EmployeeModel.updateOne({ _id: id, set: { isDeleted: true } })
        res.status(200).json({ message: "Employee Deleted"})
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

const getAllDeletedEmployee = async (req, res) => {
    try {
        const response = await EmployeeModel.find({ isDeleted: true })
        res.status(201).json({ message: "Employee created", data: response })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}
const getAllEmployee = async (req, res) => {
    try {
        const response = await EmployeeModel.find({ isDeleted: false })
        res.status(201).json({ message: "all Employee", data: response })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}


module.exports = { addEmployee, deletedEmployee,getAllDeletedEmployee,getAllEmployee }