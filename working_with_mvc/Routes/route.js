const express =require('express')
const router =express.Router();
const UserController=require('../Controllers/UserController');
router.get('/fetchUser',UserController.fetchUser);
router.post('/createUser',UserController.createUser);
router.get('/fetchUser/:id',UserController.viewUser);
router.put('/updateUser/:id',UserController.updateUser);
router.delete('/deleteUser/:id',UserController.deleteUser);
module.exports=router;
