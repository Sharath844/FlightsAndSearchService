
const express = require('express');

//importing the PORT from the serverConfig.js file
const { PORT } = require('./config/serverConfig');
const setUpAndStartServer = async() =>{

   //create an object for express 
   const app  = express();
  
   app.listen(PORT,() =>{
      console.log(`Server started at ${PORT}`);
      
   });
}
setUpAndStartServer();