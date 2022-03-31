require('babel-register');
require('babel-polyfill');
const Web3 = require("web3");
const HDWalletProvider = require("@truffle/hdwallet-provider");
const provider = new Web3.providers.HttpProvider("https://proxy.devnet.neonlabs.org/solana");
Web3.providers.HttpProvider.prototype.sendAsync = Web3.providers.HttpProvider.prototype.send;
const privateKey = "1e257a46e06b26b76fb7e0968096d9b3d645dd389df361e051c918cc96ce4b09";
const MNEMONIC = '1e257a46e06b26b76fb7e0968096d9b3d645dd389df361e051c918cc96ce4b09';
 // Specify your private key here

module.exports = {
    networks: {
        // solana: {
        //     provider: () => {
        //       return new HDWalletProvider(
        //         privateKey,
        //         provider,
        //       );
        //     },
        //     from: "0xa618947425C5E620F56BfB3C1A742FB0ef1f2d4e",
        //     network_id: "245022926",
        //     gas: 3000000,
        //     gasPrice: 1000000000,
        //   },
          solana: {
            provider: function() {
              return new HDWalletProvider(MNEMONIC, "https://proxy.devnet.neonlabs.org/solana")
            },
            network_id: 245022926,
            gas: 58789380,
            gasPrice: 536996438001,    //make sure this gas allocation isn't over 4M, which is the max
          },
        development: {
            host: "127.0.0.1",
            port: 7545,
            network_id: "*" // Match any network id
        },
    },
    contracts_directory: './src/contracts/',
    contracts_build_directory: './src/abis/',
    compilers: {
        solc: {
            version: '0.8.0',
            optimizer: {
                enabled: true,
                runs: 200
            }
        }
    }
}