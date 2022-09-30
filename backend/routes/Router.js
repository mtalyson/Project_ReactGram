const express = require("express")
const router = express()

// importing user routes
router.use("/api/users", require("./UserRoutes"))

module.exports = router