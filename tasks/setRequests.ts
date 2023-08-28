import {task} from "hardhat/config";
import type {TaskArguments} from "hardhat/types";


const Operators = {
    NOOP: 0, // No operation, skip query verification in circuit
    EQ: 1, // equal
    LT: 2, // less than
    GT: 3, // greater than
    IN: 4, // in
    NIN: 5, // not in
    NE: 6   // not equal
}

task("task:setRequests")
    .setAction(async function (taskArguments: TaskArguments, hre) {
        const {ethers} = hre;

        const signers = await ethers.getSigners();

        const erc1155Verifier = await ethers.getContractAt("ERC1155Verifier", "0xf70E005F52E07d627794CeB7C569DAA487a53cFF");


        // you can run https://go.dev/play/p/rnrRbxXTRY6 to get schema hash and claimPathKey using YOUR schema
        const schemaBigInt = "74977327600848231385663280181476307657"

        // merklized path to field in the W3C credential according to JSONLD  schema e.g. birthday in the KYCAgeCredential under the url "https://raw.githubusercontent.com/iden3/claim-schema-vocab/main/schemas/json-ld/kyc-v3.json-ld"
        const schemaClaimPathKey = "20376033832371109177683048456014525905119173674985843915445634726167450989630"

        const requestId = 1;

        const query = {
            schema: schemaBigInt,
            claimPathKey: schemaClaimPathKey,
            operator: Operators.LT, // operator
            value: [20020101, ...new Array(63).fill(0).map(() => 0)], // for operators 1-3 only first value matters
        };

        const validatorAddress = "0xF2D4Eeb4d455fb673104902282Ce68B9ce4Ac450"; // sig validator
        // const validatorAddress = "0x3DcAe4c8d94359D31e4C89D7F2b944859408C618"; // mtp validator

        await erc1155Verifier.connect(signers[0]).setZKPRequest(
            requestId,
            validatorAddress,
            query.schema,
            query.claimPathKey,
            query.operator,
            query.value);

        console.log("Requests set ");
    });
