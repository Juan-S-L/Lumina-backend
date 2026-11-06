const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")

const app = express()

dotenv.config()
app.use(cors())

const dbConection = require("./config/database")

dbConection()

const PUERTO = process.env.PUERTO

app.listen(PUERTO, () => {
    console.log("Seeeeervidor actualizando automaticamente");
    
})