require("@nomiclabs/hardhat-waffle");
const fs = require('fs');
const privateKey = fs.readFileSync(".secret").toString()
// const infuraId = fs.readFileSync(".infuraid").toString().trim() || "";
const projectid ='3433855254b0491da7da887cc6256349'

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
    
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/${projectid}`,
      accounts: [privateKey]
    },
    mainnet: {
      url: "https://mainnet.infura.io/v3/3433855254b0491da7da887cc6256349",
      accounts: [privateKey]
    }
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};

