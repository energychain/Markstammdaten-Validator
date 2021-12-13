const validator = require("./lib.js");
require('dotenv').config()

const app = async function() {
  let responds = new validator({
    apiKey:process.env.apiKey,
    requesterId:process.env.requesterId
  });
  console.log(await responds.getEinheit('SEE970942383410'));
  console.log(await responds.getLokation('SEL982068309366'));
}
app();
