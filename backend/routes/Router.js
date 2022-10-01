const express = require("express")
const router = express()

// importing user routes
router.use("/api/users", require("./UserRoutes"))

// importing photo routes
router.use("/api/photos", require("./PhotoRoutes"))

module.exports = router