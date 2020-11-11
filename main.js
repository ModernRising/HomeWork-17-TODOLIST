const container = document.querySelector(".container")
let inputValue = document.querySelector(".input")
const add = document.querySelector('.add');

class ToDoItem {
    constructor (name) {
        this.createItem(name);
    };
    createItem(name) {
        let itemBox = document.createElement("div");
        itemBox.classList.add("item");

        let input = document.createElement("input")
        input.type = "checkbox"
        input.id = name;

        let newLabel = document.createElement("label")
        newLabel.innerHTML = name;

        input.addEventListener("click", () => {
            if(input.checked == true) {
                newLabel.style.textDecoration = "line-through";
            } else {
                newLabel.style.textDecoration = "none";
            }
        }) 
        
        let remove = document.createElement('span');
    	remove.classList.add('material-icons');
    	remove.innerHTML = "close";
    	remove.addEventListener('click', () => this.remove(itemBox));

    	container.appendChild(itemBox);
        itemBox.appendChild(input);
        itemBox.appendChild(newLabel);
        itemBox.appendChild(remove);

    }

        remove(itemBox){
            itemBox.parentNode.removeChild(itemBox);
        }
    }

    function check(){
        if(inputValue.value != ""){
            new ToDoItem(inputValue.value);
            inputValue.value = "";
        }
    }
    
    add.addEventListener('click', check);

    let ToDoList = new ToDoItem("My first ToDoList")


