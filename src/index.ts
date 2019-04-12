class Block {
    public index: string;
    public hash: string;
    public previousHash: string;
    public data: string;
    public timestamp: number;
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

const genesisBlock:Block = new Block("0", "2020202020", "", "Hello", 123456);

let blockchain: [Block] = [genesisBlock];

console.log(blockchain);

export {}
