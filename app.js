const express = require('express')
const app = express();
const PORT = 1337;
const morgan = require('morgan');
const mainPage = require('./views/main');

app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({extended: false }));
app.get('/', (req, res) => {
  res.send(mainPage(''));
})

app.listen(PORT, () => {
  console.log('up and running!');
})
