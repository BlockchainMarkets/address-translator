const AddressTranslatorService = require('./addressTranslator');

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
exports.handler = async (event) => {
    // TODO implement
    const response = {
        statusCode: 200,
        body: JSON.stringify(translateAddress(event.queryStringParameters.addr))
    };
    return response;
};
