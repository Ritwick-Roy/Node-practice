//streams let us use data from files before it has finsihed loading

const fs=require('fs');

const readStream=fs.createReadStream('./docs/doc2.txt',{encoding:'utf8'});  //this tells node where to read data from
//the encoding gives us the chunks in readable format automatically so no toString() method will be required
const writeStream=fs.createWriteStream('./docs/doc3.txt');

// readStream.on('data',(chunk)=>{                    //on is an event listener,data is the event 
//which happens everytime we receive buffer of data from stream
//     writeStream.write('\nNEW STREAM\n');
//     writeStream.write(chunk);
//     console.log('-----NEW CHUNK-----');
//     console.log(chunk);
// });

readStream.pipe(writeStream);   //almost same as above