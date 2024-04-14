import { createListItem } from "./modules/createListItem.js";
import { createInput } from "./modules/createInput.js";
import { createButtonDone } from "./modules/createButtonDone.js";
import { createButtonDelete } from "./modules/createButtonDelete.js";

const button = document.querySelector("button");
const inputMain = document.querySelector("input");
const divMain = document.querySelector(".main-background");
const ul = document.createElement("ul");
// let liObject = {
//     li: HTMLLIElement,
//     input: HTMLInputElement,
//     buttonDone: HTMLButtonElement,
//     buttonDelete: HTMLButtonElement
// };

function main(){
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

        // liObject.li = li;
        // liObject.input = input;
        // liObject.buttonDone = buttonDone;
        // liObject.buttonDelete = buttonDelete;

        let liObject = {
            li: li,
            input: input,
            buttonDone: buttonDone,
            buttonDelete: buttonDelete
        };

        localStorage.setItem("list", JSON.stringify(liObject));
    })
}

main();

document.addEventListener("DOMContentLoaded", function(){
    let obj = localStorage.getItem("list");
    let liObject = JSON.parse(obj);

    console.log(liObject);
    ul.append(liObject.li)
})