const listItems = [
    "Learn HTML",
    "Learn CSS",
    "Learn JavaScript",
    "Learn Node JS",
    "Learn Mongo-DB",
    "Learn React",
];

const button = document.querySelector("button");
const ul = document.querySelector("ul");
let indexOfItems = 0;

button.addEventListener("click", addItems);

function addItems(){
    if(indexOfItems < listItems.length){
        let li = document.createElement("li")
        li.innerText = listItems[indexOfItems]
        ul.appendChild(li)
        indexOfItems++;
    }else if(indexOfItems === listItems.length){
        button.disabled = true;
        alert("all items have been added");
    }
}
