import { createListItem } from "./modules/createListItem.js";
import { createInput } from "./modules/createInput.js";
import { createButtonDone } from "./modules/createButtonDone.js";
import { createButtonDelete } from "./modules/createButtonDelete.js";

const button = document.querySelector("button");
const inputMain = document.querySelector("input");
const divMain = document.querySelector(".main-background");
const ul = document.createElement("ul");

button.disabled = true;
inputMain.addEventListener("input", function(){
    button.disabled = false;
})

button.addEventListener("click", function(event) {
    event.preventDefault();

    let li = createListItem();
    let input = createInput();
    let buttonDone = createButtonDone();
    let buttonDelete = createButtonDelete();

    button.disabled = true;
    inputMain.addEventListener("input", function(){
        button.disabled = false;
    })

    if (!inputMain.value.trim()) {
        alert("Нужно ввести название дела");
    }
    else{    
        divMain.append(ul);
        ul.append(li);
        li.append(input);
        li.append(buttonDone);
        li.append(buttonDelete);
        input.value = inputMain.value.trim();    
    }

    inputMain.value = null;

    buttonDone.addEventListener("click", function(){
        if (li.style.backgroundColor == "lightgreen") {
            buttonDone.innerText = "Не готово";
            li.style.backgroundColor = "rgb(192, 209, 224)";
        }
        else{
            li.style.backgroundColor = "lightgreen";
            buttonDone.innerText = "Готово";
        }
    })

    buttonDelete.addEventListener("click", function(){
        if(confirm("Вы уверены?")){
            li.remove();             
        }
    })

    localStorage.setItem("list", JSON.stringify(input.value));


})
document.addEventListener("DOMContentLoaded", function(){
    localStorage.getItem("list", JSON.parse(input.value));

})