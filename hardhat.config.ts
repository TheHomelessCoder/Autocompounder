import 'dotenv/config';
import 'hardhat-deploy';
import '@nomiclabs/hardhat-ethers';
import '@nomiclabs/hardhat-etherscan';
import 'hardhat-deploy-ethers';
import '@nomiclabs/hardhat-web3';

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
const config = {
  solidity: {
    version: '0.8.13',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
    compilers: [
      { version: '0.8.13' },
      { version: '0.8.0' },
      { version: '0.6.12' },
      { version: '0.6.6' },
      { version: '0.6.0' },
    ],
  },
  // overrides: {
  //   "contracts/IDexRouter.sol": {
  //     version: "0.6.6",
  //     compilerOptions: {
  //       optimizer: {
  //         enabled: true,
  //         runs: 200,
  //       },
  //     },
  //   },
  // },
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
