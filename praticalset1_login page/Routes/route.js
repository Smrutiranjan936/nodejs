const UserController=require('../Controllers/UserController');
const express=require('express');
const router=express.Router();
router.get('/',UserController.login);
router.get('/register',UserController.register);
router.post('/signup',UserController.signup);
router.post('/login',UserController.signin);
module.exports=router;
