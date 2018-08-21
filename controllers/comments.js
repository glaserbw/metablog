var express = require('express');
var router = express.Router();
var db = require('../models');

router.post('/', function(req, res){
	console.log('req.body:', req.body);
	db.comment.create(req.body).then(function(createComment){
		res.redirect('/articles/' + req.body.articleId);
	}).catch(function(err){
		res.render('error');
	});
});







module.exports = router; 