const express = require('express')
const propertiesRouter = express.Router()

propertiesRouter.get('/', (req,res) => {
    try {
        res.send({'properties': ['Alijo', 'Ninga']})
    } catch (error) {
        console.log(error)
    }
})

module.exports = propertiesRouter