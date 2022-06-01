module.exports = {
    defaultNetwork: "ethereum",
    networks: {
      hardhat: {
      },
      rinkeby: {
        url: "https://rinkeby.infura.io/v3/d3c71913403e47b4ac4813c7adb96043",
        accounts: [process.env.PRIVATE_KEY]
      },
      ethereum: {
        url: "https://ethereum.infura.io/v3/d3c71913403e47b4ac4813c7adb96043",
        accounts: [process.env.PRIVATE_KEY]
      },
      rinkeby: {
        url: "https://polygon.infura.io/v3/d3c71913403e47b4ac4813c7adb96043",
        accounts: [process.env.PRIVATE_KEY]
      }
    },
    solidity: {
      version: "0.5.15",
      settings: {
        optimizer: {
          enabled: true,
          runs: 200
        }
      }
    },
    paths: {
      sources: "../contracts",
      tests: "../tests",
      cache: "./cache",
    //   artifacts: "./artifacts"
    },
    mocha: {
      timeout: 40000
    }
  }