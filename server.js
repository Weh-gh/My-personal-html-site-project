const express = require('express');
const app = express();
const include = require('./include.json');
var path = require('path');
const hbs = require('express-hbs');
const html = require('html');
const php = require('php');
const ejs = require('ejs');
app.use(express.static(path.join(__dirname, 'styles.csss')));
app.engine('html', ejs.renderFile);
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('home.html');
})
app.get('/projects', (req, res) => {
    res.render('projects.html');
})
app.get('/shop', (req, res) => {
    res.render('shop.html');
})
app.get('/quotes', (req, res) => {
    res.render('quotes.html');
})
app.get('/topics/linux', (req, res) => {
    res.render('topics/linux.html');
})
app.get('/test', (req, res) => {
    res.render('test.html');
})
app.get('/404', (req, res) => {
    res.redirect('404.html');
})
app.get('*', (req, res) => {
    var noWay = req.url;
    res.render('404.html', { noWay });
})

// Launching the site.
app.listen(include.port, () => {
    console.log(`Listening at http://localhost:${include.port}`);
})