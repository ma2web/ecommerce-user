const express = require('express');
const cors = require('cors');
const path = require('path');

// init app
const app = express();
const http = require('http');
const server = http.createServer(app);

//  middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// views
app.use(express.static(path.join(__dirname, '../build')));

const port = 8080;

server.listen(port, (err) => {
  if (err) console.log(err.message);
  console.log(`Listen To ${port}`);
});
