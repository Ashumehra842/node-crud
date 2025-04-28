const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT;
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');
const session = require('express-session');
const route = require('./routes/web');
const path = require('path'); //this is by default path in express

app.use(session({
	secret: process.env.SESSION_SECRET, // A secret key to sign the session ID cookie
	resave:false, // Don't resave session if it's not modified
	saveUninitialized: false, // Don't save empty sessions
	cookie: {
      secure: false, // Use true when deploying with HTTPS
      httpOnly: true, // Helps prevent client-side access to cookies
      maxAge: 60 * 60 * 1000, // Session expires in 1 hour
    },
})
);
app.use(bodyParser.urlencoded({ extended:true}));
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
mongoose.connect(process.env.URL).then((err) => {
	
		console.log('DB Connected successfully...!');

}).catch((err) => {
	console.log(err.message);
});

app.use('/user/', route);
app.listen(port,() => {
	console.log(`server created successfully port: ${port}`);
});