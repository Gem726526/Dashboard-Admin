const addItemClass = document.querySelector(".add-item-popup"),
  editItemClass = document.querySelector(".edit-item-popup"),
  userTableBody = document.querySelector("#table-body"),
  userTable = document.querySelector("#user-table");
 

let activeUserIndex;

//activating the add item pop-up
function addItemPopup() {
  addItemClass.classList.add("active");
}
//activating edit item pop-up
function editItemPopup() {
  editItemClass.classList.add("active");
}

let usersFromStorage = localStorage.getItem("UserList");
let users = usersFromStorage ? JSON.parse(usersFromStorage) : [];
// function for adding user to table
const addUser = (e) => {
  e.preventDefault(); //to stop the form submitting
  const addName = document.querySelector(".add-name").value,
    addEmail = document.querySelector(".add-email").value;
  let user = {
    Name: addName,
    Email: addEmail,
  };
  users.push(user);
  //to clear the form for the next entries
  document.querySelector("form").reset();
  //saving to localStorage
  localStorage.setItem("UserList", JSON.stringify(users));
  addItemClass.classList.remove("active");
  render();
};
//function to delete user
function deleteUser(userIndex) {
  const newUsers = [...users];
  newUsers.splice(userIndex, 1);
  users = newUsers;
  localStorage.setItem("UserList", JSON.stringify(users));
  render();
}
//function to  edituserItem
function editUser(userIndex) {
  editItemPopup(userIndex);
  activeUserIndex = userIndex;
  const userToBeEdited = users[userIndex];
  document.querySelector(".edit-name").value = userToBeEdited.Name;
  document.querySelector(".edit-email").value = userToBeEdited.Email;

}
//function to save edit to the table
function saveEdits(e) {
  e.preventDefault();
  const Name = document.querySelector(".edit-name").value;
  const Email = document.querySelector(".edit-email").value;
  users[activeUserIndex] = { Name, Email };
  localStorage.setItem("UserList", JSON.stringify(users));
  render();
  editItemClass.classList.remove("active");
}

function render() {
  userTableBody.innerHTML = "";
  users.forEach((user, i) => {
    //adding data to table
    const tr = document.createElement("tr");
    tr.className = "table__row";
    userTableBody.appendChild(tr);
    tr.innerHTML = `
                     <td class="table__data">${i + 1}</td>
                     <td class="table__data">${user.Name}</td>
                     <td class="table__data">${user.Email}</td>
                      `;

    // creating  the edit button on each table row
    const editButton = document.createElement("td");
    editButton.className = "table__data edit__btn";
    editButton.innerHTML = `<i class=" uil-edit edit-icon"></i>`;
    editButton.addEventListener("click", () => {
      editUser(i);
    });
    tr.appendChild(editButton); //this line adds the button
    // creating  the delete button on each table row
    const deleteButton = document.createElement("td");
    deleteButton.className = "table__data delete-btn";
    deleteButton.innerHTML = `<i class=" uil-trash trash-icon"></id>`;
    deleteButton.addEventListener("click", () => {
      deleteUser(i);
    });
    tr.appendChild(deleteButton); //this line adds the button
  });

  

}

render();

document.querySelector("#add-user-btn").addEventListener("click", addUser);
document  .querySelector("#edit-user-btn-save")  .addEventListener("click", saveEdits);
