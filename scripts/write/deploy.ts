import { getContractAddress } from '@ethersproject/address';
import config, { contractNameMapper } from '../config';

const { ethers } = require('hardhat');

const flags = {
  singleStakeAuto: true,
};

async function main() {
  const deployer = await ethers.getSigner(
    '0xdA7D1d44AF4CABfF94351Ca49Aabb73CDB851826'
  );
  const period = 21600; // 6 hours
  if (deployer.address !== config.deployer) {
    throw Error('Mismatch on deployer address. Check mneumonmic');
  }

  const transactionCount = await deployer.getTransactionCount();

  const nextContract = getContractAddress({
    from: '0x26441aE27Ce06D140Ef5b1Bc5E4f43B83bdBa0e4',
    nonce: transactionCount,
  });

  console.log('next contract: ', nextContract);

  const { timestamp } = await ethers.provider.getBlock();

  console.log('Deploying contracts with the account: ' + deployer.address);
  console.log('It is now ', timestamp);

  const depositTokenAddress = '0xD5954c3084a1cCd70B4dA011E67760B8e78aeE84';
  const rewardTokenAddress = '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1';
  const stakingContractAddress = '0x75Bca51be93E97FF7D3198506f368b472730265a';
  const dexRouterAddress = '0x7238FB45146BD8FcB2c463Dc119A53494be57Aac';
  const treasury = '0xdA7D1d44AF4CABfF94351Ca49Aabb73CDB851826';
  // const depositFeeBps = 0;

  // Deploy AceLab
  if (flags.singleStakeAuto) {
    const contract = await ethers.getContractFactory(
      contractNameMapper.singleStakeAuto
    );
    const contractAddress = await contract
      .connect(deployer)
      // .deploy(
      //   depositTokenAddress,
      //   rewardTokenAddress,
      //   stakingContractAddress,
      //   dexRouterAddress,
      //   // depositFeeBps
      // );
      .deploy(
        treasury,
        dexRouterAddress,
        stakingContractAddress,
        // 0,
        // depositTokenAddress,
        // rewardTokenAddress,
        // stakingContractAddress,
        // dexRouterAddress,
        // depositFeeBps
      );

    console.log(
      `contract Deployed to: ${config.scanner}${contractAddress.address}`
    );
    console.log('==================================');
  }
}

main()
  .then(() => process.exit())
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
