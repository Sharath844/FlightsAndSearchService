
//module to create environment variables from .dotenv file
const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    PORT: process.env.PORT
}