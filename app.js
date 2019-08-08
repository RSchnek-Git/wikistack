/* eslint-disable quotes */
/* eslint-disable no-undef */
const express = require('express');
const app = express();
const PORT = 1337;
const morgan = require('morgan');
const models = require('./models');
const userRouter = require('./routes/user');
const wikiRouter = require('./routes/wiki');

// app.use(express.json());
app.use(express.urlencoded({extended: false }));
app.use('/wiki', wikiRouter);
app.use('/users', userRouter);
app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res, next) => {
  res.redirect('/wiki')
})
const init = async () => {
  await models.User.sync();
  await models.Page.sync();
  app.listen(PORT, () => {
    console.log(`up and running on port ${PORT}!`);
  });
};

init();
