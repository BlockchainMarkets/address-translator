# Address Translator
A simple BTC/BCH addresses translator.

## Installation
Get the source code:

```
npm install
node index.js
```

runs on localhost:5000 by default

Example:
```
GET http://localhost:5000/translate-address?addr=CPehsvyQVXZ3efCa5WJoyxtYbo2HmkNoNA
```

Response:
```
{
status: "success",
data: {
legacyAddr: {
hash: "4ed487fd5dd500352c8355356a3b556db12dd491",
type: "pubkeyhash",
network: "livenet"
},
copayAddr: {
hash: "4ed487fd5dd500352c8355356a3b556db12dd491",
type: "pubkeyhash",
network: "livenet"
},
cashAddr: "bitcoincash:qp8dfplath2sqdfvsd2n263m24kmztw5jy7jatn3ty",
cashAddrUpperCase: "BITCOINCASH:QP8DFPLATH2SQDFVSD2N263M24KMZTW5JY7JATN3TY"
}
}
```