document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('create-task-form'); 
  form.addEventListener("submit", createNewTask);
})

function createNewTask(event) {
  event.preventDefault();
  const newTask = document.getElementById('new-task-description');
  const uList = document.getElementById('tasks');
  const newListItem = document.createElement('li');

  newListItem.innerText = newTask.value 
  uList.appendChild(newListItem)
  
  event.target.reset();
}









