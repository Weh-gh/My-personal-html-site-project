const express = require('express');
const app = express();
const path = require('path');
const html = require('html');
const php = require('php');
const ejs = require('ejs');
const server_conf = require('./server.conf.json');

app.use(express.static(path.join(__dirname, 'src')));
app.engine('html', ejs.renderFile);
app.set('view engine', 'ejs')

// files
app.get('/projects', (req, res) => {
    res.render('projects.html');
})
app.get('/shop', (req, res) => {
    res.render('shop.html');
})
app.get('/about', (req, res) => {
    res.render('about.html');
})
app.get('/open-source', (req, res) => {
    res.render('open-source.html');
})
app.get('/discord', (req, res) => {
    res.render('discord.html');
})
app.get('*', (req, res) => {
    var route = req.url;
    res.render('404.html', { route });
})

// Running a site
app.listen(server_conf.port, () => {
    console.log(`server running on http://localhost:${server_conf.port}`);
})