const fullName = document.getElementById("name");
const contactNum = document.getElementById("num");
const button = document.getElementById("button");
const taskList = document.getElementById("emp-div");
let taskArr = [];

// Load data from local storage on window load
window.addEventListener("load", () => {
  taskArr = JSON.parse(localStorage.getItem("savedata")) || [];
  displayArr(taskArr);
});

// Add contact details
button.addEventListener("click", () => {
  const contactDetail = {
    Name: fullName.value.trim(), // Trim whitespace
    contactNo: contactNum.value.trim(), // Trim whitespace
  };

  if (contactDetail.Name && contactDetail.contactNo) {
    taskArr.push(contactDetail);
    localStorage.setItem("savedata", JSON.stringify(taskArr));
    displayArr(taskArr);
    fullName.value = "";
    contactNum.value = "";
  } else {
    alert("Please provide both name and contact number.");
  }
});

// Display contact details
const displayArr = (contact) => {
  taskList.innerHTML = "";
  for (let i = 0; i < contact.length; i++) {
    const updateButton = createButton("Update", () => updateItem(i));
    const deleteButton = createButton("Delete", () => deleteItem(i));

    // Append the buttons to the taskList
    const itemDiv = document.createElement("div");
    itemDiv.innerHTML = `${i + 1}.<div>Name: ${contact[i].Name}</div>
        <div>Contact no.: ${contact[i].contactNo}</div>`;
    itemDiv.appendChild(updateButton);
    itemDiv.appendChild(deleteButton);

    taskList.appendChild(itemDiv);
  }
};

// Create a button with specified text and click handler
const createButton = (text, clickHandler) => {
  const button = document.createElement("button");
  button.textContent = text;
  button.onclick = clickHandler;
  button.classList.add(
    "bg-blue-500",
    "text-white",
    "px-4",
    "py-2",
    "rounded",
    "mr-2"
  );
  return button;
};

// Update contact details
const updateItem = (i) => {
  const updatedName = prompt("Enter the updated name:");
  const updatedNumber = prompt("Enter the updated contact number:");
  taskArr[i].Name = updatedName;
  taskArr[i].contactNo = updatedNumber;
  localStorage.setItem("savedata", JSON.stringify(taskArr));
  displayArr(taskArr);
};

// Delete contact details
const deleteItem = (i) => {
  if (confirm("Are you sure you want to delete this contact?")) {
    taskArr.splice(i, 1);
    localStorage.setItem("savedata", JSON.stringify(taskArr));
    displayArr(taskArr);
  }
};

/* const fullName = document.getElementById("name");
const contactNum = document.getElementById("num");

const button = document.getElementById("button");
const taskList = document.getElementById("emp-div");

let taskArr = [];
// window loading:
window.addEventListener("load", () => {
  taskArr = JSON.parse(localStorage.getItem("savedata")) || [];
  displayArr(taskArr);
});
// get
button.addEventListener("click", () => {
  const contactDetail = {
    Name: fullName.value,
    contactNo: contactNum.value,
  };
  //   let newDetail = contactDetail.trim();
  if (contactDetail !== "") {
    taskArr.push(contactDetail);
    localStorage.setItem("savedata", JSON.stringify(taskArr));
    displayArr(taskArr);
    fullName.value = "";
    contactNum.value = "";
  } else {
    alert(`This is empty`);
  }
});
// set
const displayArr = (contact) => {
  taskList.innerHTML = "";
  for (let i = 0; i < contact.length; i++) {
    taskList.innerHTML += `${i + 1}.<div> Name : ${contact[i].Name}</div>
      <div>
      Contact no. :
      ${contact[i].contactNo}</div>
      <div>
      <button onclick ="updateItem(${i})">
      Update
      </button>
      </div>

      <button onclick ="deleteItem(${i})">
      Delete
      </button>`;
  }
};
// update:
const updateItem = (i) => {
  const updatedName = prompt("what is the updated name?");
  const updatedNumber = prompt("What is the updated Number?");
  taskArr[i].Name = updatedName;
  taskArr[i].contactNo = updatedNumber;
  localStorage.setItem("savedata", JSON.stringify(taskArr));

  displayArr(taskArr);
};
// delete
const deleteItem = (i) => {
  if (confirm("Are you sure you want to delete this contact?")) {
    taskArr.splice(i, 1);
    localStorage.setItem("savedata", JSON.stringify(taskArr));
    displayArr(taskArr);
  }
}; */
