const UserModel = require('../Models/UserModel');
const bcrypt = require('bcryptjs');
exports.login=(req,res)=>{
    return res.render('login');
}
exports.register=(req,res)=>{
    return res.render('register');
}
exports.signup=async (req,res)=>{
    const body=req.body;
    if(!body || !body.user_name || !body.passwoord || !body.role_name){
        return res.render('register',{'message':'All Fields Are Required'});
    }else{
        const hasedPassword=await bcrypt.hash(body.password,10);
        console.log(hasedPassword);
        const user=await UserModel.create({
            user_name:body.user_name,
            password:hasedPassword,
            role_name:body.role_name
        });
        if(user){
            return res.redirect('/');
        }else{
            return res.render('register',{'message':'Something Went Wrong'});
        }
    }
}
exports.signin = async(req,res)=>{
    const body = req.body;
    if(!body || !body.user_name || !body.password){
        return res.render('login',{'message':"All Fields are required"});
    }else{
        const user =await UserModel.findOne({ user_name:body.user_name});
        if(!user){
            return res.render('login',{'message':"Invalid Credentials"});
        }
        const matchedPassword=await bcrypt.compare(body.password,user.password);
        if(matchedPassword){
            if(user.role_name == 'admin'){
                return res.render('admin');
            }else{
                return res.render('user')
            }
        }else{
            return res.render('login',{'message':"Invalid Credentials"});
        }
    }
}
