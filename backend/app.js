require("dotenv").config()

const express = require("express")
const path = require("path")
const cors = require("cors")

const port = process.env.PORT
const app = express()

// config Json and Form Data response
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// config cors
app.use(cors({credentials: true, origin: "http://localhost:3000"}))

// config upload directory
app.use("/uploads", express.static(path.join(__dirname, "/uploads")))

// config database connection
require("./config/db.js")

// routes
const router = require("./routes/Router.js")
app.use(router)

// start app
app.listen(port, () => {
  console.log(`App rodando na porta ${port}`)
})