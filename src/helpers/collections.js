export const networkCollections = {
  "0xa869": [
    //Add Your Collections here
    {
      image:
        "https://lh3.googleusercontent.com/BWCni9INm--eqCK800BbRkL10zGyflxfPwTHt4XphMSWG3XZvPx1JyGdfU9vSor8K046DJg-Q8Y4ioUlWHiCZqgR_L00w4vcbA-w=s0",
      name: "Normal NFT",
      addrs: "0xBC7d93e15a2ba263DFDA8D3046949c9141BACcd2",
    },
    {
      image:
        "https://gateway.ipfs.io/ipfs/bafybeihhglshjvu53oujfkztnwv26gpmqt7w2oqx5524lfdfdodtafvtwu/SYONE_Ultra_v01.jpg",
      name: "3 Type NFT",
      addrs: "0xae3A7C5c41E824B37c6548cfC1F44603e13db6dC",
    },
    {
      image:
        "https://lh3.googleusercontent.com/BWCni9INm--eqCK800BbRkL10zGyflxfPwTHt4XphMSWG3XZvPx1JyGdfU9vSor8K046DJg-Q8Y4ioUlWHiCZqgR_L00w4vcbA-w=s0",
      name: "Normal NFT old",
      addrs: "0x36705404Bdc54a097481968A6D6ccD253436a613",
    },
  ],

  
};

export const getCollectionsByChain = (chain) => networkCollections[chain];
