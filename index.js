const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const AddressTranslatorService = require('./addressTranslator');
const port = 5000

app.use(bodyParser.urlencoded({ extended: false }))

const addressTranslator = new AddressTranslatorService();

function translateAddress(addr) {
    const legacyAddr = addressTranslator.translateLegacyAddress(addr);
    const copayAddr = addressTranslator.translateCopayAddress(legacyAddr);
    const cashAddr = addressTranslator.translateCashAddress(copayAddr);
    const cashAddrUpperCase = cashAddr.toUpperCase();
    return {
        legacyAddr,
        copayAddr,
        cashAddr,
        cashAddrUpperCase
    }
}

app.get('/translate-address', (req, res) => {
   if(req.query.addr === undefined){
        return res.json({
           status: "error", 
           message: "please provide an addr parameter"
        })
   }

   return res.json({
       status: "success",
       data: translateAddress(req.query.addr)
   })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})