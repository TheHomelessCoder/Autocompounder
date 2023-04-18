
const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("AutoCompounder", function () {
  let autoCompounder, treasury, router, staker;
  let owner, addr1, addr2;

  beforeEach(async function () {
    [owner, addr1, addr2] = await ethers.getSigners();

    const Router = await ethers.getContractFactory("ArbiDexRouter");
    // const Router = await ethers.getContractFactory("Router");
    router = await Router.deploy();
    await router.deployed();

    // const Staker = await ethers.getContractFactory("Staker");
    const Staker = await ethers.getContractFactory("SmartChefInitializable");
    staker = await Staker.deploy();
    await staker.deployed();

    const AutoCompounder = await ethers.getContractFactory("AutoCompounder");
    autoCompounder = await AutoCompounder.deploy(addr2.address, router.address, staker.address);
    await autoCompounder.deployed();
  });

  describe("deposit", function () {
    it("should deposit staked tokens and update user shares", async function () {
      const sharesToDeposit = 1000;
      await autoCompounder.connect(addr1).deposit(sharesToDeposit);
      const userInfo = await autoCompounder.userInfo(addr1.address);
      expect(userInfo.shares).to.equal(sharesToDeposit);
      expect(userInfo.depositAmount).to.equal(sharesToDeposit);
    });
  });
});