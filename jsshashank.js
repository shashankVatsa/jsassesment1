// create a variable to hold your NFT's
const NFTs = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(_name, _eyecolour, _shirtType, _bling) {
  const NFT = {
    "name": _name,
    "eyecolour": _eyecolour,
    "shirtType": _shirtType,
    "bling": _bling
  };

  NFTs.push(NFT);
  console.log("Minted: " + _name);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs() {
  for (let i = 0; i < NFTs.length; i++) {
    console.log("\nID: \t\t" + (i + 1));
    console.log("Name: \t\t" + NFTs[i].name);
    console.log("Eyecolour: \t" + NFTs[i].eyecolour);
    console.log("ShirtType: \t" + NFTs[i].shirtType);
    console.log("Bling: \t\t" + NFTs[i].bling);
  }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
  console.log("\nTotal Supply: " + NFTs.length);
}

// call your functions below this line
mintNFT("Bob", "blue", "hoodie", "Gold chain");
mintNFT("Mark", "green", "t-shirt", "Diamond pendant");
mintNFT("Cook", "brown", "sweater", "Silver bracelet");
mintNFT("Tim", "hazel", "tank top", "Bronze ring");
listNFTs();
getTotalSupply();
