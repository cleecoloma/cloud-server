'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());

app.get('/dogs', (req, res) => {
  res.send('Dogs are often considered better than cats by some because of their loyalty and strong companionship!');
});

app.listen(PORT, () => {
  console.log('Cloud server is running!');
});
