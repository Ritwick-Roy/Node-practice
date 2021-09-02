//working and idea about global objects

// console.log(global);

setTimeout(() => {
   console.log('helluuuuuuuuooooo');
   clearInterval(int);
}, 3000);

const int=setInterval(()=>{
    console.log('no');
},1000)

console.log(__dirname);
console.log(__filename);

