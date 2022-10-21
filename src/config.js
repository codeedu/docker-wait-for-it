const dotenv = require('dotenv')
dotenv.config()

// module.exports = {
//   config: {
//     host: 'database',
//     user: 'root',
//     password: 'root',
//     database: 'nodedb'
//   }
// }

module.exports = {
  config: {
    host: process.env.MYSQL_URL,
    user: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_ROOT_PASSWORD,
    database: process.env.MYSQL_DATABASE
  }
}