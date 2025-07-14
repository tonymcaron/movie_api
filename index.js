const express = require('express'),
morgan = require('morgan');
fs = require('fs'),
path = require('path');

const app = express();
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'log.txt'), {flags: 'a'})

app.use(morgan('combined', {stream: accessLogStream}));
app.use(express.static('public'));


app.get('/', (req, res) => {
  res.send('Welcome to the myFlix app!');
});

app.get('/documentation', (req, res) => {
  res.sendFile('public/documentation.html', {root: __dirname});
});

// READ - List all movies
app.get('/movies', (req, res) => {
  res.status(200).send('This the a complete list of movies.');
});

// READ - Movie details, by title
app.get('/movies/:title', (req, res) => {
    res.status(200).send('This page shows detailed info for ${title}.');
});

// READ - Genre details, by genre name
app.get('/movies/genre/:genreName', (req, res) => {
    res.status(200).send('This page shows info about about the movie genre ${genreName}.');
});

// READ - Director details, by director name
app.get('/movies/directors/:directorName', (req, res) => {
    res.status(200).send('This page shows date about ${directorName}.');
});

// CREATE - New user
app.post('/users', (req, res) => {
    res.status(201).send('New user successfully created.');
});

// UPDATE - Username, by user ID
app.put('/users/:id', (req, res) => {
    res.status(200).send('Username has been updated successfully.');
});

// POST - Add movie to favorites, by user ID and movie title
app.post('/users/:id/:movieTitle', (req, res) => {
    res.status(200).send('${movieTitle} added to favorites.');
});

// DELETE - Remove movie from favorites, by user ID and movie title
app.delete('/users/:id/:movieTitle', (req, res) => {
    res.status(200).send('${movieTitle} has been removed from favorites.');
});

// DELETE - Delete user profile, by user ID
app.delete('/users/:id', (req, res) => {
    res.status(200).send('User ${id} has been deleted.');
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Sumpthin done broke.');
});

app.listen(8080, () => {
  console.log('Your app is listening on port 8080, boi!');
});