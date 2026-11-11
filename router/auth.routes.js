const express = require("express")
const router = express.Router()

const {registrar} = require("../controller/auth.controller")

router.post("/registrar", registrar)

module.exports = router