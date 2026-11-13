const express = require("express")
const router = express.Router()
const {registerValidator, loginValidator} = require("../validator/auth.validator")
const validadorMiddleware = require("../middleware/auth.middleware")

const {registrar, login} = require("../controller/auth.controller")

router.post("/registrar", registerValidator, validadorMiddleware, registrar)
router.get("/login", loginValidator, validadorMiddleware, login)


module.exports = router