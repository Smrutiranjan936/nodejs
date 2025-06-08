const mongoose=require('mongoose');
const UserSchema=new mongoose.Schema({
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
const UserModel=mongoose.model('user',UserSchema);
module.exports=UserModel;
