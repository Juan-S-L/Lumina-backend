const User = require('../models/User')

const registrar = async(peticion, respuesta) => {
    try {
        const {name,email,password,isVip,phone} = peticion.body
        let user = new User({
            name,
            email,
            password,
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

module.exports = {
    registrar
}