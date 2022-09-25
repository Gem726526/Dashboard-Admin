const totalUser = document.querySelector(".total-users__content"),
  topUsers = document.querySelector(".top-users__content");

let usersFromStorage = window.localStorage.getItem("UserList");

let users = usersFromStorage ? JSON.parse(usersFromStorage) : [];

function render() {
  totalUser.innerHTML = users.length + "   Users";

  users.forEach((user, i) => {
    //adding data to table
    if (i < 3) {
      topUsers.insertAdjacentHTML(
        "afterbegin",
        `<p class = "top-users__name">${user.Name} </p>`
      );
    } else {
    }
  });
}

render();
