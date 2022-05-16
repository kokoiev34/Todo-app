import { main } from "layout.js";
import { localDate } from "variables.js";

const addTodo = (todoText, isChecked, todoId) => {
    const task = document.createElement("div");
    const taskCheckbox = document.createElement("checkbox");
    const taskCheckboxText = document.createTextNode("✔");
    const taskText = document.createElement("p");
    const taskTextTemplate = document.createTextNode(todoText);
    const taskRightPanel = document.createElement("div");
    const taskDeleteBtn = document.createElement("button");
    const taskDeleteBtnText = document.createTextNode("Delete");
    const taskDate = document.createElement("date");
    const taskLocalDate = document.createTextNode(localDate);

    task.className = isChecked ? "task task-completed": "task";
    taskCheckbox.className = isChecked ? "task__checkbox " : "task__checkbox";
    taskText.className = isChecked ? "task__text task__text-completed" : "task__text";
    taskRightPanel.className = "task__right-panel";
    taskDeleteBtn.className = "task__delete-btn";
    taskDate.className = "task__date";

    taskDate.dataset.todoId = todoId;
    taskDeleteBtn.dataset.todoId = todoId;
    taskDeleteBtn.dataset.type = "delete";
    taskCheckbox.dataset.todoId = todoId;

    main.append(task);
    taskCheckbox.append(taskCheckboxText);
    task.append(taskCheckbox);
    taskText.append(taskTextTemplate);
    task.append(taskText);  
    task.append(taskRightPanel);
    taskDeleteBtn.append(taskDeleteBtnText);
    taskRightPanel.append(taskDeleteBtn);
    taskDate.append(taskLocalDate);
    taskRightPanel.append(taskDate);

    return task;
}

export { addTodo };
