export function createButtonDone(){
    const buttonDone = document.createElement("button");
    buttonDone.innerHTML = "Не готово";        
    buttonDone.classList.add("button-done");
    return buttonDone;
}