//===dependencies===\\
const express = require('express')
      Massive = require('massive')
      bodyParser = require('body-parser')
      cors = require('cors')
      keys = require('./service/keys.js')
      connection = {
        host: keys.db.endpoint,
        port: keys.db.port,
        database: keys.db.name,
        user: keys.db.user,
        password: keys.db.pass,
      }
      app = express()
      dbFuncs = {}

//===use===\\
//uncomment next line for production
app.use(express.static('./build'))
app.use(bodyParser.json())
app.use(cors())
app.listen(keys.port, ()=>{console.log(`party on ${keys.port}`)})

//===db init===\\
Massive(connection).then(db => {

//===endpoints===\\
  app.get('/answers/:num', (request, response) => {
    db.findAnswer([request.params.num]).then(answer =>{
      response.send(answer[0].answer)
    })
  })
})
