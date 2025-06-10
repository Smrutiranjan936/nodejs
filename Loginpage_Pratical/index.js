const router=require('./Routes/route');
const path=require('path');
const express=require('express');
const app=express();
app.set('view engine','ejs');
app.set('views','./views');
app.use('/',router);
const port=8000;
app.listen(port,()=>{
    console.log(`Server is running on the port ${port}`);
})
