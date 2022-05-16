const todosFromStorage = JSON.parse(localStorage.getItem("todos")); 
const tasksArray = [];
const date = new Date();
const localDate = date.toLocaleDateString();
let id = 0;

export { todosFromStorage, tasksArray, date, localDate, id };