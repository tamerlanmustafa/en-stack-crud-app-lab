const mongoose = require('mongoose')
const express = require('express')
const dotenv = require('dotenv')
const app = express()

const Blog = require('./models/Blogs')


// APP CONFIG
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }));
dotenv.config() 



const PORT = process.env.PORT || 3000


mongoose.connect(process.env.MONGODB_URI)

mongoose.connection.on('connected', () => {
    console.log(`Connected to MongoDB ${mongoose.connection.name} `)
}) 




mongoose.connection.on("error", (err) => {
    console.log(err)
});




app.get('/', (req, res) => {
    res.send(`salam`)
})

app.get('/new', (req, res) => {
    res.render('new')
})

app.post('/new/blog', (req, res) => {
    res.send('Your Blog has been successfully published')
})
 

app.listen(3000, console.log(`Server is running on port ${PORT}`))