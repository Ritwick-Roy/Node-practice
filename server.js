const http=require('http');
const fs=require('fs');
const _=require('lodash');

//npm install simply installs all the dependencies if u have the package.json 

const server=http.createServer((req,res)=>{
    //console.log(req.url,req.method);

    //lodash
    const num=_.random(0,10);
    console.log(num);

    const greet=_.once(()=>{
        console.log('hello');
    });
    greet();
    greet();

    let path='./views/';
    switch(req.url){
        case '/':
            path+='index.html';
            res.statusCode=200;
            break;
        case '/about':
            path+='about.html';
            res.statusCode=200;
            break;
        case '/about-me':
            res.statusCode=301;
            res.setHeader('Location','/about');
            res.end();
            break;
        default:
            path+='404.html';
            res.statusCode=404;
            break;
    }
    
    //set header content type
    res.setHeader('Content-type','text/html');
    // res.write('<p>hello, server</p>');
    // res.write('<h1>hello, server</h1>');
    // res.end();
    fs.readFile(path,(err,data)=>{
        if(err){
            console.log(err);
            res.end();
        }
        else{
            // res.write(data);
            res.end(data);   //in case we are sending only one item we can send it with end method
        }
    });

});

server.listen(3000,'localhost',()=>{
    console.log('listening to requests on port 3000');
});