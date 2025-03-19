const userModel = require('../models/User');
exports.createUser =  async (req,res) =>{
		
		try{
			const user = new userModel();
			user.name = 'duke';
			user.fname = 'walker';
			user.email = 'dukewalker123@gmail.com';
			const data = await user.save();
			res.status(200).json({
				status:'success',
				message:'User data inserted successfully.1',
				data:data
			});
			
		}catch(err){ 
			res.send("Error while saving data"); 
		}
	 
};

exports.getUsers = async (req, res) => {
	
	try{
		const data = await userModel.find();
		res.status(200).json({
			status:'success',
			message:'user data fetch successfully.',
			data:data
		});
	}catch(err){
		res.status(302).json({
				status:'error',
				message:'something went wrong..',
				report:err
				
			});
	}
	
}; 

exports.getUserData = async (req, res) => {
	
	try{
		const userId = req.params.id;
		const data = await userModel.findById({_id: userId});
		res.status(200).json({
					status:'success',
					message:'User data get successfully.!',
					data:data
				});
	}catch(err){
		res.status(302).json({
				status:'error',
				message:'something went wrong..',
				
			});
	}
	
};

exports.deleteUser = async  (req, res)=> {
	try{
		const userId = req.params.id;
		const data = await userModel.deleteOne({_id:userId});
		res.status(200).json({
			status:'success',
			message:'User data deleted successffully.',
			data:{}
		});
	}catch(err){
		res.status(302).json({
				status:'error',
				message:'something went wrong..',
				report:err
				
			});
	}
	
}