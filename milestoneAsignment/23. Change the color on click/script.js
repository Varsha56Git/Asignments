const colors = [
    "red",
    "blue",
    "yellow",
    "grey",
    "pink",
    "cyan",
    "green",
    "orange",
    "darkblue",
     "brown"
];

const button = document.getElementById("btn")
button.addEventListener("click", colorChanger);

function colorChanger(){
    let value = Math.floor(Math.random()*10)
    document.body.style.background = colors[value]
}


















