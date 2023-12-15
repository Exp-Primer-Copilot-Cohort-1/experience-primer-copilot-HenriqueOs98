const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
const skills = require('./data/skills.json');

// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Set static path
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.render('index', {
    title: 'Home Page'
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About Page'
  });
});

app.get('/contact', (req, res) => {
  res.render('contact', {
    title: 'Contact Page'
  });
});

app.get('/skills', (req, res) => {
  res.render('skills', {
    title: 'Skills Page',
    skills: skills
  });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});