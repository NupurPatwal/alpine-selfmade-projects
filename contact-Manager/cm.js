const fullName = document.getElementById("name");
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
    taskList.innerHTML +=
      // `${i + 1}.<div> Name : ${contact[i].Name}</div>
      // <div>
      // Contact no. :
      // ${contact[i].contactNo}</div>
      // <div>
      // <button onclick ="updateItem(${i})">
      // Update
      // </button>
      // </div>

      // <button onclick ="deleteItem(${i})">
      // Delete
      // </button>`
      `<div class="bg-gray-100 p-4 rounded shadow-lg">
    <div class="text-lg font-semibold">${i + 1}. Name: ${contact[i].Name}</div>
    <div class="text-gray-700">Contact No.: ${contact[i].contactNo}</div>
    <div class="mt-2 flex space-x-2">
        <button onclick="updateItem(${i})" class="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50">
        Update
        </button>
        <button onclick="deleteItem(${i})" class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50">
        Delete
        </button>
    </div>
</div>`;
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
};
