const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const route = require('./routes/web');
const path = require('path'); //this is by default path in express
app.use(bodyParser.urlencoded({ extended:true}));
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
mongoose.connect(process.env.URL).then((err) => {
	try{
		console.log('DB Connected successfully...!');
	}catch(err){
		console.log('not able to connect with DB.');
	}
	 
});

app.use('/user/', route);
app.listen(port,() => {
	console.log(`server created successfully port: ${port}`);
});