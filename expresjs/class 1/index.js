const express=require('express');
const app=express();
const port=8000;
const user=require('./user.json');
const fs=require('fs');
app.use(express.urlencoded({extended:false}));

app.use((req,res,next)=>{
    console.log('This is first middleware');
    next();
})

// app.get('/fetchUser',(req,res)=>{
//     return res.json(user);
// })

// app.get('/fetchUser',(req,res)=>{                                   /*responce server to clint*/
//     console.log(req.headers);
//     const headers=new Headers({name:req.headers.name});
//     return res.setHeaders(headers).json(user);
// })


app.get('/fetchUser',(req,res)=>{                                   
    console.log(req.headers);                                           /*changing the status bar*/
    const headers=new Headers({name:req.headers.name});
    return res.setHeaders(headers).status(205).json(user);
})



app.use((req,res,next)=>{
    console.log('This is Second miidleware');                        /*this is middle ware function*/
    next();
})

// app.get('/',(req,res)=>{
//     res.send('Hello Express');
// })


// app.post('/createUser',(req,res)=>{
//     const body=req.body;
//     const {id,name,email,age}=body;
//     console.log(id,name,email,age);
//     return res.send('We will design it later');
// })


app.post('/createUser',(req,res)=>{
    const body=req.body;
    if(!body || !body.id || !body.name || !body.email || !body.age){                       /* to sav in user.json file*/
        return res.json({'message':'All Fields are required'});
    }
    else{
        user.push(body);
        fs.writeFileSync('./user.json', JSON.stringify(user,null,2));
        return res.json({'message':'User Created successfully'});
    }
})
// app.put('/updateUser/:id',(req,res)=>{
//     const id=req.params.id;
//     console.log(id);
//     return res.send('We will design it later by my Self')
// })

app.put('/updateUser/:id',(req,res)=>{
    const id=req.params.id;
    const body=req.body;
    const index=user.findIndex(user=>user.id===id);
    if(!body || !body.name || !body.email || !body.age){
        return res.json({'message':'all fields are required'});
    }
    else{                                                                                        /* Update the date in user.json*/
        user[index]={...user[index],...body};
        fs.writeFileSync('./user.json',JSON.stringify(user,null,2));
        return res.json({'message':'User update successfully'});
    }
})
app.patch('/updateUser/:id',(req,res)=>{
    const id=req.params.id;
    console.log(id);
    return res.send('We will design it later by her self') 
})
// app.delete('/deleteUser/:id',(req,res)=>{
//     const id=req.params.id;
//     console.log(id);
//     return res.send('We will delete it later')
// })


app.delete('/deleteUser/:id',(req,res)=>{
    const id=req.params.id;
    const index=user.findIndex(user=>user.id===id);
    user.splice(index,1);
    fs.writeFileSync('user.json',JSON.stringify(user,null,2));                  /*Used to delete from user.json file*/
    return res.json({'message':'user Deleted successfully'});
})


app.listen(port,()=>{
    console.log(`server is running on the port ${port}`)
})
