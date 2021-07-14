const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const ping = require('ping')
const tcpp = require('tcp-ping')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/ping/:ip', (req, res) => {
  const ip = req.params.ip
  const port = req.query.port
  if (port) {
    tcpp.ping(
      { address: ip, port: port, timeout: 500, attempts: 1 },
      (err, result) => {
        if (result.avg) {
          res.json({ status: true, result: result })
        } else {
          res.json({ status: false, result: result })
        }
      }
    )
  } else {
    ping.promise.probe(ip, { timeout: 1 }).then(function (isAlive) {
      res.json({ status: isAlive.alive, result: isAlive })
    })
  }
})

app.listen(port, () => {
  console.log('listen: ' + port)
})
