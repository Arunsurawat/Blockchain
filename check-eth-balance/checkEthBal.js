const Web3 = require('web3');
const url = "https://mainnet.infura.io/v3/16ce83605e3e4be2892677e0a79101f0";
const web3 = new Web3(url);
let arr = ["0x936bfA38bf984ef9658E5710512bF59DABd5ffEE","0xc4c67E78f7725E2C9c2013702f679352D831D21c","0x936bfA38bf984ef9658E5710512bF59DABd5ffEE"]
arr.map((address)=>{
    web3.eth.getBalance(address).then((bal)=>{console.log(web3.utils.fromWei(bal,'ether')+' ETH')});
});