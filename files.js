const fs=require("fs")

//read
fs.readFile("./docs/sample.txt",(err,data)=>{
    if(err){
        console.log(err);  //try accessing files that dont exist and this will execute
    }
    //console.log(data);  //this prints a buffer which is a package of data sent to us when we read the file
    console.log(data.toString());  //so we call it like this
});

//write
fs.writeFile("./docs/doc1.txt","checking doc 1",()=>{
    console.log("file was written");  //file if doesnt exist will be created
});

//directories
if(!fs.existsSync("./dir1"))
{
    fs.mkdir("./dir1",(err)=>{
        if(err){
            console.log(err);
        }
        console.log("new folder just dropped");
    });
}
else{
    fs.rmdir("./dir1",(err)=>{
        if(err){
        console.log(err);
        }
        console.log("removed a folder");  //remove a dir
    });
}

//deleting a file
if(fs.existsSync("./docs/deleteme.txt"))
{
    fs.unlink("./docs/deleteme.txt",(err)=>{
        if(err){
            console.log(err);
        }
        console.log("file removed");
    });
}

console.log("this might be printed earlier because above func is asynchronous");