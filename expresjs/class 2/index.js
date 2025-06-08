const express = require('express');
const app = express();
/*const fs = require('fs');*/    /* this line is used to connect with mongoes*/
const mongoose = require('mongoose');
const port = 8000;
mongoose.connect('mongodb://localhost:27017/seeree_mern_internship').then(() => { console.log('mongoDb Connected Succssfully') }).catch(err => { console.log(err) })
app.use(express.urlencoded({ extended: false }));       /*middle ware*/
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    age: {
        type: Number,
        required: true
    },
    phone: {
        type: Number,
        required: true
    }
})
const userModel = mongoose.model('user', userSchema);
app.post('/createUser', (req, res) => {
    const body = req.body;
    console.log(body);
    if (!body || !body.name || !body.email || !body.age || !body.phone) {
        return res.json({ message: 'All Fileds are require' });
    } else {
        const user = userModel.create(body);
        if (user) {
            return res.json({ message: 'User created Successfully' })
        }
        else {
            return res.json({ message: 'Something went wrong' });
        }
    }
})

app.get('/fetchUser', async (req, res) => {
    const user = await userModel.find();
    return res.json(user);
})

// app.get('/fetchUser/:id', async (req, res) => {
//     const id = req.params.id;                                   /*using id*/
//     const user=await userModel.findById(id);
//     return res.json(user);
// })
app.get('/fetchUser/:email', async (req, res) => {
    const email = req.params.email;                                   /*using email*/
    const user=await userModel.findOne({email:email});
    return res.json(user);
})



app.listen(port, () => {
    console.log(`Server is running on the poer ${port}`);
})






// app.get('/', (req, res) => {
//     return res.send('Working with Mongodb');
// })
// app.listen(port, () => {
//     console.log(`Server is running on the port ${port}`);
// })
