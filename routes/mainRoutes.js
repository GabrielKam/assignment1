//routes
app.get('/', (req, res) => {
  res.render('pages/index', { title: 'Home' });
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About Me', name: 'Gabriel Kam', email: 'me@gabrielkam.com'});
});

app.get('/projects', (req, res) => {
  res.render('pages/projects', { title: 'Projects' });
});

app.get('/contact', (req, res) => {
  res.render('pages/contact', { title: 'Contact' });
});