# Welocme to Flights Service

## Project Setup
- clone the project on your local system
- Execute `npm install` on the same path of your root directory of the downloaded project
- Create a `.env` file in the root directory and the following environment varibale
    - `PORT=3000`
- Inside the `src\config` folder create a new file `config.json` and then add the following piece of json


```
{
  "development": {
    "username": "YOUR_DB_LOGIN_NAME",
    "password": "YOUR_DB_PASSWORD",
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
 
}


```

- Once you have added your db config as list above, go to the src folder from your terminal and execute `npm sequelize db:create`
