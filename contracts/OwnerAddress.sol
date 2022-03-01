// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract Nft is ERC721, ERC721Enumerable, ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIdCounter;

    constructor() ERC721("MyToken", "MTK") {}

     function safeMint(uint _tokenToMint) public onlyOwner {
     
        for (uint i = 0; i < _tokenToMint; i++){
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
     
        _safeMint(msg.sender, tokenId);
        _setTokenURI(tokenId, "ipfs//");
   
        }
    }
    

    //Get Transfer Owner Address
    function onlyTransfer()
        public
        view
        returns (address[] memory  )
    {
        uint count; 
        uint againcount; 
       
        uint getCount;
        uint256 total = totalSupply();
        address onwer = msg.sender;
        address[] memory tokenIds = new address[](total);
        
        for (uint256 i=0; i < total; i++) {            
            if(ownerOf(i) != onwer){
             tokenIds[count] = ownerOf(i);
              count++;   
              getCount = count; 
             }

        }

          address[] memory token = new address[](getCount);
         for (uint256 i=0; i < total; i++) {            
            if(ownerOf(i) != onwer){
              token[againcount] = ownerOf(i);   
              againcount++;   
            }

        }

        
        return token;
    }




    //Get Total Owner Address
    function GetTotalNftAddress()
        public
        view
        returns (address[] memory)
    {
        uint count; 
        uint256 total = totalSupply();
        address[] memory tokenIds = new address[](total);
        
        for (uint256 i=0; i < total; i++) {
                tokenIds[count] = ownerOf(i);
                count++;  
        }
           return tokenIds;
           
    }


    function _beforeTokenTransfer(address from, address to, uint256 tokenId)
        internal
        override(ERC721, ERC721Enumerable)
    {
        super._beforeTokenTransfer(from, to, tokenId);
    }

    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721Enumerable)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}
