const mongoose = require('mongoose');
const schema =  mongoose;
const UserSchema = mongoose.Schema({
	name:{type:String, required:true},
	fname:{type:String, required:true},
	email:{type:String, required:true}
});

const user = mongoose.model('User', UserSchema);

module.exports = user;