const express = require("express")
const router = express.Router()

// user controller
const { register, login } = require("../controllers/UserController")

// middlewares
const validate = require("../middlewares/handleValidation")
const { userCreateValidation, loginValidation } = require("../middlewares/userValidations")

// user routes
router.post("/register", userCreateValidation(), validate, register)
router.post("/login", loginValidation(), validate, login)

module.exports = router