// account-business.js
const styleBusiness = require("./style-business");

function getAccountElement(account) {
  const li = document.createElement("li");

  li.style = styleBusiness.getNodeStyle(account);

  li.append("[Saldo: " + account.money + "] IBAN: " + account.iban);
  return li;
}

function getClientAccountsElement(accounts) {
  const ul = document.createElement("ul");
  for (let account of accounts) {
    ul.append(getAccountElement(account));
  }
  return ul;
}

module.exports = { getClientAccountsElement };