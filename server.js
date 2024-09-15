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
    res.render('home')
})

app.get('/blogs', (req, res) => {
    res.render('blogs')
})

app.get('/blogs/new', async (req, res) => {
    res.render('new')
    try {
        const createBlog = Blog.create(req.body)
        res.redirect('/blogs')
    } catch (err) {
        res.status(400).json({error: err.message})
        console.log(err)
    }
})

app.post('/new/blog', async (req, res) => {
    res.render('publishPage')
   
})
 

app.listen(3000, console.log(`Server is running on port ${PORT}`))