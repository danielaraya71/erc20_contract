const { ethers } = require("hardhat");

async function main() {
    const initialSupply = 1000000;
    const MiToken = await ethers.getContractFactory("MiToken");
    const token = await MiToken.deploy(initialSupply);
    await token.waitForDeployment();

    console.log("Token desplegado en:", await token.getAddress());
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
