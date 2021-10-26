// SPDX-License-Identifier: MIT
pragma solidity 0.8.6;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC1155/ERC1155.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/Ownable.sol";

contract MyNFTs is ERC1155, Ownable {
    
    uint256 public constant Skeleton = 0;
    uint256 public constant Witch = 1;
    uint256 public constant RedDragon = 2;
     uint256 public constant Orc = 3;
    
    constructo