type TasK = {
  id: number;
  title: string;
  completed: boolean;
  createdAt: Date;
};

const list = document.querySelector<HTMLUListElement>("#list")
const form = document.getElementById("new-task-form") as HTMLFormElement | null
const input = document.querySelector<HTMLInputElement>("#new-task-title")

let idCounter = 0;

form?.addEventListener("submit", (e) => {
  e.preventDefault();
  if (input?.value == "" || input?.value == null) return;

  const newTask = {
    id: ++idCounter,
    title: input.value,
    completed: false,
    createdAt: new Date(),
  };

  addNewTask(newTask);
});

function addNewTask(task: TasK) {
  const listElement = document.createElement("li");
  const labelElement = document.createElement("label");
  const inputElement = document.createElement("input");
  inputElement.type = "checkbox";
  labelElement.append(inputElement, task.title);
  listElement.append(labelElement);
  list?.append(listElement);
}
