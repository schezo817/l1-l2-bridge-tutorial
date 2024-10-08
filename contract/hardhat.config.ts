require('dotenv').config();
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "hardhat-deploy";

import "./tasks/deploy-erc20";
import "./tasks/deploy-erc721";
import "./tasks/mint-erc20";
import "./tasks/mint-erc721";

const DEPLOYER_KEY: string = process.env.DEPLOYER_KEY || "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      initialBaseFeePerGas: 0,
      gasPrice: 0,
    },
    l1: {
      url: "https://rpc.testnet.oasys.games",
      accounts: [DEPLOYER_KEY],
      gasPrice: 3000000000
    },
    l2: {
      url: "https://rpc.testnet.verse.gesoten.com/",
      accounts: [DEPLOYER_KEY],
      initialBaseFeePerGas: 0,
      chainId: 42801,
      gasPrice: 0,
    },
  },
  namedAccounts: {
		deployer: 0,
	},
};

export default config;
