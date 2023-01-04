
const bodyParser = require('body-parser');
const express = require('express');

//importing the PORT from the serverConfig.js file
const { PORT } = require('./config/serverConfig');
const setUpAndStartServer = async() =>{

   //create an object for express 
   const app  = express();
   
   //middlewares
   app.use(bodyParser.json());
   app.use(bodyParser.urlencoded({extended : true}));

   app.listen(PORT,() =>{
      console.log(`Server started at ${PORT}`);
      
   });
}
setUpAndStartServer();