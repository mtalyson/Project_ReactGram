const express = require("express")
const router = express.Router()

// user controller
const { register } = require("../controllers/UserController")

// middlewares
const validate = require("../middlewares/handleValidation")

// user routes
router.post("/register", validate, register)

module.exports = router