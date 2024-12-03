const express = require('express')
const usersRouter = express.Router()

usersRouter.get('/', (req,res) => {
    try {
        res.send({'users': ['Joshua Ombasa', 'Sheila Subira']})
    } catch (error) {
        console.log(error)
    }
})

module.exports = usersRouter