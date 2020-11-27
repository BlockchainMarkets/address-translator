const bitcore = require('bitcore-lib');
const bitcoreCash = require('bitcore-lib-cash');

module.exports = class AddressTranslatorService {

  constructor() {
  }

  getAddressCoin(address) {
    try {
      bitcore.Address(address);
      return 'btc';
    } catch (e) {
      try {
        bitcoreCash.Address(address);
        return 'bch';
      } catch (e) {
        return null;
      }
    }
  };

  translateCashAddress(addressToTranslate) {
    var origAddress = bitcore.Address(addressToTranslate);
    var origObj = origAddress.toObject();
    var resultAddress = bitcoreCash.Address.fromObject(origObj).toCashAddress();
    return resultAddress;
  }

  translateCopayAddress(addressToTranslate) {
    var origAddress = bitcore.Address(addressToTranslate);
    var origObj = origAddress.toObject();
    var resultAddress = bitcoreCash.Address.fromObject(origObj);
    return resultAddress;
  }

  translateLegacyAddress(addressToTranslate) {
    var origCoin = this.getAddressCoin(addressToTranslate);
    if (origCoin == 'btc') return addressToTranslate;

    var origAddress = bitcoreCash.Address(addressToTranslate);
    var origObj = origAddress.toObject();
    var resultAddress = bitcore.Address.fromObject(origObj);
    return resultAddress;
  }
}
