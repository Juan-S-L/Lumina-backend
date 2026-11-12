const express = require("express")
const router = express.Router()
const {registerValidator} = require("../validator/auth.validator")
const validadorMiddleware = require("../middleware/auth.middleware")

const {registrar} = require("../controller/auth.controller")

router.post("/registrar", registerValidator, validadorMiddleware, registrar)

module.exports = router