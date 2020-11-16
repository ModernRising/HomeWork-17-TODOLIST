const container = document.querySelector(".container");

class TodoState {
  constructor() {
    this.todoList = [];
  }

  addTodo(item) {
    const todo = {
      id: Math.random(),
      name: item,
      isCompleted: false
    };
    this.todoList.push(todo);
    return todo;
  }
  removeTodo(id) {
    this.todoList = this.todoList.filter((item) => item.id !== id);
  }
  checkTodo(id) {
    this.todoList = this.todoList.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          isCompleted: !item.isComplete
        };
      }
      return item;
    });
  }
}

class ToDoList {
  constructor(firstItemName) {
    this.listState = new TodoState();
    this.input = document.querySelector(".input");
    this.addButton = document.querySelector(".add");

    if (this.addButton) {
      this.addButton.addEventListener("click", () => {
        if (this.input.value) {
          this.createTodoItem(this.input.value);
        }
      });
    }

    if (firstItemName) {
      this.createTodoItem(firstItemName);
    }
  }

  createTodoItem(name) {
    const todo = this.listState.addTodo(name);
    let itemBox = document.createElement("div");
    itemBox.classList.add("item");
    itemBox.dataset.id = todo.id;

    let input = document.createElement("input");
    input.type = "checkbox";
    input.dataset.id = todo.id;
    input.checked = todo.isCompleted;

    let newLabel = document.createElement("label");
    newLabel.innerHTML = name;

    input.addEventListener("click", (event) => {
      const id = event.target.getAttribute("data-id");
      if (event.target.checked) {
        newLabel.style.textDecoration = "line-through";
      } else {
        newLabel.style.textDecoration = "none";
      }
    });

    let remove = document.createElement("span");
    remove.classList.add("material-icons");
    remove.innerHTML = "close";
    remove.dataset.id = todo.id;
    remove.addEventListener("click", (event) => {
      let id = event.target.getAttribute("data-id");
      if (id) {
        this.removeTodoItem(id);
      }
    });

    container.appendChild(itemBox);
    itemBox.appendChild(input);
    itemBox.appendChild(newLabel);
    itemBox.appendChild(remove);
    this.input.value = "";
  }

  removeTodoItem(id) {
    this.listState.removeTodo(id);
    const removeItem = container.querySelector(`div[data-id="${id}"]`);
    removeItem.parentNode.removeChild(removeItem);
  }
}

let List = new ToDoList("My first ToDoList");


