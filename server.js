
//import modules
const express = require('express');
const path = require('path');

//create express application (main web server)
const app = express();

//set server port
const PORT = process.env.PORT || 3000;

//set view engine to use ejs
app.set('view engine','ejs');

//define view folder location
app.set('views', path.join(__dirname, 'views'));

//send files directly to browser from public folder
app.use(express.static(path.join(__dirname, 'public')));

//load routes
const mainRoutes = require('./routes/mainRoutes');
app.use('/', mainRoutes);

//start server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

//routes
app.get('/', (req, res) => {
  res.render('pages/index', { title: 'Home' });
});

app.get('/about', (req, res) => {
  res.render('pages/about', { title: 'About Me' });
});

app.get('/projects', (req, res) => {
  res.render('pages/projects', { title: 'Projects' });
});

app.get('/contact', (req, res) => {
  res.render('pages/contact', { title: 'Contact' });
});
