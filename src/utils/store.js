import { web3 } from "./web3";
const abi = require("./storage.abi");

export default class {
    constructor() {
        this.storeContract = new web3.eth.Contract(abi.Storage, process.env.REACT_APP_STORAGE_CONTRACT_ADDRESS)
    }

    getValue = async () => {
        const value = await this.storeContract.methods.getPlayersList().call();
        return value;
    }
}