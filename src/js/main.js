const toDoArray = [
  {
    title: "Make Cake For Birthday",
    id: crypto.randomUUID(),
    done: false,
    quantity: 1,
  },
  {
    title: "Clean Kitchen",
    id: crypto.randomUUID(),
    done: false,
    quantity: 1,
  },
];

addEventListener("DOMContentLoaded", start);

function start() {
  showtasks();

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
  toDoArray.push(value);
    saveData();
//   showtasks();
}

function showtasks() {
  document.querySelector("ul").innerHTML = "";
  document.querySelector(".done_box ul").innerHTML = "";
  
const savedTasks = JSON.parse(localStorage.getItem("toDoArray")) || toDoArray;

console.log(savedTasks);


  savedTasks.forEach((task) => {
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
      console.log(task)
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
      task.done = !task.done;
      localStorage.setItem("toDoArray", JSON.stringify(savedTasks));

      console.log(task.done);
        showtasks();
    });
  });
}

function deleteTask(id) {
  const index = toDoArray.findIndex((task) => task.id === id);
  toDoArray.splice(index, 1);
  saveData();
//   showtasks();
}


function saveData(){
  localStorage.setItem("toDoArray", JSON.stringify(toDoArray));
  const savedArray = JSON.parse(localStorage.getItem("toDoArray"));
  console.log(savedArray);
  showtasks();

}