
const express = require('express');
require('dotenv').config();
const setUpAndStartServer = async() =>{

   //create an object for express 
   const app  = express();
   const PORT = 3000;
   app.listen(PORT,() =>{
      console.log(`Server started at ${PORT}`);
      console.log(process.env);
   });
}
setUpAndStartServer();