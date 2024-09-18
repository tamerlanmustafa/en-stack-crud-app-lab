const mongoose = require('mongoose')
const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const methodOverride = require('method-override')



const app = express()
dotenv.config() 

const Blog = require('./models/Blogs')


// Middleware
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'))
app.use(morgan('dev'))
app.use(express.json())
app.use(methodOverride('_method'))



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
    
})

app.post('/new/blog', async (req, res) => {
    res.render('publishPage')
    try {
        const createBlog = Blog.create(req.body)
        res.redirect('/blogs')
    } catch (err) {
        res.status(400).json({error: err.message})
        console.log(err)
    }
    
})
 

app.listen(3000, console.log(`Server is running on port ${PORT}`))