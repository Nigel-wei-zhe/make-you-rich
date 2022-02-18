require('dotenv').config();
const express = require('express')
const app = express()
const port = process.env.PORT || '1688'
const path = require('path');

// apis
var LineMessaging = require('./apis/line-messaging');

// 
app.set('env', process.env.NODE_ENV)

// static resource by spa
app.use('/assets', express.static(path.join(__dirname, '/views/dist/assets')));

// apis
app.use('/webhook', LineMessaging);

// spa handler
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/dist/index.html'));
})

// error handler
app.use(function(err, req, res) {
  // render the error page
  res.sendFile(path.join(__dirname, '/views/error.html'))
});

app.listen(port, () => {
  console.log('\x1b[36m%s\x1b[0m',`service listening on port "${port}"`)
})
