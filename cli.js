const validator = require("./lib.js");
require('dotenv').config()

const app = async function() {
  let responds = new validator({
    apiKey:process.env.apiKey,
    requesterId:process.env.requesterId
  });
  console.log(await responds.getEinheit('SEE903693933924'));
  console.log(await responds.getLokation('SEL917234460855'));
}
app();
