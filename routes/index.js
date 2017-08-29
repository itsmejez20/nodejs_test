var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
  res.render('index', {
    title: 'Home'
  });
});

router.get('/about', function(req, res){
  res.render('about', {
    title: 'About'
  });
});

router.get('/services', function(req, res){
  res.render('services', {
    title: 'Services'
  });
});

router.get('/gallery', function(req, res){
  res.render('gallery', {
    title: 'Gallery'
  });
});

router.get('/contact', function(req, res){
  res.render('contact', {
    title: 'Contact'
  });
});

module.exports = router;

