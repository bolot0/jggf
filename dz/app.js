const box = document.querySelector(".Box")
const block = document.querySelector(".block")

let xPos = 0;
let yPos = 0;

function move() {
  if(xPos < 340 && yPos == 0) {
    xPos += 16;
    block.style.left = `${xPos}px`;
    setTimeout(() => {
      move();
    }, 200);
  }  else if (xPos >= 340 && yPos < 340 ) {
    yPos += 16;
    block.style.top =  `${yPos}px`;
    setTimeout(() => {
      move();
    }, 200);
  }  else if (xPos > 0 && yPos >= 340) {
    xPos -= 16;
    block.style.left = `${xPos}px`;
    setTimeout(() => {
      move();
    }, 200)
  } else if (xPos == 0 && yPos > 0) {
    yPos -= 16;
    block.style.top = `${yPos}px`;
    setTimeout(() => {
      move();
    }, 200)
  } 
}
move()

const startCount = document.querySelector('.start');
const stopCount = document.querySelector('.stop');

let num = 0;
startCount.addEventListener("click", () =>{
    streetInterval= setInterval(interval,1000);
    function interval(){
    num++;
    console.log(`${num} second later`);
  } 
})

stopCount.addEventListener("click", ()=>{
    clearInterval(streetInterval)
    console.clear()
    num = 0;
})