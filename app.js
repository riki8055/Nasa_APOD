const express = require('express');
const path = require('path');
const axios = require('axios');
const ejsMate = require('ejs-mate');
const session = require('express-session');
const flash = require('connect-flash');
const ExpressError = require('./utils/ExpressError');
const catchAsync = require('./utils/catchAsync');
const key = process.env.NASA_TOKEN || "HDZXoFK85NFgcxoSweDP5WQeE82t31rqy73ZWRs3"

const app = express();

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, '/public')));

const secret = process.env.SECRET || 'thisshouldbeasecret!';

const sessionConfig = {
	secret,
	resave: false,
	saveUninitialized: true,
	cookie: {
		httpOnly: true,
		// secure: true,
		expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
		maxAge: 1000 * 60 * 60 * 24 * 7
	}
}

app.use(session(sessionConfig));
app.use(flash());

app.use((req, res, next) => {
	res.locals.success = req.flash('success');
	res.locals.error = req.flash('error');
	next();
});

app.get('/', catchAsync(async (req, res) => {
	const config = {headers: {Accept: 'application/json'}}
	const result = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${key}`, config);

	res.render('main/index', { result });
}));

app.post('/', catchAsync(async (req, res) => {
	try {
	const config = {headers: {Accept: 'application/json'}};
	const result = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${key}&date=${req.body.date}`, config);

	req.flash('success', "Showing results!");
	res.render('main/index', { result });
	} catch(e) {
		req.flash('error', e.response.data.msg);
		res.redirect('/');
	}
}));

app.all('*', (req, res, next) => {
	next(new ExpressError('Page Not Found!', 404));
});

app.use((err, req, res, next) => {
	const { statusCode=500 } = err;

	if(!err.message) err.message = "Oh No! Something Went Wrong!";
	res.status(statusCode).render('error', { err });
});

const port = process.env.PORT || 5501;

app.listen(port, () => {
	console.log("LISTENING ON PORT 5501...");
});