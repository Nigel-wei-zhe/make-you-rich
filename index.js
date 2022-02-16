const express = require('express')
const app = express()
const port = process.env.PORT || '1688'
require('dotenv').config();
const path = require('path');
const AppError = require('./utils/appError');

app.set('env', process.env.NODE_ENV)


app.get('/', (req, res) => {
  res.send('Hello World!')
})


// error handler
app.use(function(err, req, res, next) {
  // render the error page
  res.status(err.statusCode || 500);
  res.sendFile(path.join(__dirname, '/views/error.html'))
});

app.listen(port, () => {
  console.log('\x1b[36m%s\x1b[0m',`service listening on port "${port}"`)
})
