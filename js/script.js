let icon1 = document.querySelector("header .child-icon1 ");
let navBar = document.querySelector("div.navbar");
let closeIcon = document.querySelector("div i.close")
console.log(icon1)
icon1.onclick = function() {
    navBar.classList.add("active");
}
closeIcon.onclick = function() {
    navBar.classList.remove("active")
}


window.onscroll = () => {
    navBar.classList.remove("active")
    if (window.scrollY > 100) {
        document.querySelector("header ").classList.add("active");
    } else {
        document.querySelector("header ").classList.remove("active");
    }
}

let icon2 = document.querySelector("header .child-icon2 i");

icon2.onclick = () => {
    icon2.classList.toggle("fa-sun");
    if (icon2.classList.contains("fa-sun")) {
        document.body.classList.add("active")
    } else {
        document.body.classList.remove("active")
    }
}


let smallImages1 = document.querySelectorAll(".small-image-1")

smallImages1.forEach(function(image) {
    image.onclick = () => {
        document.querySelector(".big-image-1").src = image.src
    }
})


let smallImages2 = document.querySelectorAll(".small-image-2")

smallImages2.forEach(function(images) {
    images.onclick = () => {
        document.querySelector(".big-image-2").src = images.getAttribute("src")
    }
})


let smallImages3 = document.querySelectorAll(".small-image-3")
smallImages3.forEach(function(images) {
    images.onclick = () => {
        document.querySelector(".big-image-3").src = images.src
    }
})





let myBox = document.querySelectorAll(".products .box")
let rightBtn = document.querySelector(".products .right-arrow")
let leftBtn = document.querySelector(".products .left-arrow")

myBox.forEach((item) => {
    let boxDimitions = item.getBoundingClientRect().width;
    rightBtn.addEventListener("click", () => {
        item.scrollLeft += boxDimitions
    })
    leftBtn.addEventListener("click", () => {
        item.scrollLeft -= boxDimitions
    })
})



let reviewBox = document.querySelectorAll(".review .box");
let preBtn = document.querySelectorAll(".review .left-arrow")
let nxtBtn = document.querySelectorAll(".review .right-arrow")


reviewBox.forEach((item, i) => {
    let dimintions = item.getBoundingClientRect().width;
    preBtn[i].onclick = () => {
        item.scrollLeft -= dimintions;
    }
    nxtBtn[i].onclick = () => {
        item.scrollLeft += dimintions;
    }
})



// countDown timer

let targetDate = new Date("Jan 31,2022 23:59:59").getTime();

let counter = setInterval(() => {

    let presentDate = new Date().getTime();
    let diffDate = targetDate - presentDate;

    let days = Math.floor(diffDate / (1000 * 60 * 60 * 24));
    let hours = Math.floor(diffDate % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    let mins = Math.floor(diffDate % (1000 * 60 * 60) / (1000 * 60));
    let seconds = Math.floor(diffDate % (1000 * 60) / 1000);

    document.querySelector(".deal .card .days h2").innerHTML = days < 10 ? `0${days}` : days;
    document.querySelector(".deal .card .hours h2").innerHTML = hours < 10 ? `0${hours}` : hours;
    document.querySelector(".deal .card .mins h2").innerHTML = mins < 10 ? `0${mins}` : mins;
    document.querySelector(".deal .card .seconds h2").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

    if (diffDate < 0) {
        clearInterval(counter);
    }
}, 1000)