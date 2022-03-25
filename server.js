const express = require('express');
const app = express();
const hbs = require('express-hbs');
const html = require('html');
const php = require('php');
const ejs = require('ejs');
app.engine('html', ejs.renderFile);
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('home.html');
})

app.get('/404', (req, res) => {
    res.render('404.html');
})

app.get('*', (req, res) => {
    var noWay = req.url;
    res.render('404.html', { noWay });
})

// Launching the site.
app.listen()