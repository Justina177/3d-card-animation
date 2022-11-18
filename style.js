//Moving Animation Event
const card = document.querySelector(".card");
const container = document.querySelector(".container");

//Moving Animation Event
container.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 20;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 20;

    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg`
})