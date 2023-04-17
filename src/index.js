
  // your code here
    document.addEventListener("DOMContentLoaded", () => {
        const taskForm = document.getElementById("create-task-form");
        const taskList = document.getElementById("tasks");

        taskForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const taskInput = document.getElementById("new-task-description");
            const newTask = document.createElement("li");
            newTask.innerText = taskInput.value;
            taskList.appendChild(newTask);
            taskInput.value = "";
        });
    });


