const mongoose=require('mongoose');
const UserSchema=new mongoose.Schema({
    user_name:{
        required:true,
        unique:true,
        type:String
    },
    password:{
        required:true,
        type:String
    },
    role_name:{
        required:true,
        type:String,
        enum:['user','admin']
    }
})
const UserModel=mongoose.model('user_master',UserSchema);
module.exports=UserModel;
