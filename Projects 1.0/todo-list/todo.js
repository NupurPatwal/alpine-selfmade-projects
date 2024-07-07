const taskInput = document.getElementById("task-inp");
const button = document.getElementById("btn");

// empty div:
const taskList = document.getElementById("task-list");

//  initliazing an array:
let empArr = [];

// window is loading:
window.addEventListener("load", () => {
  empArr = JSON.parse(localStorage.getItem("ls")) || [];
  displayArr(empArr);
});

//  get:-
button.addEventListener("click", () => {
  //   empArr.push(taskInput.value);
  //   displayArr(empArr);
  let newInp = taskInput.value.trim();
  if (newInp !== "") {
    empArr.push(newInp);
    localStorage.setItem("ls", JSON.stringify(empArr));
    displayArr(empArr);
    taskInput.value = "";
  } else {
    alert(`kuch toh type kr bhai`);
  }
});

// read the value:
function displayArr(empArr) {
  taskList.innerHTML = "";
  for (let i = 0; i < empArr.length; i++) {
    // taskList.innerHTML += `<div>${empArr[i]}</div>
    // <button onclick ="updateItem(${i})">Update</button>
    // <button onclick ="deleteItem(${i})">Delete</button>
    // `
    taskList.innerHTML += `<div class="flex justify-between items-center bg-white p-2 rounded shadow mb-2">
    <div>${empArr[i]}</div>
    <div>
        <button onclick="updateItem(${i})" class="bg-gradient-to-r from-emerald-500 to-emerald-900 text-white px-2 py-1 rounded mr-2">Update</button>
        <button onclick="deleteItem(${i})" class="bg-gradient-to-r from-red-500 to-orange-500 text-white px-2 py-1 rounded">Delete</button>
    </div>
</div>`;
  }
}

//  set/update:
// let updateItem = (i) => {
function updateItem(i) {
  let updateVal = prompt(` Enter the updated not to do..`);
  empArr.splice(i, 1, updateVal);
  localStorage.setItem("ls", JSON.stringify(empArr));
  displayArr(empArr);
}

//  delete:

function deleteItem(i) {
  let deleteVal = confirm(`Did you actually wanna delete it?`);
  if (deleteVal) {
    empArr.splice(i, 1);
    localStorage.setItem("ls", JSON.stringify(empArr));
    displayArr(empArr);
  }
}
