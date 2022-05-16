import { root, header, main, deleteAllBtn, input, addBtn} from "./layout.js";
import { todosFromStorage, tasksArray } from "./variables.js";
import { addTodo } from "./addTodo.js"

const TodoConstructor = function (todoText, todoId, isChecked) {
    this.todoText = todoText;
    this.todoId = todoId;
    this.isChecked = isChecked;
}

// Checking LocalStorage at the start 
if (todosFromStorage.length){
    todosFromStorage.forEach(task => {
        main.append(addTodo(task.todoText, task.isChecked, task.todoId));
        tasksArray.push(task);
    });
}

// Events
// Creating Todo task with add button
addBtn.addEventListener("click",() => {
    if ( !input.value ){
        return;
    }
    const todoId = Date.now();
    const todo = new TodoConstructor(input.value, todoId, false);

    main.append(addTodo(input.value, false, todoId));
    tasksArray.push(todo);
    localStorage.setItem("todos", JSON.stringify(tasksArray));
    input.value = "";
});

// Changing Todo task status from uncompleted to completed 
main.addEventListener("click", (event) =>{
    if (event.target === event.currentTarget) return;

    if(event.target === event.target.closest('.task').firstChild){
        const selectedTodo = tasksArray.find(todo => +todo.todoId === +event.target.dataset.todoId);
        selectedTodo.isChecked = !selectedTodo.isChecked;
        event.target.parentElement.classList.toggle("task-completed");
        event.target.nextSibling.classList.toggle("task__text-completed");
        localStorage.setItem("todos", JSON.stringify(tasksArray));
    }
      
    if (event.target.dataset.type === "delete"){
        let targetId = event.target.dataset.todoId;

        tasksArray.forEach(function (todo, i){
            if(+todo.todoId === +targetId){
            tasksArray.splice(i, 1) 
            }               
        });

        localStorage.setItem("todos", JSON.stringify(tasksArray));
        event.target.closest('.task').remove();
    }        
})

// Deleting all tasks with deleteAll button
header.addEventListener("click", (event) => {
    if (event.target === deleteAllBtn){
        main.innerHTML = "";
        tasksArray.splice(0, tasksArray.length);
        localStorage.setItem("todos",JSON.stringify(tasksArray));
    }
})


