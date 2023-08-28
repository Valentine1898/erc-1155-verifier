import {DeployFunction} from "hardhat-deploy/types";
import {HardhatRuntimeEnvironment} from "hardhat/types";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {

    const {deployer} = await hre.getNamedAccounts();
    const {deploy} = hre.deployments;


    const spongePoseidonLib = "0x12d8C87A61dAa6DD31d8196187cFa37d1C647153";
    const poseidon6Lib = "0xb588b8f07012Dc958aa90EFc7d3CF943057F17d7";


    const verifierContract = await deploy("ERC1155Verifier", {
        from: deployer,
        args: ["url"],
        libraries: {
            SpongePoseidon: spongePoseidonLib,
            PoseidonUnit6L: poseidon6Lib
        },
        log: true,
    });

    console.log(`ERC1155Verifier contract: `, verifierContract.address);
};
export default func;
func.id = "deploy_erc1155verifier"; // id required to prevent reexecution
func.tags = ["ERC1155Verifier"];
