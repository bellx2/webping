const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const ping = require('ping')
const tcpp = require('tcp-ping')

app.use(express.static('public'))

app.get('/ping/:host', (req, res) => {
  const host = req.params.host
  const port = req.query.port
  if (port) {
    tcpp.ping(
      { address: host, port: port, timeout: 500, attempts: 1 },
      (err, result) => {
        // console.log(result)
        res.json({
          status: result.avg ? 'OK' : 'NG',
          result: {
            host: result.address,
            avg: result.avg,
            port: result.port
          }
        })
      }
    )
  } else {
    ping.promise.probe(host, { timeout: 1 }).then(function (isAlive) {
      // console.log(isAlive)
      res.json({
        status: isAlive.alive ? 'OK' : 'NG',
        result: {
          host: isAlive.host,
          port: 'ICMP',
          avg: isAlive.avg == 'unknown' ? null : Number(isAlive.avg)
        }
      })
    })
  }
})

app.listen(port, () => {
  console.log('listen: ' + port)
})
