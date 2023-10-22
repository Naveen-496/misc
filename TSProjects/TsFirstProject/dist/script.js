"use strict";
const list = document.querySelector("#list");
const form = document.getElementById("new-task-form");
const input = document.querySelector("#new-task-title");
let idCounter = 0;
form === null || form === void 0 ? void 0 : form.addEventListener("submit", (e) => {
    e.preventDefault();
    if ((input === null || input === void 0 ? void 0 : input.value) == "" || (input === null || input === void 0 ? void 0 : input.value) == null)
        return;
    const newTask = {
        id: ++idCounter,
        title: input.value,
        completed: false,
        createdAt: new Date(),
    };
    addNewTask(newTask);
});
function addNewTask(task) {
    const listElement = document.createElement("li");
    const labelElement = document.createElement("label");
    const inputElement = document.createElement("input");
    inputElement.type = "checkbox";
    labelElement.append(inputElement, task.title);
    listElement.append(labelElement);
    list === null || list === void 0 ? void 0 : list.append(listElement);
}
