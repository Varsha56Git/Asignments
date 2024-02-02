const paragraph = document.querySelector("p");
console.log(paragraph);
paragraph.innerHTML = paragraph.innerHTML.split(" ").map((word)=>{
    return word.length > 8 ? `<span style="background: yellow">${word}</span>` : word;
}).join(" ");



