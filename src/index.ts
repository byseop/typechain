import * as CryptoJS from "crypto-js";

class Block {
    public index: string;
    public hash: string;
    public previousHash: string;
    public data: string;
    public timestamp: number;

    static calculateBlockHash = (
        index: number, 
        previousHash: string, 
        timestamp: number, 
        data: string): string => 
        CryptoJS.SHS256(index + previousHash + timestamp + data).toString();

    constructor(
        index: string,
        hash: string,
        previousHash: string,
        data: string,
        timestamp: number
    ) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}

Block.calculateBlockHash

const genesisBlock:Block = new Block("0", "2020202020", "", "Hello", 123456);

let blockchain: Block[] = [genesisBlock];

const getBlockchain = (): Block[] => blockchain;

const getLastestBlock = (): Block => blockchain[blockchain.length - 1];

const getNewTimeStamp = (): number => Math.round(new Date().getTime() / 1000);
console.log(blockchain);

export {}
