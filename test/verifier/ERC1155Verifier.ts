import {loadFixture} from "@nomicfoundation/hardhat-network-helpers";
import {ethers} from "hardhat";
import {} from "hardhat-exposed"

import type {Signers} from "../types";
import {expect} from "chai";



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

    });

    it("should successfully mint nft", async function () {



    });

  });
});
