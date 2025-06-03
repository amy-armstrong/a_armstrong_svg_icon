console.log("Javascript is running")




const blueRaspberry = document.querySelector("#blueRaspberry");
const dragonFruit = document.querySelector("#dragonFruit");
const guava = document.querySelector("#guava");
const lemonLime = document.querySelector("#lemonLime");
const mangoChili = document.querySelector("#mangoChili");
const strawberryKiwi = document.querySelector("#strawberryKiwi");


function logTheId() {
   console.log(this.id)
}






blueRaspberry.addEventListener("click", logTheId);
dragonFruit.addEventListener("click", logTheId);
guava.addEventListener("click", logTheId);
lemonLime.addEventListener("click", logTheId);
mangoChili.addEventListener("click", logTheId);
strawberryKiwi.addEventListener("click", logTheId);
