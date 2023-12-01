const port = 5000;

const connectDB = require('./config/database')
const dotenv = require('dotenv').config()

const express = require("express")
const app = express()

// connecting to the database
connectDB()


// Middleware to parse the request
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/ville', require('./routes/ville.router'));

app.listen(port, () => console.log("Le serveur a démarré au port " + port))

