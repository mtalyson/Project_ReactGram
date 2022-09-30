const express = require("express")
const router = express.Router()

// user controller
const { register } = require("../controllers/UserController")

// user routes
router.post("/register", register)

module.exports = router