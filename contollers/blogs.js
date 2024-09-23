const Blog = require('../models/Blogs')

// new
async function newBlog(req, res)  {
     res.render('blogs/new')
}
// create
async function createBlog(req, res)  {
    const createdBlog = await Blog.create(req.body)
    res.redirect('/blogs')
}
// index
async function indexBlog(req, res) {
    const allRides = await Blog.find()

    res.render("blogs/index", {blogs: allRides})
}
// show
async function showBlog(req, res) {
    try {
        const foundBlog = await Blog.findById(req.params.id)
        res.render(`blogs/show`, {blog: foundBlog})
    } catch (err) {
        console.log(err)
        res.redirect('/')
    }
   
}
// delete
async function deleteBlog(req, res) {
    try {
        await Blog.findByIdAndDelete(req.params.id)
        res.redirect('/blogs')
    } catch (err) {
        console.log(err);
        res.redirect(`/`);
    }
}
// edit
async function editBlog(req, res)  {
    res.render("blogs/edit")
}
// update
async function updateBlog(req, res)  {
    
}

module.exports = {
    new: newBlog,
    create: createBlog , 
    show: showBlog,
    index: indexBlog,
    delete: deleteBlog,
    edit: editBlog,
    update: updateBlog
}