

// new
async function newBlog(req, res)  {
     res.render('blogs/new')
}
// create
async function createBlog(req, res)  {
    
}
// index
async function indexBlog(req, res)  {
    res.render("blogs/index")
}
// show
async function showBlog(req, res)  {
    res.render('blogs/show')
}
// delete
async function deleteBlog(req, res)  {
    
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