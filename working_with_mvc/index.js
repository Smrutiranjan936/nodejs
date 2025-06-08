const express=require('express');
const app=express();
const mongoose=require('mongoose');
const router=require('./Routes/route');
mongoose.connect('mongodb://localhost:27017/seeree_mern_internship')
.then(()=>{
    console.log('mongodb connected successfully');
}).catch(err=>console.log(err));
app.use(express.urlencoded({extended:false}));
app.use('/',router);
const port=8000;
app.listen(port,()=>{
    console.log(`server is running on the port ${port}`);
})
