
const express = require('express');
const router = express.Router();	
const protect = require('./../middleware/auth');

const UserControllers = require('../controllers/UserController');
router.get('/register', UserControllers.register);
router.post('/login', UserControllers.login);

router.post('/submit', UserControllers.createUser);
router.get('/',protect, UserControllers.getUsers);
router.get('/detail/:id',protect, UserControllers.getUserData);

router.get('/delete/:id',protect, UserControllers.deleteUser);
router.get('/update/:id',protect, UserControllers.updateUser);
router.post('/update',protect, UserControllers.updateData);

router.get('/auth', UserControllers.loginUser);
router.get('/logout', UserControllers.logoutUser);
module.exports = router; 