var express = require('express');
var router = express.Router();
var db = require('../models');

router.get('/', function(req, res){
	db.author.findAll().then(function(allAuthors){
		res.render('authors/index', {authors: allAuthors})
	}).catch(function(err){
		console.log(err);
		res.send('bad things');
	})
})

router.get('/new', function(req, res){
	res.render('authors/new');
});

router.get('/:id', function(req, res){
	db.author.findOne({
		where: { id: req.params.id },
		include: [db.article]
	}).then(function(foundAuthor){
		res.render('authors/show', {author: foundAuthor}); //we need this object to show.ejs for authors
	}).catch(function(err){
		console.log(err);
		res.send('can not find this');
	})
});

router.post('/', function(req, res){
	console.log(req.body);
	db.author.create(req.body).then(function(createdAuthor){
		res.redirect('/author/' + createdAuthor.id); 
	}).catch(function(err){
		console.log(err);
		res.send('derp');
	});
})

module.exports = router; 