const express = require('express')
const app = express()
const port = 3000
const config = {
  host: 'db-node',
  user: 'root',
  password: 'root',
  database: 'nodedb'
};
const mysql = require('mysql');
const connection = mysql.createConnection(config);

// connection.end()

app.get('/', async (req, res) => {
  const connection = mysql.createConnection(config)
  const sql = `INSERT INTO people(name) values('Edgar')`;
  connection.query(sql)
  connection.query('SELECT * FROM people', (err, response) => {
    res.send(`<h1>Full Cycle Rocks - Desafio Nginx/Node.js</h1> <br> <h2>${response.map(user => `${user.name}`)}</h2>`)
  });

  connection.end()
})

app.listen(port, () => {
  console.log('Rodando na porta ' + port)
})