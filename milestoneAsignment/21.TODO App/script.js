const input = document.querySelector("#input");
const button = document.querySelector("#btn");
const listContainer = document.querySelector(".listContainer");
console.log(listContainer)

button.addEventListener('click', addTodo);

function addTodo(){
    // alert(input.value)
    let li = document.createElement("li");
    li.innerText = input.value;
    listContainer.appendChild(li);
}
