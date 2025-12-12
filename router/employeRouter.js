const express = require("express")
const router = express.Router()
const { addEmployee, deletedEmployee, getAllEmployee, getAllDeletedEmployee } = require('../controllers/exployeecontroller')
router.post("/add", addEmployee)
router.delete("/delete/:id", deletedEmployee)
router.get("/getAll", getAllEmployee)
router.get("/getAllDelete", getAllDeletedEmployee)
module.exports = router