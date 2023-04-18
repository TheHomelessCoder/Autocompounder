import config, { contractNameMapper } from '../config';

const { ethers } = require('hardhat');

async function main() {
  const deployer = await ethers.getSigner(
    '0xdA7D1d44AF4CABfF94351Ca49Aabb73CDB851826'
  );

  if (deployer.address !== config.deployer) {
    throw Error('Mismatch on deployer address. Check mneumonmic');
  }

  const contract = await ethers.getContractAt(
    contractNameMapper.singleStakeAuto,
    config.singleStakeAuto
  );

  console.log('tomb', contract);
  const depositAmount = ethers.utils.parseUnits('1', 'wei'); 

  const result = await contract
    // .connect(deployer).deposit(depositAmount)
    .connect(deployer).deposit("100000000000000000")
    // // ['deposit(uint _pid, uint _amount)'](0, 1);
    // ['deposit(uint256 _amount)'](100000000000000000);

  console.log('result: ' + JSON.stringify(result));

  console.log('==================================');
}

main()
  .then(() => process.exit())
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
