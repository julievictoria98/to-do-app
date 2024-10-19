toDoArray = [
    {
        title: "Make Cake For Birthday",
        done: false

    },
    {
        title: "Clean Kitchen",
        done: false
    }
]


addEventListener("DOMContentLoaded", showtasks);

const newID = self.crypto.randomUUID();

document.querySelector("button").addEventListener("click", () => {
    const input = document.querySelector("input").value;

    const newObject = {
        title: input,
        done: false
    };
    addTask(newObject);  
});


function addTask(value){
    document.querySelector(".add_task").classList.add("hidden");  
    toDoArray.push(value);
    showtasks();

}

document.querySelector(".add_icon").addEventListener("click", () => {
   document.querySelector(".add_task").classList.remove("hidden");  
    
    
});
function showtasks(){
    document.querySelector("ul").innerHTML = "";

    toDoArray.forEach(task =>{
        const list = document.querySelector("ul");
        const li = document.createElement("li");
        li.textContent = task.title;
        list.appendChild(li);
    })

    toDoArray.forEach(element => {
    console.log(element);
    
});


}