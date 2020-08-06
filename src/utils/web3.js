import Web3 from "web3";
const RPC_URL = "https://lacchain.eth.kaytrust.id";
 
let provider = new Web3.providers.HttpProvider(RPC_URL);
 
const web3 = new Web3(provider);
web3.transactionConfirmationBlocks = 1;
export {web3};