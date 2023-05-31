//abi
const EthnMagicV1 = artifacts.require("EthnMagicV1");

module.exports = async (deployer) => {
  const accounts = await web3.eth.getAccounts();

  //contract constructor params to deploy
  await deployer.deploy(EthnMagicV1, "EthnMagicV1", "EM", 10, accounts[1]);
};
