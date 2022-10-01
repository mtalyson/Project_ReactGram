const express = require('express')
const router = express.Router()

// photo controller
const { insertPhoto } = require("../controllers/PhotoController")

// middlewares
const { photoInsertValidation } = require("../middlewares/photoValidation")
const authGuard = require("../middlewares/authGuard")
const validate = require("../middlewares/handleValidation")
const { imageUpload } = require('../middlewares/imageUpload')

// photo routes
router.post("/", authGuard, imageUpload.single("image"), photoInsertValidation(), validate, insertPhoto)

module.exports = router