const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")

const app = express()

// rutas
const authRouter = require("./router/auth.routes")

// config
dotenv.config()
app.use(cors())
app.use(express.json())
app.use("/api", authRouter)

// base de datos
const dbConection = require("./config/database")
dbConection()

const PUERTO = process.env.PUERTO

app.listen(PUERTO, () => {
    console.log("Seeeeervidor actualizandooo automaticamente");
    
})