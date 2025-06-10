const UserController=require('../Controllers/UserController');
const express=require('express');
const router =express.Router();
router.get('/',UserController.home);
module.exports=router;
