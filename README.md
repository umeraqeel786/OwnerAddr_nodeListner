## Setting Up

### 1. Clone/Download the Repository

### 2. Install Dependencies:
```
$ cd OwnerAddress_NodeListner
$ npm install 
```

### 3. Start Ganache

### 4. Smart Contracts
`Deploy smart contract on rinkeby testnet from truffle or directly from remix`

### 5. Run EventListner Script
Script/EventListner.js
Add your deploy address
Add rinkeby provide link 
Setup and connect Mongodb.
First run the create document function that will fill the database table
then run the update document function this will automatically update the database that you created previously if the token is transferd to someone else.

`$ node ./scripts/EvenLitner.js`



`$ node ./scripts/Past_query.js`



### 6. Run Script OwnerAddress

`$ node ./OwnerAddr_Scripts/onlyTransferAddr.js`

it Will Return Only transfer Owner Address

`$ node ./OwnerAddr_Scripts/totalAddr_ClientScript.js`

it Will Return total Owner Address from node script (Client Side)


`$ node ./OwnerAddr_Scripts/totaladdr_fromContract.js`

it Will Return Only total Owner Address for calling the smart contract function

