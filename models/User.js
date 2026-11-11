const mondongo = require("mongoose")

const userSchema = new mondongo.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        
    },
    password: {
        type: String,
        require: true
    },
    esVip: {
        type: Boolean,
        require: true
    },
    noSeQuePoner: {
        type: String,
    }
})

module.exports = mondongo.model("User", userSchema)