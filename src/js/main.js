toDoArray = [
    {
        title: "Make Cake For Birthday",
        id: crypto.randomUUID(),
        done: false

    },
    {
        title: "Clean Kitchen",
        id: crypto.randomUUID(),
        done: false
    }
]

addEventListener("DOMContentLoaded", start);

function start(){
    showtasks();

    
    document.querySelector(".add_icon").addEventListener("click", () => {
        document.querySelector("input").value = "";
        document.querySelector(".add_task").classList.remove("hidden");  
    

});


}



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


function showtasks() {
    document.querySelector("ul").innerHTML = "";
            document.querySelector(".done_box ul").innerHTML = "";




    toDoArray.forEach(task => {

        if(task.done === false){
        const clone = document.querySelector("template").content.cloneNode(true);
        const list = document.querySelector("ul");
        const li = clone.querySelector("li");
        const checkMarkIcon = clone.querySelector(".checkmark_icon");
        const deleteButton = clone.querySelector(".delete_icon");

        li.textContent = task.title;

        list.appendChild(clone);

        deleteButton.addEventListener("click", () => {
            deleteTask(task.id);
        });

        checkMarkIcon.addEventListener("click", () => {
            task.done = !task.done;
            console.log(task.done);
            // moveTodone(task.done);
            showtasks();
        });

    }

    if(task.done === true){
        document.querySelector(".done_box ul").innerHTML = "";

        const doneTasks = toDoArray.filter((task) => task.done === true)
        doneTasks.forEach(task =>{
        const clone = document.querySelector("template").content.cloneNode(true);
        const doneList = document.querySelector(".done_box ul");
        const li = clone.querySelector("li");
        const checkMarkIcon = clone.querySelector(".checkmark_icon");

        const deleteButton = clone.querySelector(".delete_icon");

           deleteButton.addEventListener("click", () => {
            deleteTask(task.id);
        });

        li.textContent = task.title;
         checkMarkIcon.classList.add("checked");

        doneList.appendChild(clone);
        

            checkMarkIcon.addEventListener("click", () => {
            task.done = !task.done;
            console.log(task.done);
            // moveTodone(task.done);
            showtasks();
        });

        // showtasks();


    })

    }

    });
}


// function moveTodone(){
//     document.querySelector(".done_box ul").innerHTML = "";

//     const doneTasks = toDoArray.filter((task) => task.done === true)
//     doneTasks.forEach(task =>{
//         const clone = document.querySelector("template").content.cloneNode(true);
//         const doneList = document.querySelector(".done_box ul");
//         const li = clone.querySelector("li");

//         const deleteButton = clone.querySelector(".delete_icon");

//         li.textContent = task.title;

//         doneList.appendChild(clone);

//         showtasks();


//     })


// }

function deleteTask(id){
    const index = toDoArray.findIndex(task => task.id === id);
    toDoArray.splice(index, 1);
    showtasks();

}

