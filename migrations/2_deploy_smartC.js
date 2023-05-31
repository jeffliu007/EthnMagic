//abi
const EthnMagic = artifacts.require("EthnMagic");

module.exports = async (deployer) => {
	const accounts = await web3.eth.getAccounts();

	//contract constructor params to deploy
	await deployer.deploy(EthnMagic, "EthnMagic", "EM", 10, accounts[1]);
};
