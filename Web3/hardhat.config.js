require("@nomicfoundation/hardhat-toolbox");
require ('dotenv').config();
/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
  solidity: "0.8.18",
  networks: {
    klaytn : {
      url:"https://data-seed-prebsc-1-s3.binance.org:8545/",
      accounts: [process.env.PRIV_KEY]
    }
  }
};
