const mongoose = require('mongoose');
const schema =  mongoose;

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const UserSchema = mongoose.Schema({
	name:{type:String, required:[true, 'Name is required']},
	fname:{type:String, required:[true, 'Last name is required']},
	email:{type:String, required:[true, 'Email address is required'], unique:true},
	password:{type:String, required:[true, 'Password is required']}
});



// Hash password before saving user
UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();

  try {
    this.password = await bcrypt.hash(this.password, 10);
    next();
  } catch (error) {
    next(error.message);
  }
});

// Compare input password with hashed password in database
UserSchema.methods.comparePassword = async function (password) {
  return bcrypt.compare(password, this.password);
};



const user = mongoose.model('User', UserSchema);

module.exports = user;