let addButton = document.getElementById("addButton");
let removeButton = document.getElementById("removeButton");
let searchButton = document.getElementById("searchButton");
let editButton = document.getElementById("editButton");
let taskList = document.getElementById("taskList");
let taskArray = [];

const handleChangeAdd = () => {
  let task = prompt("Qual a tarefa a adicionar?");
  taskArray.push(task);
  console.log(taskArray);

  while (taskList.hasChildNodes()) {
    taskList.removeChild(taskList.firstChild);
  }

  taskArray.forEach((item) => {
    let tagLiNewTask = document.createElement("li");
    tagLiNewTask.innerText = item;
    taskList.appendChild(tagLiNewTask);
  });
};

const handleChangeRemove = () => {
  if (taskList.hasChildNodes()) {
    let removeTaskIndex = parseInt(
      prompt("Qual número da tarefa gostaria de remover?")
    );
    if (removeTaskIndex <= taskArray.length) {
      taskList.removeChild(taskList.children[removeTaskIndex - 1]);
      taskArray.splice(removeTaskIndex - 1, 1);
      console.log(taskArray);
    } else {
      alert("Digite um número válido!");
    }
  } else {
    alert("Não há o que remover!");
  }
};

const handleChangeSearch = () => {
  /* if (taskList.hasChildNodes()) {
    let removeTaskIndex = parseInt(
      prompt("Qual número da tarefa gostaria de remover?")
    );
    if (removeTaskIndex <= taskArray.length) {
      taskList.removeChild(taskList.children[removeTaskIndex - 1]);
      taskArray.splice(removeTaskIndex - 1, 1);
      console.log(taskArray);
    } else {
      alert("Digite um número válido!");
    }
  } else {
    alert("Não há o que remover!");
  } */
};

const handleChangeEdit = () => {
  if (taskList.hasChildNodes()) {
    let editTaskIndex = parseInt(
      prompt("Qual número da tarefa gostaria de editar?")
    );
    let editTaskText = prompt("Digite o novo texto:");
    if (editTaskIndex <= taskArray.length) {
      taskList.removeChild(taskList.children[editTaskIndex - 1]);
      taskArray.splice(editTaskIndex - 1, 1, editTaskText);
      console.log(taskArray);

      while (taskList.hasChildNodes()) {
        taskList.removeChild(taskList.firstChild);
      }

      taskArray.forEach((item) => {
        let tagLiNewTask = document.createElement("li");
        tagLiNewTask.innerText = item;
        taskList.appendChild(tagLiNewTask);
      });
    } else {
      alert("Digite um número válido!");
    }
  } else {
    alert("Não há o que editar!");
  }
};

addButton.addEventListener("click", handleChangeAdd);
removeButton.addEventListener("click", handleChangeRemove);
searchButton.addEventListener("click", handleChangeSearch);
editButton.addEventListener("click", handleChangeEdit);
