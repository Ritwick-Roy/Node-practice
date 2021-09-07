const express=require('express'); //this passes the func we're gonna use next
const morgan=require('morgan');
const mongoose=require('mongoose');
const blogRoutes=require('./routes/blogRoutes');
const app=express();  //this invokes the express function and creates an instance of the app

//connect to mongoDB
const dbURI='mongodb+srv://rishi:rishi@cluster0.4p55l.mongodb.net/node-learn?retryWrites=true&w=majority';
mongoose.connect(dbURI,{useNewUrlParser:true,useUnifiedTopology:true})  //async task
    .then((result)=>{
        app.listen(3000);
        console.log('Listening at port 3000');
    }) //listen for requests if connected to db only
    .catch((err)=>console.log(err));

//register view engine
app.set('view engine','ejs'); //this lets us configure app settings
//app.set('views','myviews');   //it searches for ur views in myviews folder

//middleware and static files like css or images
app.use(express.static('public')); //everything in public folder is accessible to browser now
app.use(express.urlencoded({extended:true})); //takes url encoded data and parses into an object
app.use(morgan('dev')); //third-party logger,can also use 'tiny' as argument

//mongoose and mongo sandbox routes
// app.get('/add-blog',(req,res)=>{
//     const blog=new Blog({
//          title:'new blog 1',
//          snippet:'about my new blog',
//          body:'more about my new blog'
//     });
//     blog.save()
//         .then((result)=>{
//             res.send(result);
//         })
//         .catch((err)=>{
//             console.log(err);
//         });
// });

// app.get('/all-blogs',(req,res)=>{
//     Blog.find()
//         .then((result)=>{
//             res.send(result);
//         })
//         .catch((err)=>{
//             console.log(err);
//         });
// });

// app.get('/single-blog',(req,res)=>{
//     Blog.findById('613742ff9756ec8dff48d271')
//         .then((result)=>{
//             res.send(result);
//         })
//         .catch((err)=>{
//             console.log(err);
//         });
// });

app.get('/',(req,res)=>{
    //res.send('<p>home page</p>');  //automatically sets the header and sets the statusCode too
    //can send data as objects to the page for dynamic content
    res.redirect('/blogs');
});

app.get('/about',(req,res)=>{
    // res.send('<p>about page</p>');
    res.render('about',{title:'About'});
});

//blog routes
app.use('/blogs',blogRoutes);

//express matches the names top to bottom so use will be executed only if nothing else matched with it, everything is matched only once
//404 page
app.use((req,res)=>{
    res.status(404).render('404',{title:'404'});
});