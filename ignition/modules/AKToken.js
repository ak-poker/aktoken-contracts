const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("AKTokenModule", (m) => {

  const akToken = m.contract("AKToken", [], {});

  return { akToken };
});
