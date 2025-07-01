const express = require('express'),
morgan = require('morgan');
fs = require('fs'),
path = require('path');

const app = express();
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'log.txt'), {flags: 'a'})

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