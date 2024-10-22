const savedArray = JSON.parse(localStorage.getItem("toDoArray")) || [];

addEventListener("DOMContentLoaded", start);

function start() {
    if(!localStorage.getItem("toDoArray")) {
        localStorage.setItem("toDoArray", JSON.stringify([]));
        console.log("Jeg gemte default array");
    }
  showTasks();

  document.querySelector(".add_icon").addEventListener("click", () => {
    document.querySelector("#task_input").value = "";
    document.querySelector(".add_task").classList.remove("hidden");
  });
}

document.querySelector("button").addEventListener("click", () => {
  const taskInput = document.querySelector("#task_input").value;
  const quantityInput = document.querySelector("#quantity_input").value;

  const newObject = {
    title: taskInput,
    done: false,
    id: crypto.randomUUID(),
    quantity: quantityInput,

  };
  
  addTask(newObject);
});



function addTask(value) {
  document.querySelector(".add_task").classList.add("hidden");
  
    savedArray.push(value);
    saveData();
    showTasks();
}

function showTasks() {
  document.querySelector("ul").innerHTML = "";
  document.querySelector(".done_box ul").innerHTML = "";

  savedArray.forEach((task) => {
    const clone = document.querySelector("template").content.cloneNode(true);
    const list = document.querySelector("ul");
    const taskName = clone.querySelector("li");
    const taskQuantity = clone.querySelector("#task_quantity");
    const checkMarkIcon = clone.querySelector(".checkmark_icon");
    const deleteButton = clone.querySelector(".delete_icon");
    const doneList = document.querySelector(".done_box ul");

    taskName.textContent = task.title;
    taskQuantity.textContent = task.quantity;


    if (task.done === false) {
      list.appendChild(clone);
      //console.log(task)
    }

    if (task.done === true) {
      doneList.appendChild(clone);
      checkMarkIcon.classList.add("checked");
    
    }

    if(task.quantity < 1){
      taskQuantity.textContent = "";
      }
    deleteButton.addEventListener("click", () => {
      deleteTask(task.id);
    });

    checkMarkIcon.addEventListener("click", () => {
      toggleTaskDone(task);
    });
  });
}

function deleteTask(id) {
  const index = savedArray.findIndex((task) => task.id === id);
  savedArray.splice(index, 1);
  saveData();
  showTasks();
}

function toggleTaskDone(task){
    task.done = !task.done;
    saveData();
    showTasks();
}

function saveData(){
    localStorage.setItem("toDoArray", JSON.stringify(savedArray));
}