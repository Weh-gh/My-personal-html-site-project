var express = require('express');
var app = express();
var include = require('./include.json');
var path = require('path');
var hbs = require('express-hbs');
var html = require('html');
var php = require('php');
var ejs = require('ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.engine('html', ejs.renderFile);
app.set('view engine', 'ejs')

// files
app.get('/projects', (req, res) => {
    res.render('projects.html');
})
app.get('/shop', (req, res) => {
    res.render('shop.html');
})
app.get('/quotes', (req, res) => {
    res.render('quotes.html');
})
app.get('*', (req, res) => {
    var route = req.url;
    res.render('404.html', { route });
})

// Launching the site.
app.listen(include.port, () => {
    console.log(`app running on http://localhost:${include.port}`);
})