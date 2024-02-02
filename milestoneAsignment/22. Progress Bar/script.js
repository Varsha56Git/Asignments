const progressBarContent = document.querySelector(".progressBarContent");

const article = document.querySelector("article");

const animateProgressBar = () => {
    let scrollDistance = -article.getBoundingClientRect().top;
    let progressWidth = (scrollDistance / article.getBoundingClientRect().height) * 100;
    let value = Math.floor(progressWidth);
    progressBarContent.style.width = value + "%";
    console.log(value)

    if(value < 0){
        progressBarContent.style.width = "0%"
    }else if(value >= 70){
        progressBarContent.style.width = "100%"
    }
}

window.addEventListener("scroll", animateProgressBar);
