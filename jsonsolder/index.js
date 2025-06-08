const express=require('express');
const app=express();
const port=8000;
app.get('/',(req,res)=>{
    res.send('Hello Express');
})
app.post('/createUser',(req,res)=>{
    res.send('We will design it later');
})
app.put('/updateUser/:id',(req,res)=>{
    const id=req.params.id;
    console.log(id);
    return res.send('We will design it later by my Self')
})
app.patch('/updateUser/:id',(req,res)=>{
    const id=req.params.id;
    console.log(id);
    return res.send('We will design it later by her self') 
})
app.delete('/deleteUser/:id',(req,res)=>{
    const id=req.params.id;
    console.log(id);
    return res.send('We will delete it later')
})
app.listen(port,()=>{
    console.log(`server is running on the port ${port}`)
})
