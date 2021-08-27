require('dotenv').config();
const env = process.env;
module.exports = {
    mongoConnectionString: "mongodb://nosqlgraphapi:mHP77o1Jr894Td0NneWyz76VsORk5rnr7Q1RsJvI6Rgdt6xS8fzGIXZU6b57SD0k0OQLVcidAvTtE4CoJmQB1A%3D%3D@nosqlgraphapi.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&maxIdleTimeMS=120000&appName=@nosqlgraphapi@"
}
// `mongodb://${env.DATABASE_HOST}:${env.Password}${env.DATABASE_PORT}/${env.DATABASE_NAME}`