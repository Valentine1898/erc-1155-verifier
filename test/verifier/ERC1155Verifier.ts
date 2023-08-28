import {loadFixture} from "@nomicfoundation/hardhat-network-helpers";
import {ethers} from "hardhat";

import type {Signers} from "../types";


describe("Unit tests", function () {
  before(async function () {
    this.signers = {} as Signers;

    const signers = await ethers.getSigners();
    this.signers.admin = signers[0];
    this.signers.user = signers[1]

    this.loadFixture = loadFixture;
  });

  describe("erc1155Verifier", function () {
    beforeEach(async function () {
      this.erc1155Verifier = await ethers.getContractAt("ERC1155Verifier", "0xf70E005F52E07d627794CeB7C569DAA487a53cFF");
    });

    it('should ', () => {

    });

  });
});
