require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });
 
const QUICKNODE = `https://polygon-mumbai.g.alchemy.com/v2/${process.env.QUICKNODE_HTTP_URL}` ;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: QUICKNODE,
      accounts: [PRIVATE_KEY],
    },
  },
};

// FakeNFTMarketplace deployed to:  0x63E88096A717b5AD63706f88639C121f31bB20d2
// CryptoDevsDAO deployed to:  0xc527c5F0cE6FcF3F883e17D2a6b1013e19441bF9