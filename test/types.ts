import type { SignerWithAddress } from "@nomicfoundation/hardhat-ethers/dist/src/signer-with-address";
import {ERC1155Verifier} from "../types";



declare module "mocha" {
  export interface Context {
    signers: Signers;
    erc1155Verifier: ERC1155Verifier
  }
}

export interface Signers {
  admin: SignerWithAddress;
  user: SignerWithAddress;
}
