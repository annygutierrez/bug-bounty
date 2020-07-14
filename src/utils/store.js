import { web3 } from "./web3";
// import { STORAGE_CONTRACT_ADDRESS } from "../env/keys"
import { setter } from "./web3Operations";
const abi = require("./storage.abi");

export default class {
    constructor() {
        this.storeContract = new web3.eth.Contract(abi.Storage, process.env.REACT_APP_STORAGE_CONTRACT_ADDRESS)
    }
    // setValue = async () => {
    //     try {
    //         const addressFrom = '0x3b72803d0806c4d7d01d60b06ca8146711c8648a';
    //         const privKey = '0xf0dbf4e7f175d2960d7deeabd22092b725bf6e8adee66de3b6b0935aa74aff27';
    //         const functionName = "store"
    //         let set = web3.eth.abi.encodeFunctionSignature(`${functionName}(uint256)`)
    //         const valueToSet = 64
    //         let value = web3.eth.abi.encodeParameters(["uint256"], [valueToSet])
    //         const txData = set + value.substr(2)
    //         if (privKey.startsWith("0x")) {
    //             privKey = privKey.slice(2);
    //         }
    //         privKey = Buffer.from(privKey, 'hex')//this argument must be without 0x
    //         console.log('process.env.REACT_APP_STORAGE_CONTRACT_ADDRESS', process.env.REACT_APP_STORAGE_CONTRACT_ADDRESS);
    //         console.log('addressFrom', addressFrom);
    //         console.log('txData', txData);
    //         console.log('privKey', privKey);
    //         const receipt = await setter(process.env.REACT_APP_STORAGE_CONTRACT_ADDRESS, addressFrom, txData, privKey);
    //         return receipt
    //     } catch (error){
    //       console.log(error);
    //     }
    // }

    getValue = async () => {
        const value = await this.storeContract.methods.getPlayersList().call();
        return value;
    }

    addPlayer = async () => {
        return '';
        // const value = await this.storeContract.methods.addPlayer('camilo', 1290, 53).send({ from: '0x3b72803d0806c4d7d01d60b06ca8146711c8648a' });
        // return value;
    }
}

// setValue = async (addressFrom, privKey) => {
//     try {
//         const functionName = "store"
//         let set = web3.eth.abi.encodeFunctionSignature(`${functionName}(uint256)`)
//         const valueToSet = 64
//         let value = web3.eth.abi.encodeParameters(["uint256"], [valueToSet])
//         const txData = set + value.substr(2)
//         if (privKey.startsWith("0x")) {
//             privKey = privKey.slice(2);
//         }
//         privKey = Buffer.from(privKey, 'hex')//this argument must be without 0x
//         console.log('process.env.REACT_APP_STORAGE_CONTRACT_ADDRESS', process.env.REACT_APP_STORAGE_CONTRACT_ADDRESS);
//         console.log('addressFrom', addressFrom);
//         console.log('txData', txData);
//         console.log('privKey', privKey);
//         const receipt = await setter(process.env.REACT_APP_STORAGE_CONTRACT_ADDRESS, addressFrom, txData, privKey)
//         return receipt
//     } catch (error){
//       console.log(error);
//     }
// }

// getValue = async () => {
//     const value = await this.storeContract.methods.retreive().call()
//     return value
// }