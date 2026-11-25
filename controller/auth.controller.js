const User = require('../models/User')
const bcript = require("bcrypt")
const jwt = require("jsonwebtoken")

const registrar = async(peticion, respuesta) => {
    try {
        const {name,email,password,isVip,phone} = peticion.body
        let user = await User.findOne({email: email})

        if (user) {
            return respuesta.status(400).json({
                msg: "El email ya existe"
            })
        }
        
        const hash = await bcript.hash(password, 10);

        user = new User({
            name,
            email,
            password: hash,
            isVip,
            phone
        })
        await user.save()

        return respuesta.status(201).json({
            msg: "El usuario fue registrado exitosamente"
        })
    } catch (error) {
        return respuesta.status(500).json({
            msg: `Error al registrar usuario ${error.message}`
        })
    }
}

const login = async(peticion, respuesta) => {
    try {
        const {email,password} = peticion.body
        let user = await User.findOne({email: email})
        const esValida = await bcript.compare(password, user.password)

        if (!user) {
            return respuesta.status(404).json({
                msg: "Error al inciar sesion"
            })
        }else if (!esValida) {
            return respuesta.status(400).json({
                msg: "Error al inciar sesion, contraseña incorrecta"
            })
            
        }

        const token = jwt.sign(
            {id: user._id},
            process.env.LLAVE_SECRETA,
            {expiresIn: "1h"}
        )

        return respuesta.status(200).json({
            token
        })
    } catch (error) {
        return respuesta.status(500).json({
            msg: `Error al iniciar sesion: Tipo de error ${error.message}`
        })
    }
}

module.exports = {
    registrar,
    login
}
