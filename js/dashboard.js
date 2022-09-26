const totalUser = document.querySelector(".total-users__content"),
  topUsers = document.querySelector(".top-users__content");

let usersFromStorage = window.localStorage.getItem("UserList");

let users = usersFromStorage ? JSON.parse(usersFromStorage) : [];
const topUser =[];
function render() {
  totalUser.innerHTML =  users.length + " Users" ;

  users.forEach((user, i) => {
    //adding data to table
    
    if (i < 3) {
      
      topUser.push[user.Name]
      
    } else {
    }
  });
  topUser.forEach((user,i)=>{
    topUsers.innerHTML = `<p class = "top-users__name">${user.Name} </p>` 
  })
}
render();


function signOut(){
  return window.localStorage.clear();
  

}
