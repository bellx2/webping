# WebPing

Simple WebPing API & DemoUI

<img width="548" alt="スクリーンショット 2021-07-15 10 06 01" src="https://user-images.githubusercontent.com/1270299/125711936-6a417b78-2491-4b31-8edb-e4b128a83c21.png">

## Installation

```shell
yarn
yarn start
```

## Usage

`/ping/:host?port=:port`

```text
{
  "status": "OK", // "OK" or "NG"
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
