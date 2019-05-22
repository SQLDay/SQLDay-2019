var defaultnode = "https://lechkalinowski.blockchain.azure.com:3200/OW3YN_kNwd3a76jRjmTcZUCN";
var alpha = "https://alpha-lechkalinowski.blockchain.azure.com:3200/KZO4s8CcHC7v_ZLz-E2nju2k";
var beta = "https://beta-lechkalinowski.blockchain.azure.com:3200/ksRvpridtv79fvpVih-_oWY5";

var myAccount = "0xB412cEf9256eaeDc862Cf3527431434e0cC36384";
var myPassword = "myStrongPassword";

var Web3 = require("web3");

module.exports = {
  networks: {
    dev: {
      provider:(() =>  {
      const AzureBlockchainProvider = new Web3.providers.HttpProvider(defaultnode);

      const web3 = new Web3(AzureBlockchainProvider);
      web3.eth.personal.unlockAccount(myAccount, myPassword);

      return AzureBlockchainProvider;
      })(),

      network_id: "*",
      gas: 0,
      gasPrice: 0,
      from: myAccount
    },
    alpha: {
      provider: new Web3.providers.HttpProvider(alpha),
      network_id: "*",
      gas: 0,
      gasPrice: 0
    },
    beta: {
      provider: new Web3.providers.HttpProvider(beta),
      network_id: "*",
      gas: 0,
      gasPrice: 0
    }
  }
}