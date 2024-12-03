const express = require("express")
const app = express()

const PORT = 4000

const usersRouter = require('./controllers/users')
const propertiesRouter  = require('./controllers/property')

app.use(express.json())

app.use('/api/users', usersRouter)
app.use('/api/properties',propertiesRouter)

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})