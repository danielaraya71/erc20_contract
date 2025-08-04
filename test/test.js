const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("MiToken", function () {
  it("Should deploy and assign initial supply", async function () {
    const [owner] = await ethers.getSigners();
    const MiToken = await ethers.getContractFactory("MiToken");
    const initialSupply = 1000;
    const token = await MiToken.deploy(initialSupply);
    await token.deployed();

    const balance = await token.balanceOf(owner.address);
    expect(await token.totalSupply()).to.equal(balance);
  });
});
