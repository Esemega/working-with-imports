// client-business.js
function getFullName(client) {
  return client.first_name + " " + client.last_name;
}

function getClientNode(client) {
  const li = document.createElement("li");
  li.append(getFullName(client));

  return li;
}

(function (App) {
  App.getClientElement = function (App, client) {
    const allAccounts = App.getAccounts();
    const clientAccounts = [];
    for (let account of allAccounts) {
      if (account.clientId === client.id) {
        clientAccounts.push(account);
      }
    }

    const node = getClientNode(client);
    const ul = App.getClientAccountsElement(clientAccounts);

    node.appendChild(ul);

    return node;
  };
})(window.App || (window.App = {}));
