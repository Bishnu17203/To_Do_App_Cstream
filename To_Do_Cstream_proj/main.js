document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");

    addTaskButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const li = document.createElement("li");
            li.innerHTML = `
                ${taskText}
                <button class="delete-button">Delete</button>
            `;
            taskList.appendChild(li);
            taskInput.value = "";

            // Add an event listener to the delete button
            const deleteButton = li.querySelector(".delete-button");
            deleteButton.addEventListener("click", function () {
                taskList.removeChild(li);
            });
        }
    });
});
