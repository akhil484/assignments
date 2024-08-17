const fs = require("fs");

function print(err,data){
    console.log(data);
}

function read_file()
{
    fs.readFile("4-write-to-file.md", "utf-8", print);
}

function write_to_file(err,data){
    fs.writeFile("4-write-to-file.md", data, ()=>{
        setTimeout(read_file, 10000);
    });
}
    
const contents = fs.readFile("3-read-from-file.md", "utf-8", write_to_file);
// let sum = 0;
// for(let i=0;i<=20000000;i++)
// {
//     sum+=i;
// }
console.log(sum);


