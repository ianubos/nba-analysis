# nba-analysis

## setup
1.prepare .env file and place it on root directory  
change the yourapikey to your apikey
```
API_KEY=yourapikey
API_URL=api-nba-v1.p.rapidapi.com
```
2.follow the commands on root directory
```
git clone https://github.com/ianubos/nba-analysis.git
npm install -g netlify-cli netlify-lambda
npm install
npm start
```

## get data
get data from api
```
node getData.js
```
## netlify deploy
remember login
```
netlify login
```
build and deploy commands
```
npm run-script build
npm run-script deploy:prod
npm run-script deploy:draft
```

## tech stacks
react, [api-nba](https://rapidapi.com/api-sports/api/api-nba), netlify serverless functions, faunadb, styled-components

## problems
[node-sass is problematic...](https://stackoverflow.com/questions/64625050/error-node-sass-version-5-0-0-is-incompatible-with-4-0-0)  
Now this project use styled-components instead of sass/scss

## references
[Visualising evolution of the NBA offence through data](https://towardsdatascience.com/tagged/nba)
