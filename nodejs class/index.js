// const math=requare('./math.js');
// console.log(math.add(10,20));
// console.log(math.sub(30,20));


// const fs=require('fs')
// let data=fs.readFileSync('seeree.txt','utf-8')
// console.log(data)

// fs.readFile('seeree.txt','utf-8',(err,data)=>{
//     if(err){
//         console.log('Something Wrong')
//     }else{
//         console.log(data);
//     }
// })


// const fs=require('fs')
// let data=fs.readFileSync('seeree.txt','utf-8')
// console.log(data)


                   // Write

// const fs=require('fs');
// fs.writeFileSync('abc.text',"Welcome to node.");
// fs.writeFile('xyz.tet',"Internship is going on at seeree at seeree",
// (err)=>{
//     if(err){
//         console.log('Something went wrong');
//     }
//     else{
//         console.log('data written successfully');
//     }
// });

                     // Append

// const fs=require('fs');
// fs.appendFileSync('abc.txt','Hello Dear, do not fear.');
// fs.appendFile('xyz.tet',"Internship is going on at seeree at seeree",
// (err)=>{
//     if(err){
//         console.log('Something went wrong');
//     }
//     else{
//         console.log('data written successfully');
//     }
// })


                //copy


// const fs=require('fs');
// fs.cpSync('abc.txt','abc2.txt');
// fs.cp('xyz.txt','xyz2.txt',(err)=>{
//     if(err){
//         console.log('Something Went Wrong');
//     }else{
//         console.log('Data Copied');
//     }
// })


            // delete file


// const fs=require('fs');
// fs.unlinkSync('abc.txt');
// fs.unlink('xyz.txt',(err)=>{
//     if(!err){
//         console.log('File deteted successfully');
//     }
// })


            //Syncronoes data- Blocking requeat
// const fs= require('fs');
// console.log('Hello');
// console.log('Hii');
// console.log('bye');
// const data=fs.readFileSync('abc.txt','utf-8');
// console.log(data);
// console.log('Hello1');
// console.log('Hii1');
// console.log('Bye1');

             //Syncronoes data-non Blocking requeat

// const fs= require('fs');
// console.log('Hello');
// console.log('Hii');
// console.log('bye');
// fs.readFile('xyz.txt','utf-8',(err,data)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(data)
//     }
// })
// console.log('Hello1');
// console.log('Hii1');
// console.log('Bye1');



                // connect with server

// const http=require('http');
// const myServer=http.createServer((req,res)=>{
//     if(req){
//         console.log('request resived');
//     }
//     res.end('Hello from server');
// })
// const port=8000;
// myServer.listen(port,()=>{
//     console.log(`server is running on the port ${port}`);
// })




// const http=require('http');
// const myServer=http.createServer((req,res)=>{
//     const url=req.url;
//     switch(url){
//         case'/':
//             res.end("this is home page");
//             break;
//         case'/about':
//             res.end("this is about page");
//             break;
//         case'/contact':
//             res.end("this is contact page");
//             break;
//         default:
//             res.end('404 page is not found');
//     }
// })
// const port=8000;
// myServer.listen(port,()=>{
//     console.log(`server is running on the port ${port}`);
// })
