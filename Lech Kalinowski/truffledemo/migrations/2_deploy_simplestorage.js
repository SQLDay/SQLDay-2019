var SimpleStorage = artifacts.require("SimpleStorage.sol");

module.exports = function(deployer) {

  // Pass 42 to the contract as the first constructor parameter
    var myAccount = "0x0A915df961FBda11D2D2a311938f665BdA24Ae02";
    deployer.deploy(SimpleStorage, "42", {privateFor: ["+Knazp7UsG7UNMZOhfBeR21DV31t91Whbw7eu4AI9F8="], from: myAccount})  
};