const taskInp = document.getElementById("txt-input");
const button = document.getElementById("btn");

// empty div:
const taskList = document.getElementById("task-list");
// initiliazing an array.
let empArr = [];

//window loading:

window.addEventListener("load", () => {
  empArr = JSON.parse(localStorage.getItem("saved")) || [];
  displayArr(empArr);
});

// create:
button.addEventListener("click", () => {
  //   empArr.push(taskInp.value);
  let newInput = taskInp.value.trim();
  if (newInput !== "") {
    empArr.push(newInput);
    localStorage.setItem("saved", JSON.stringify(empArr));
    displayArr(empArr);
    taskInp.value = "";
  } else {
    alert(`No notes written...`);
  }
});
// read/display:

function displayArr(empArr) {
  taskList.innerHTML = "";
  for (let i = 0; i < empArr.length; i++) {
    taskList.innerHTML += `

    <div class="flex justify-between items-center bg-white p-2 rounded shadow mb-2">
                <div>
                    <ol>${i + 1}. ${empArr[i]}</ol>
                </div>
                <div class="flex space-x-2">
                    <button onclick="updateItem(${i})" class="bg-green-500 text-white px-2 py-1 rounded">Add</button>
                    <button onclick="deleteItem(${i})" class="bg-red-500 text-white px-2 py-1 rounded">Completed</button>
                </div>
            </div>`;
    // <div>
    //                        <ol>
    //                     ${i + 1}. ${empArr[i]}
    //                       </ol>
    //                    <div>
    //                    <div>
    //                    <button onclick = "updateItem(${i})">
    //                    Add
    //                    </button>
    //                    <button onclick = "deleteItem (${i})">
    //                    completed
    //                    </button>
    //                    </div>`;
  }
}
// update:
let updateItem = (i) => {
  // function updateItem(i) {
  let updateVal = prompt("Enter the note here....");

  // empArr.splice(i, 1, updateVal);
  empArr[i] = updateVal;
  localStorage.setItem("saved", JSON.stringify(empArr));

  displayArr(empArr);
};
// delete:

const deleteItem = (i) => {
  const deleteValue = confirm(`Not needed anymore...?`);
  if (deleteValue) {
    empArr.splice(i, 1);
    localStorage.setItem("saved", JSON.stringify(empArr));
    displayArr(empArr);
  }
};
