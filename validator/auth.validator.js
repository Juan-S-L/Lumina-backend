const {body} = require("express-validator")

const registerValidator = [
    body("name")
        .notEmpty().withMessage("Hey awebado, no veo el nombre")
        .isLength({min:3}).withMessage("Hey, ud no aprende, no?, tiene que tener minimo 3 caracteres"),
    body("email")
        .notEmpty().withMessage("El Email no puede estar vacio, bobo")
        .isEmail().withMessage("no es un email tu supuesto email que colocaste"),
    body("password")
        .notEmpty().withMessage("La contraseña no peude estar vacia")
        .isStrongPassword().withMessage("La contraseña debe contener como minimo 8 caracteres, Mayusculas, minusculas, numeros y al menos 1 caracter especial")
]

module.exports = {
    registerValidator
}