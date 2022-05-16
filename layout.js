const root = document.getElementById("root");
const header = document.createElement("div");
const main = document.createElement("div");

// Header
header.className = "header";
main.className = "main";
root.append(header, main);

// Header__delete-btn
const deleteAllBtn = document.createElement("button");
const deleteAllBtnText = document.createTextNode("Delete all");
deleteAllBtn.append(deleteAllBtnText);
deleteAllBtn.className = "header__delete-Btn";

// Header__input
const input = document.createElement("input");
input.placeholder = "Enter your task...";
input.className = "header__input";

// Header__add-btn
const addBtn = document.createElement("button");
const addBtnText = document.createTextNode("Add");
addBtn.append(addBtnText);
addBtn.className = "header__add-btn";

header.append(deleteAllBtn, input, addBtn);

export { root, header, main, deleteAllBtn, input, addBtn};