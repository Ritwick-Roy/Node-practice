const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const blogSchema= new Schema({
    title:{
        type:String,
        required:true
    },
    snippet:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    }    
},{timeStamps:true});  //schema is the thing that defines the structure

//model is the thing that surrounds that and then provides us
// with an interface by which we communicate with the database collection
//for that document type  

const Blog=mongoose.model('Blog',blogSchema);
//automatically pluralizes the name 

module.exports=Blog;