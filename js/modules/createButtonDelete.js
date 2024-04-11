export function createButtonDelete(){
    const buttonDelete = document.createElement("button");
    buttonDelete.innerHTML = "Удалить";
    buttonDelete.classList.add("button-delete");
    
    return buttonDelete;
}