//Moving Animation Event
const card = document.querySelector(".card");
const container = document.querySelector(".container");

//Animating the image
const car = document.querySelector(".car");


//Moving Animation Event
container.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 15;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 15;

    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg`
});

//Animate in
container.addEventListener("mouseenter", (e) => {
    card.style.transition = "none";
//popout
car.style.transform = "translateZ(200px) rotateZ(30deg)";
});

//Animate out
container.addEventListener("mouseleave", (e) => {
    card.style.transition = "all 0.5s ease";
    card.style.transform=`rotateY(0deg) rotateX(0deg)`;  
//popback
    car.style.transform ="translateZ(0px) rotateZ(0deg)";
});