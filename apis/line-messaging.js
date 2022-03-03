var express = require('express');
var router = express.Router();
const line = require('@line/bot-sdk');
// const init = require('../utils/earn_current');
const config = {
  channelAccessToken: process.env.YOUR_CHANNEL_ACCESS_TOKEN,
  channelSecret: process.env.YOUR_CHANNEL_SECRET
};

// docs: https://line.github.io/line-bot-sdk-nodejs/api-reference/client.html#common-specifications
const client = new line.Client(config);

async function _replyHandleEvent(event) {
  // if(event.message.text === '給我看看') {
  //   const re = await init()
  //   return client.replyMessage(event.replyToken, {
  //     type: 'text',
  //     text: JSON.stringify(re)
  //   })
  // }
  if (event.type !== 'message' || event.message.type !== 'text') {
    return Promise.resolve(null);
  }
  return client.replyMessage(event.replyToken, {
    type: 'text',
    text: event.message.text
  })
}

router.use(line.middleware(config))
router.post('/', (req, res) => {
  Promise.all(req.body.events.map(_replyHandleEvent))
    .then((result) => res.json(result));
})

module.exports = router;