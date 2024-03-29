
const bodyParser = require('body-parser');
const express = require('express');

//importing the PORT from the serverConfig.js file
const { PORT } = require('./config/serverConfig');

const ApiRoutes = require('./routes/index');

const db = require('./models/index');
const { Airplane} = require('./models/index');

const setUpAndStartServer = async() =>{

   //create an object for express 
   const app  = express();
   
   //middlewares
   app.use(bodyParser.json());
   app.use(bodyParser.urlencoded({extended : true}));
   
   app.use('/api', ApiRoutes);
   
   app.listen(PORT,async() =>{
      console.log(`Server started at ${PORT}`);
      
      //if(process.env.SYNC_DB) {
      //  db.sequelize.sync({alter: true});
    // }

     
   });
}
setUpAndStartServer();