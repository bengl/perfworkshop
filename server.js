'use strict';

const express = require('express');

const app = express();

app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Hello, World!',
    message: 'This is a simple example to test the performance of.'
  });
});

app.get('/plain', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('listening at http://localhost:3000');
});

process.on('SIGINT', process.exit);
