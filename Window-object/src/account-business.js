// account-business.js
function getAccountElement(App, account) {
  const li = document.createElement("li");

  li.style = App.getNodeStyle(account);

  li.append("[Saldo: " + account.money + "] IBAN: " + account.iban);
  return li;
}


(function(App) {
  App.getClientAccountsElement = function(accounts) {
    const ul = document.createElement("ul");
    for (let account of accounts) {
      ul.append(getAccountElement(App, account));
    }
    return ul;
  };
})(window.App || (window.App = {}));