const express=require('express'); //this passes the func we're gonna use next

const app=express();  //this invokes the express function and creates an instance of the app

//listen for requests
app.listen(3000);

app.get('/',(req,res)=>{
    //res.send('<p>home page</p>');  //automatically sets the header and sets the statusCode too
    res.sendFile('./views/index.html',{root:__dirname});
});

app.get('/about',(req,res)=>{
    // res.send('<p>about page</p>');
    res.sendFile('./views/about.html',{root:__dirname});
});

//redirects
app.get('/about-me',(req,res)=>{
    res.redirect('./about');
});

//express matches the names top to bottom so use will be executed only if nothing else matched with it, everything is matched only once
//404 page
app.use((req,res)=>{
    res.status(404).sendFile('./views/404.html',{root:__dirname});
});
