const mondongo = require("mongoose")

const userSchema = new mondongo.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    isVip: {
        type: Boolean,
        require: true
    },
    phone: {
        type: String,
        require: true
    }
})

module.exports = mondongo.model("User", userSchema)