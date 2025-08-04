// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MiToken is ERC20 {
    constructor(uint256 initialSupply) ERC20("MiToken", "MITO") {
        _mint(msg.sender, initialSupply * 10 ** decimals());
    }
}
