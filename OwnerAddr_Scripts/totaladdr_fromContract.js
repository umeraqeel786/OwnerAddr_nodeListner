const Web3 = require("web3");

(async () => {
  const web3 = new Web3(
    "https://rinkeby.infura.io/v3/54864fd661734a288da4dcdda1ad2f7c"
  );
  const start = Date.now()
  
  // address of ERC721 NFT
 // 0x368cC1270ffBDe753f545E89Ab40C69cb855A119
 // 0x2Ea865F1712Cf81Ad4a1D59f201A7472eb26e0C5
  const nftAddress = "0x11a5D56B034d0F3fFcEbCaa69bFE9Db526285d76";
  // ERC721 abi to interact with contract
    const nftBuild = [
    {
      inputs: [
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "ownerOf",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
      {
      inputs: [],
      name: "totalSupply",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256"
        }
      ],
      stateMutability: "view",
      type: "function",
      constant: true
    },
     {
      inputs: [],
      name: "GetTotalNftAddress",
      outputs: [
        {
          internalType: "address[]",
          name: "addr",
          type: "address[]"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
  ];

  // interact with contract
  const nftContract = new web3.eth.Contract(nftBuild, nftAddress);
  const total = await nftContract.methods.totalSupply().call()
  const GetTotalNftAddress = await nftContract.methods.GetTotalNftAddress().call()
    
  //console.log(`Total NFTs Address: ${totalMinted.length}\n`)
 console.log(`Total Supply: ${total}\n`);

 console.log(`Total NFTs: ${GetTotalNftAddress}\n`);

  const stop = Date.now()
  
   console.log(`\n\nTime Taken to execute = ${(stop - start)/1000} seconds`);

  
  
})();
