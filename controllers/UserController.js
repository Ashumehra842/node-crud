const userModel = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
//   below code to  show the new user form
exports.login =  async (req, res) => {
	try{
		res.render('users/');
		
	}catch(err){
		res.status(302).json({
				status:'error',
				message:'something went wrong..',
				report:err
				
			});
	}
};
//   below code to  save the new user data
exports.createUser =  async (req,res) =>{
		
		try{
			const user  = userModel();
			user.name = req.body.name;
			user.fname = req.body.fname;
			user.email = req.body.email;
			user.password = req.body.password;
			const data = await user.save();
			res.render('users/login');
		}catch(err){ 
			res.send(err.message); 
		}
	 
};
// below code is used to display the list of all users
exports.getUsers = async (req, res) => {
	
	try{
		
		const data = await userModel.find();
		res.render('users/list', {data});
	}catch(err){
		res.status(302).json({
				status:'error',
				message:err.message,
			});
	}
	
}; 
 // bellow code is used to show the single user detail
exports.getUserData = async (req, res) => {
	
	try{
		const userId = req.params.id;
		const data = await userModel.findById({_id: userId});
		res.render('users/detail', data);
	}catch(err){
		res.status(302).json({
				status:'error',
				message:err.message,
				
			});
	}
	
};
//   below code to delete user 
exports.deleteUser = async  (req, res)=> {
	try{
		const userId = req.params.id;
		const data = await userModel.deleteOne({_id:userId});
		res.redirect('/user/');
	}catch(err){
		res.status(302).json({
				status:'error',
				message:err.message,
				report:err
				
			});
	}
	
};

//   below code to show update form data 
exports.updateUser = async (req, res) => {
	try{
		const userId = req.params.id;
		const user = await userModel.findById(userId);
		
	res.render('users/edit', user);	
	}catch(err){
		res.status(302).json({
				status:'error',
				message:err.message,
				report:err
				
			});
	}
	
};

//   below code to update user data 
exports.updateData = async (req, res) => {
	
	try{
		const userId = req.body.id;
		const data = {
			name:req.body.name,
			fname:req.body.fname,
			email:req.body.email
		};
	await userModel.findByIdAndUpdate(userId, data);
	res.redirect('/user');
	}catch(err){
		res.status(302).json({
				status:'error',
				message:err.message,
				
				
			});
	}
	
};

exports.loginUser = async(req, res) =>{
	try{
		res.render('users/login');
	}catch(err){
		res.status(401).json({
			status:'error',
			message:err.message
		});
	}
};

exports.authentication = async (req, res)=>{
	const {email,password} = req.body;
	try{
		const user = await  userModel.findOne({email});
		if(!user){
			return res.status(401).json({
				status:'error',
				message:'invalid user email address.'
			});
		}
		const ismatch = await user.comparePassword(password);
		if(!ismatch){
			return res.status(401).json({
				status:'error',
				message:'Invalid email password.'
			});
		}
		const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
		//res.json({ token });
		res.redirect('/user');
		
	}catch(err){
		return res.status(401).json({
			status:'error',
			message:err.message
			
		});
	}
};

