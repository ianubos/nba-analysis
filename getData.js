const request = require('request');
const fs = require("fs");

//api key setting
require('dotenv').config({
  path: './.env'
})
const apikey = process.env.API_KEY
const apiurl =  process.env.API_URL

//nba api option setting on url
const apioption = "statistics/games/gameId/1";

const options = {
  method: 'GET',
  url: `https://${apiurl}/${apioption}`,
  headers: {
    'x-rapidapi-key': apikey,
    'x-rapidapi-host': apiurl,
    useQueryString: true
  }
};

//please change filename
request(options, function (error, response, body) {
	if (error) throw new Error(error);

	console.log(body);
  fs.writeFileSync("./src/data/player1.json", body)
});