const router = require('./Routes/route');
const path =require('path');
const mongoose=require('mongoose');
const express=require('express');
const session=require('express-session')
const app=express();
app.use(express.urlencoded({extended:false}));
mongoose.connect('mongodb://localhost:27017/smrutiranjan_pratice_set')
.then(()=>console.log('MongoDb Connected Successfully'))
.catch(err=>console.log(err))
app.set('view engine','ejs');
app.set('views','./Views');
app.use(session({
    secret:'seereeMernInternship25',
    resave:false,
    saveUninitialized:true
}))
app.use('/',router);
const port=8000;
app.listen(port,()=>{
    console.log(`Server is running on the port ${port}`);
})
