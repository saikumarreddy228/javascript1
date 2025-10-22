
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");

addBtn.addEventListener("click", addTask);


function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }


  const li = document.createElement("li"); 
  const span = document.createElement("span");
  span.textContent = taskText;


  const delBtn = document.createElement("button");
  delBtn.textContent = "❌";
  delBtn.addEventListener("click", removeTask);


  li.appendChild(span);
  li.appendChild(delBtn);
  taskList.appendChild(li);


  taskInput.value = "";

  updateCount();
}


function removeTask(event) {
  const li = event.target.parentElement; 
  taskList.removeChild(li);
  updateCount();
}


function updateCount() {
  const total = taskList.children.length; 
  taskCount.textContent = "Total Tasks: " + total;
}
