const mondongo = require("mongoose")

const MONDONGO = process.env.MONDONGO

const dbConection = async () => {
    try {
        await mondongo.connect(MONDONGO)
        console.log("te conectaste a mondongo");
        
    } catch (error) {
        console.error("Error al conectarte al mondongo");
        
    }
}

module.exports = dbConection