const express = require('express');
const app = new express();
require('dotenv').config();
const port = process.env.PORT;
const mongoose = require('mongoose');
const route = require('./routes/web');
app.use(express.json());

mongoose.connect(process.env.URL).then((err) => {
	try{
		console.log('DB Connected successfully...!');
	}catch(err){
		
	}
	 
});

app.use('/user/', route);
app.listen(port,() => {
	console.log(`server created successfully port: ${port}`);
});