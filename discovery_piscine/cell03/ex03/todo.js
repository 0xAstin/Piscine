const taskList = document.getElementById("ft_list");
const newTaskBtn = document.getElementById("new-task-btn");

newTaskBtn.addEventListener("click", () => {
  const taskName = prompt("Enter a new task:");
  if (taskName) {
    const task = createTask(taskName);
    taskList.insertBefore(task, taskList.firstChild);
    saveTasks();
  }
});

taskList.addEventListener("click", event => {
  const task = event.target;
  if (task.tagName.toLowerCase() === "div") {
    if (confirm("Do you want to remove this task?")) {
      taskList.removeChild(task);
      saveTasks();
    }
  }
});

function createTask(taskName) {
  const task = document.createElement("div");
  task.textContent = taskName;
  task.style.cursor = "pointer";
  task.style.margin = "10px";
  return task;
}

function saveTasks() {
  const tasks = Array.from(taskList.children).map(task => task.textContent);
  document.cookie = `tasks=${JSON.stringify(tasks)}`;
}

function loadTasks() {
  const cookies = document.cookie.split("; ");
  const tasksCookie = cookies.find(cookie => cookie.startsWith("tasks="));
  if (tasksCookie) {
    const tasks = JSON.parse(tasksCookie.substring(6));
    tasks.forEach(taskName => {
      const task = createTask(taskName);
      taskList.appendChild(task);
    });
  }
}

loadTasks();
