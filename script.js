 const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

let tasks = JSON.parse(localStorage.getItem("tasks"))||
[];
function saveTasks(){
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

addBtn.addEventListener("click", function(){
    const taskText = taskInput.value.trim();

    if(taskText === ""){
        alert("Please enter a task!");
        return;
    }
    const li = document.createElement("li")
    li.textContent = taskText;
    li.addEventListener("click", function(event){
        if(event.target.tagName !=="Button"){
            li.classList.toggle("Completed");
        }
    })
    

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", function(){
        li.remove();
        tasks = tasks.filter(function (task){
            return task !== taskText;
        });
        saveTasks();
    });
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    tasks.push(taskText);
    saveTasks();
    taskInput.value = "";
     
});

taskInput.addEventListener("keydown", function(event){
if(event.key === "Enter"){
    addBtn.click();
}
});

function renderSavedTasks() {
    taskList.innerHTML = "";

    tasks.forEach(function (task) {
        const li = document.createElement("li");
        li.textContent = task;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";

        deleteBtn.addEventListener("click", function () {
            li.remove();

            tasks = tasks.filter(function (item) {
                return item !== task;
            });

            saveTasks();
        });

        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    });
}

renderSavedTasks();