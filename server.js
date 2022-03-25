const express = require('express');
const app = express();
const include = require('./include.json');
var path = require('path');
const hbs = require('express-hbs');
const html = require('html');
const php = require('php');
const ejs = require('ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.engine('html', ejs.renderFile);
app.set('view engine', 'ejs')

app.get('/projects', (req, res) => {
    res.render('projects.html');
})
app.get('/shop', (req, res) => {
    res.render('shop.html');
})
app.get('/quotes', (req, res) => {
    res.render('quotes.html');
})

// Launching the site.
app.listen(include.port, () => {
    console.log(`Listening at http://localhost:${include.port}`);
})