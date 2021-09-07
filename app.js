const express=require('express'); //this passes the func we're gonna use next
const morgan=require('morgan');
const app=express();  //this invokes the express function and creates an instance of the app

//register view engine
app.set('view engine','ejs'); //this lets us configure app settings
//app.set('views','myviews');   //it searches for ur views in myviews folder

//listen for requests
app.listen(3000);

//middleware example, basic logger
// app.use((req,res,next)=>{
//     console.log('new request made:');
//     console.log('host: ',req.hostname);
//     console.log('path: ',req.path);
//     console.log('method: ',req.method);
//     next();
// });

//third-party logger
app.use(morgan('dev'));  //can also use 'tiny' as argument

//middleware and static files like css or images
app.use(express.static('public')); //everything in public folder is accessible to browser now

app.get('/',(req,res)=>{
    //res.send('<p>home page</p>');  //automatically sets the header and sets the statusCode too
    //can send data as objects to the page for dynamic content
    const blogs=[
        {title:'ritwick',snippet:'102016018'},
        {title:'rishi',snippet:'102016201'},
        {title:'roy',snippet:'102016200'},
    ];
    res.render('index',{title:'Home',blogs:blogs});
});

app.get('/blogs/create',(req,res)=>{
    //res.send('<p>home page</p>');  //automatically sets the header and sets the statusCode too
    res.render('create',{title:'Blogs'});
});

app.get('/about',(req,res)=>{
    // res.send('<p>about page</p>');
    res.render('about',{title:'About'});
});

//express matches the names top to bottom so use will be executed only if nothing else matched with it, everything is matched only once
//404 page
app.use((req,res)=>{
    res.status(404).render('404',{title:'404'});
});
