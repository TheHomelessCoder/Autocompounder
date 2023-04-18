import 'dotenv/config';
import 'hardhat-deploy';
import '@nomiclabs/hardhat-ethers';
import '@nomiclabs/hardhat-etherscan';
import 'hardhat-deploy-ethers';
import '@nomiclabs/hardhat-web3';

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

const DEFAULT_COMPILER_SETTINGS = {
  version: '0.8.13',
}

// this is for version 6.0.0
const LOWEST_OPTIMIZER_COMPILER_SETTINGS = {
  version: '0.6.6',
  settings: {
    optimizer: {
      enabled: true,
      runs: 200,
    },
  },
}

const config = {
  // solidity: {
  //   version: '0.8.13',
  //   settings: {
  //     optimizer: {
  //       enabled: true,
  //       runs: 200,
  //     },
  //   },
  //   compilers: [
  //     { version: '0.8.13' },
  //     { version: '0.8.0' },
  //     { version: '0.6.12' },
  //     { version: '0.6.6' },
  //     { version: '0.6.0' },
  //   ],
  // },
  // overrides: {
  //   'contracts/Router.sol': {
  //     version: '0.6.6',
  //     settings: {
  //       optimizer: {
  //         enabled: true,
  //         runs: 200,
  //       },
  //     },
  //   },
  // },
  solidity: {
    compilers: [DEFAULT_COMPILER_SETTINGS],
    //pointing your MockV3Aggregator.sol
    overrides: {
      'contracts/Router.sol': LOWEST_OPTIMIZER_COMPILER_SETTINGS,
     
    },
  },
  networks: {
    arbitrum: {
      url: 'https://arbitrum-one.public.blastapi.io/',
      chainId: 42161,
      accounts: [process.env.NETWORK_MAINNET_PRIVATE_KEY!],
      apiKey: process.env.ETHERSCAN,
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN,
  },
};

export default config;
