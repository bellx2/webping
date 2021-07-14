# WebPing

Simple WebPing API

## Usage

`/ping/:host?port=:port`

```
{
  "status": true, // true or false
  "result": {
    "host": "8.8.8.8",
    "avg": 11.071, // average ping time
    "port": "443" // Port Number or 'ICMP'
  }
}
```

## Used Packages

### Port Ping

https://github.com/apaszke/tcp-ping

### ICMP Ping (if port is not specified)

http://github.com/danielzzz/node-ping
