// client-list-business.js

(function (App) {
  App.printClientsAccounts = function (App) {
    const clients = App.getClients();
    const ul = document.createElement("ul");
    for (let client of clients) {
      const element = App.getClientElement(App, client);
      ul.appendChild(element);
    }
  
    document.getElementById("root").appendChild(ul);
  }
})(window.App || (window.App = {}));


