const mongoose = require('mongoose')  


const blogSchema = mongoose.Schema({
    title: String,
    author: String,
    numberOfWords: Number,
    date: Date,
    category: String,
    isPrivate: { type: Boolean, default: false }
})





const Blog = mongoose.model('Blog', blogSchema) 

module.exports = Blog




