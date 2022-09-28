const totalUser = document.querySelector(".total-users__content"),
  topUsers = document.querySelector(".top-users__content");

let usersFromStorage = window.localStorage.getItem("UserList");
let users = usersFromStorage ? JSON.parse(usersFromStorage) : [];

function render() {
  totalUser.innerHTML =  users.length + " Users" ;
  users.forEach((user, i) => {
    if (i < 3) {
     topUsers.innerHTML += `<p class = "top-users__name"><i class=" uil-user-circle"></i> ${user.name} </p>` 
    } 
  });
}
render();

function signOut(){
  return window.localStorage.clear();
  

}
