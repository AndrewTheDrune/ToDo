const button = document.querySelector("button");
const inputMain = document.querySelector("input");
const divMain = document.querySelector(".main-background");
const ul = document.createElement("ul");
//let switchState = false;


function createListItem(){
    const li = document.createElement("li");
    li.classList.add("li-task");
    return li;
}

function createInput(){
    const input = document.createElement("input");        
    input.classList.add("input");
    return input;
}

function createButtonDone(){
    const buttonDone = document.createElement("button");
    buttonDone.innerHTML = "Не готово";        
    buttonDone.classList.add("button-done");
    return buttonDone;
}

function createButtonDelete(){
    const buttonDelete = document.createElement("button");
    buttonDelete.innerHTML = "Удалить";
    buttonDelete.classList.add("button-delete");
    
    return buttonDelete;
}

button.addEventListener("click", function(event) {
    event.preventDefault();

    let li = createListItem();
    let input = createInput();
    let buttonDone = createButtonDone();
    let buttonDelete = createButtonDelete();

    divMain.append(ul);
    ul.append(li);
    li.append(input);
    li.append(buttonDone);
    li.append(buttonDelete);
    input.value = inputMain.value;    
    
    buttonDone.addEventListener("click", function(){
        if (switchState) {
            li.style.backgroundColor = "rgb(192, 209, 224)"; 
            buttonDone.innerText = "Не готово";
            switchState = false;
        }
        else{
            li.style.backgroundColor = "lightgreen"; 
            buttonDone.innerText = "Готово";
            switchState = true;
        }
    })
    
    // buttonDone.addEventListener("click", function(){
    //     if (switchState) {
    //         li.style.backgroundColor = "rgb(192, 209, 224)"; 
    //         buttonDone.innerText = "Не готово";
    //         switchState = false;
    //     }
    //     else{
    //         li.style.backgroundColor = "lightgreen"; 
    //         buttonDone.innerText = "Готово";
    //         switchState = true;
    //     }
    // })

    buttonDelete.addEventListener("click", function(){
        li.remove(); 
    })
})



document.addEventListener("DOMContentLoaded", function(){

})