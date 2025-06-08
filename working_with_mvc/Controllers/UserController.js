const UserModel = require('../Models/user');
exports.fetchUser=async (req,res)=>{
    const user=await UserModel.find();
    return res.json(user);
}
exports.createUser=async(req,res)=>{
    const body=req.body;
    if (!body || !body.name || !body.email || !body.age || !body.phone) {
        return res.json({ 'message': 'All Fileds are require' });
    } else {
        const user =await userModel.create(body);
        if (user) {
            return res.json({ 'message': 'User created Successfully' })
        }else {
            return res.json({ 'message': 'Something went wrong' });
        }
    }
}
exports.viewUser=async(req,res)=>{
    const id=req.params.id;
    const user=await UserModel.findById(id);
    return res.json(user);
}
exports.updateUser=async(req,res)=>{
    const id=req.params.id;
    const user=await UserModel.findByIdAndUpdate(id,{
        name:req.body.name,
        email:req.body.email,
        age:req.body.age,
        phone:req.body.phone
    })
    if(user){
        return res.json({'message':'User updated successfully'})
    }else{
        return res.json({'message':'Something went wrong'})
    }
}
exports.deleteUser=async(req,res)=>{
    const id=req.params.id;
    const user=await UserModel.findByIdAndDelete(id);
    if(user){
        return res.json({'message':'User deleted successfully'})
    }else{
        return res.json({'message':'Some thing went wrong'})
    }
}
