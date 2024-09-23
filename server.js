const express = require('express')
const morgan = require('morgan')
const methodOverride = require('method-override')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

const app = express()
dotenv.config() 

const Blog = require('./models/Blogs')
const blogsController = require('./contollers/blogs')


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


app.get('/', blogsController.index)
app.get('/blogs/new', blogsController.new)
app.get('/blogs/', blogsController.index)
app.get('/show/:id', blogsController.show)
app.get('/blogs/:id/edit', blogsController.edit)
app.post('/blogs',blogsController.create)
app.delete('/blogs/:id', blogsController.delete)
app.put('/blogs/:id', blogsController.update)

app.listen(3000, console.log(`Server is running on port ${PORT}`))