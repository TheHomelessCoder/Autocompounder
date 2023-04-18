const { ethers } = require('hardhat');
import config from "../config";
import { verifyContract } from "../utils/verifyContract";

async function main() {

  const depositTokenAddress = '0xD5954c3084a1cCd70B4dA011E67760B8e78aeE84';
  const rewardTokenAddress = '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1';
  const stakingContractAddress = '0x75Bca51be93E97FF7D3198506f368b472730265a';
  const dexRouterAddress = '0x7238FB45146BD8FcB2c463Dc119A53494be57Aac';
  const treasury = '0xdA7D1d44AF4CABfF94351Ca49Aabb73CDB851826';
  // const depositFeeBps = 0;

  const args = [
    treasury,
    dexRouterAddress,
    stakingContractAddress,
  ];
  // const args = [
  //   depositTokenAddress,
  //   rewardTokenAddress,
  //   stakingContractAddress,
  //   dexRouterAddress,
  //   // depositFeeBps
  // ];
  const resp = await verifyContract(config.singleStakeAuto, args)

  console.log('done', resp);
};

main()
    .then(() => process.exit())
    .catch(error => {
        console.error(error);
        process.exit(1);
})



