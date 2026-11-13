const {body} = require("express-validator")

const registerValidator = [
    body("name")
        .notEmpty().withMessage("Pilas, no veo el nombre")
        .isLength({min:3}).withMessage("Hey, tiene que tener minimo 3 caracteres"),
    body("email")
        .notEmpty().withMessage("El Email no puede estar vacio")
        .isEmail().withMessage("no es un email tu supuesto email que colocaste"),
    body("password")
        .notEmpty().withMessage("La contraseña no peude estar vacia")
        .isStrongPassword().withMessage("La contraseña debe contener como minimo 8 caracteres, Mayusculas, minusculas, numeros y al menos 1 caracter especial")
]
    
const loginValidator = [
    body("email")
        .notEmpty().withMessage("El Email no puede estar vacio")
        .isEmail().withMessage("no es un email"),
    body("password")
        .notEmpty().withMessage("La contraseña no peude estar vacia")
]

module.exports = {
    registerValidator,
    loginValidator
}