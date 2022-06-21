require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz entry brown venture stone rifle saddle home install clock metal gauge'; 
let testAccounts = [
"0xb4b7b0e113445cb7dfdd2984f5785393e9e3427a2c98aa7719a29003adcc81b3",
"0xcf66280b5adf30ed0949cd69337f7720e6efa0430d2b9191ad9e3ad074e2be62",
"0x0c54c20e6805d4a16b5df910b9d1593817d4520f98f0fa60295b4b9f95d878c6",
"0x802c82fbd14b7cdf213be5c1759b894f627ece78d4ca58715404377927e1d756",
"0x43357cb27d3bd8774ec39290ebe30164d140dc698a7f5f15f3d71a2c4d2e18a0",
"0xa1066ff91153af0e6cc563bbb6c6f5569414e4f62353d2f2d1affb182183e187",
"0x13d01773a91715c6b123911821c05715fc76fe06d80af1b450fb82b54882ee0f",
"0x4449dc71758e3e28ea2d126e8871dcfb8a33e6516749105e1a1417c0d4cbec4f",
"0x91da99ed0893537cf49b44be1a70abaef2bb0e6026e8f9e309851dc6c66de2b0",
"0xb56e32e227565132ca65f9314648167ce7b559a3d8b4bc18d712cb158ccf616e"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

