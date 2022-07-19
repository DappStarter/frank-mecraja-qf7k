require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid narrow fortune stone strategy razor miss equip heavy another army ghost'; 
let testAccounts = [
"0xb45edf916a0e009973341c9b488ac02c921a5e1d164828d7cbf3ccb52ff73037",
"0xdd8885c01cf4581341b3f52d23bffdb9e7a54f5345ba052bc4890636cdab4e76",
"0xd15011a04abcc5325cb51dfcbffad10de36341f4100ee29cf70bed6e8219550e",
"0x77bfb9ca5c155c6c4b098e3a73bfdc0474f2951468c2c63579a56d3af7ca5064",
"0x4543f98e2e0c01a0cc682a85da2244fcc8ebbb58c29a33bd4b1c4eff0c6fb9eb",
"0x132cf628aa04f4949b64c09b87a0f949f6ed9d92edc07581e76a7d25910058bc",
"0x3f7ebdbd1b112f3d78e197c51ea47cedeb3040d9a85bac85fa1acc3d974ac860",
"0xe73539bf67c12b94434cbc35233d3e2f1297f8e496a42dc1518ba563f1247b5a",
"0x208d5529fdb89422c3cddccd3f705c75438e44d9f5fb5214aec5350821a5504d",
"0xdd05a9a47343201e0092232f0628d86c6fdb07ecc3309fd725ddd0f8dcef63b4"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

