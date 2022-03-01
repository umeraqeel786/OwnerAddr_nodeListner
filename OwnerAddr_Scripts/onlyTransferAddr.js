const Web3 = require("web3");

(async () => {
  const web3 = new Web3(
    "https://rinkeby.infura.io/v3/54864fd661734a288da4dcdda1ad2f7c"
  );
   
const start = Date.now()
  
  const nftAddress = "0x3dC220A85294b33e93d496b7D5e64C41810c3745";
  // ERC721 abi to interact with contract

  const abi = [
			{
				"inputs": [],
				"name": "onlyTransfer",
				"outputs": [
					{
						"internalType": "address[]",
						"name": "",
						"type": "address[]"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [],
				"name": "totalSupply",
				"outputs": [
					{
						"internalType": "uint256",
						"name": "",
						"type": "uint256"
					}
				],
				"stateMutability": "view",
				"type": "function"
			}
			
		];
			

  // interact with contract
  const nftContract = new web3.eth.Contract(abi, nftAddress);
 const  onlyTransfer = await nftContract.methods.onlyTransfer().call({from: "0x8c8e240C723F5F850c6fdfD04a1B08598DaF6B53"})
 const  totalSupply = await nftContract.methods.totalSupply().call()
 
console.log(`TotalSupply: ${totalSupply}\n`);
 
console.log(`OnlyTransferOwner Addres: ${onlyTransfer}\n`);
  const stop = Date.now()
  
   console.log(`\n\nTime Taken to execute = ${(stop - start)/1000} seconds`);

 
  
  
})();
