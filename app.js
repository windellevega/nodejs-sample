const express = require('express');
const path = require('path');

//Init App
const app = express();

//Load View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//Home Route
app.get('/', function(req, res) {
	let articles = [
		{
			id:1,
			title:'Article One',
			author:'Windelle Vega',
			body:'This is article 1'
		},
		{
			id:2,
			title:'Article Two',
			author:'Windelle Vega',
			body:'This is article 2'
		},
		{
			id:3,
			title:'Article Three',
			author:'Windelle Vega',
			body:'This is article 3'
		}
	]
	res.render('index', {
		title:'Articles',
		articles:articles
	});
});

//Add Route
app.get('/articles/add', function(req, res) {
	res.render('add_article', {
		title:'Add Article'
	});
});

//Start Server
app.listen('3000', function() {
	console.log('Server started on port 3000...');
})