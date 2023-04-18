interface Addresses {
  zeroAddress: string;
  deployer: string;
  arx: string;
  singleStakeAuto: string;
  gasPrice: string;
  scanner: string;
}

export const contractNameMapper = {
  singleStakeAuto: 'AutoCompounder',
};

const config: Addresses = {
  zeroAddress: '0x0000000000000000000000000000000000000000',

  deployer: '0xdA7D1d44AF4CABfF94351Ca49Aabb73CDB851826',
  arx: '0xd5954c3084a1ccd70b4da011e67760b8e78aee84',
  // singleStakeAuto: '0x8DEE57411E5C30c459C68F653CD556C07DEEe0e6',
  // singleStakeAuto: '0xcA57791964fc508d7BB9149C13565044fAc77F55',
  // singleStakeAuto: '0x9a5CD886A10521802EE4d8cD388f784AFB76DDC8',
  // singleStakeAuto: '0xf669F78a231d784494C540A0fbFfD25A609A94a9',
  singleStakeAuto: '0x51D184B2dac6ace6c77Ae8bF404e815438895aD7',
  scanner: 'https://arbiscan.io/address/',
  gasPrice: '', // for gasThrottler
};

export default config;