const express = require('express'),
morgan = require('morgan');
fs = require('fs'),
path = require('path');

const app = express();
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'log.txt'), {flags: 'a'})

const topMovies = {
  movies: [
    { title: 'Face/Off', year: 1997 },
    { title: 'National Treasure', year: 2004 },
    { title: 'Leaving Las Vegas', year: 1995 },
    { title: 'Raising Arizona', year: 1987 },
    { title: 'Adaptation', year: 2002 },
    { title: 'Con Air', year: 1997 },
    { title: 'The Rock', year: 1996 },
    { title: 'Mandy', year: 2018 },
    { title: 'Pig', year: 2021 },
    { title: 'Color Out of Space', year: 2019 }
  ]
};

app.use(morgan('combined', {stream: accessLogStream}));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Welcome to the nicolasCage app!');
});

app.get('/movies', (req, res) => {
  res.json(topMovies);
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Sumpthin done broke.');
});

app.listen(8080, () => {
  console.log('Your app is listening on port 8080, boi!');
});