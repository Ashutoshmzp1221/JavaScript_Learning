const express = require('express');
const bodyParser = require('body-parser')
const app = express();

const PORT = 3000;

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());
//  mimic the db using an array
let blogsList = [];

// function logger(req,res,next){
//     console.log(req.url);
//     console.log(req.body)
// }

app.get('/blogs',(req,res) => {
    return res.status(404).json({
        data : blogsList,
        success : true 
    });
});

app.post('/blogs', (req,res) =>{
    blogsList.push({
        title: req.body.title, 
        content: req.body.content,
        id: Math.floor(Math.random()*1000)
    })
    return res.status(201).json({
        success: true,
    });
});

app.get('/blogs/:id', (req,res)=>{
    const result = blogsList.filter((blog) => blog.id == req.params.id);
    return res.status(201).json({
        data: result,
        success: true,
    });
})

app.delete('/blogs/:id', (req, res) => {
    const blogId = parseInt(req.params.id);
    const index = blogsList.findIndex((blog) => blog.id === blogId);
    if (index > -1) {
        blogsList.splice(index, 1);
        return res.status(200).json({
            success: true,
            message: 'Blog deleted successfully',
        });
    } else {
        return res.status(404).json({
            success: false,
            message: 'Blog not found',
        });
    }
});


app.listen(PORT, ()=>{
    console.log("Server started on PORT",PORT);
});