
const bodyParser = require('body-parser');
const express = require('express');
//importing the PORT from the serverConfig.js file
const { PORT } = require('./config/serverConfig');
const CityRepository = require('./repository/city-repository');
const setUpAndStartServer = async() =>{

   //create an object for express 
   const app  = express();
   
   //middlewares
   app.use(bodyParser.json());
   app.use(bodyParser.urlencoded({extended : true}));

   app.listen(PORT,async() =>{
      console.log(`Server started at ${PORT}`);
      const repo = new CityRepository();
      repo.createCity({name : "New Delhi"});
   });
}
setUpAndStartServer();