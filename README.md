# nba-analysis

## setup
prepare .env file and place it on root directory  
change the yourapikey to your apikey
```
API_KEY=yourapikey
API_URL=api-nba-v1.p.rapidapi.com
```

follow the commands on root directory
```
git clone 
npm install -g netlify-cli netlify-lambda

```

```
node getData.js

netlify login
npm run-script build
npm run-script deploy:prod
npm run-script deploy:draft
```


## problems
[node-sass is problematic...](https://stackoverflow.com/questions/64625050/error-node-sass-version-5-0-0-is-incompatible-with-4-0-0)
