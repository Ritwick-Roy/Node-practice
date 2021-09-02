//program to use objects from other programs

const xyz=require('./people');

console.log(xyz);

const os=require("os");
console.log(os.platform(),os.homedir());