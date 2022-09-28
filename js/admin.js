

const addPopup = document.querySelector("#add-item-popup"),
  editPopup = document.querySelector("#edit-item-popup"),
  userTableBody = document.querySelector(".table__body"),
  userTable = document.querySelector("#user-table");

let activeUserIndex;

//activating the add item pop-up
function addItemPopup() {
  addPopup.classList.add("active");
}

//activating edit item pop-up
function editItemPopup() {
  editPopup.classList.add("active");
}

let usersFromStorage = localStorage.getItem("UserList");
let users = usersFromStorage ? JSON.parse(usersFromStorage) : [];
// function for adding user to table
const addUser = (e) => {
  e.preventDefault(); //to stop the form submitting
  const addName = document.querySelector(".add-name-js").value,
    addEmail = document.querySelector(".add-email-js").value;
  let user = {
    name: addName,
    email: addEmail,
  };

  users.push(user);
  //to clear the form for the next entries
  document.querySelector("form").reset();
  //saving to localStorage
  localStorage.setItem("UserList", JSON.stringify(users));
  addPopup.classList.remove("active");
  render();
  console.log(addUserFormValidation);
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
  document.querySelector(".edit-name").value = userToBeEdited.name;
  document.querySelector(".edit-email").value = userToBeEdited.email;
}

//function to save edit to the table
function saveEdits(e) {
  e.preventDefault();
  const name = document.querySelector(".edit-name").value;
  const email = document.querySelector(".edit-email").value;
  users[activeUserIndex] = { name, email };
  localStorage.setItem("UserList", JSON.stringify(users));
  render();
  editPopup.classList.remove("active");
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
                     <td class="table__data">${user.name}</td>
                     <td class="table__data">${user.email}</td>
                      `;

    // creating  the edit button on each table row
    const editButton = document.createElement("td");
    editButton.className = "table__data edit__btn";
    editButton.innerHTML = `<i class=" uil-edit edit-icon"></i>`;
    editButton.addEventListener("click", () => {
      editUser(i);
    });
    tr.appendChild(editButton);
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
document
  .querySelector("#edit-user-btn-js")
  .addEventListener("click", saveEdits);
