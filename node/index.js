const express = require('express')
const { queryPromise } = require('./queryPromise')

async function createApp() {
  const app = express()
  const sqlTable = `CREATE TABLE IF NOT EXISTS characterSW(id int NOT NULL AUTO_INCREMENT, name varchar(255) NOT NULL, PRIMARY KEY(id))`;

  await queryPromise.query(sqlTable)

  const characters = [['Luke Skywalker'], ['Darth Vader'], ['Han Solo'], ['Chewbacca'], ['Leia Organa'], ['Obi-Wan Kenobi'], ['Yoda'], ['R2-D2'], ['C-3PO']]
  const sqlInsert = `INSERT INTO characterSW(name) VALUES ?`;

  await queryPromise.queryMultiple(sqlInsert, characters)

  app.get('/', async (req, res) => {
    const selectCharacters = `SELECT * FROM characterSW`
    const allCharacters = await queryPromise.query(selectCharacters)

    const html = `<h1>Star Wars Characters</h1>\n
  <ul>
    ${allCharacters.map(character => `<li>${character.name}</li>`).join('')}
  </ul>`

    res.send(html)
  })
  return app
}

module.exports = createApp