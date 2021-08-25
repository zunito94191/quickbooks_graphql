require('dotenv').config();
const env = process.env;
module.exports = {
    mongoConnectionString: `mongodb://${env.DATABASE_HOST}:${env.DATABASE_PORT}/${env.DATABASE_NAME}`
}