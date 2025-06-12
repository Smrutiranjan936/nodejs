const router = require('./Routers/route');
const path =require('path');
const mongoose=require('mongoose');
const express=require('express');
const app=express();
app.use(express.urlencoded({extended:false}));
mongoose.connect('mongodb://localhost:27017/My_login_module')
.then(()=>console.log('MongoDb Connected Successfully'))
.catch(err=>console.log(err))
app.set('view engine','ejs');
app.set('view','./Views');
app.use('/',router);
const port=8000;
app.listen(port,()=>{
    console.log(`Server is running on the port ${port}`);
})
