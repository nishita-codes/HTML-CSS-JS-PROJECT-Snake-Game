console.log("welcome to my snake game");
let direction ={x: 0 , y:0};
let foodSound= new Audio('../music/food.mp3');
let gameOverSound = new Audio('../music/gameover.mp3');
let moveSound = new Audio('../music/move.mp3');
let musicSound = new Audio('../music/music.mp3');
let speed = 2;
let lastPaintTime = 0;
let snakeArr =[
    {x: 13, y:15}
]
food = {x: 6, y:7};

//Game Function
function main(ctime) {
    window.requestAnimationFrame(main);
    // console.log(ctime)
    if((ctime - lastPaintTime)/1000 < 1/speed){
        return;
    }
    lastPaintTime = ctime;
    gameEngine();
     
}
 function gameEngine(){
    // part1:updating the snake array
    
    // part2: render the snake and food
    // display the snake
    board.innerHTML = "";
    snakeArr.forEach((e , index)=>{
        snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;
       
        if(index==0){
            snakeElement.classList.add('head');
        }else{
            snakeElement.classList.add('snake');
        }
        board.appendChild(snakeElement);
    });
    // display the food
    foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food');
    board.appendChild(foodElement);

}




//Main logic starts here
window.requestAnimationFrame(main);
window.addEventListener('keydown',e =>{
   inputDir = {x: 0, y:1}; //start the game
   moveSound.play();
   switch(e.key){
    case "Arrowup":
        console.log("Arrowup");
        inputDir.x = 0;
        inputDir.y = -1;
        break;
    case "ArrowDown":
        console.log("ArrowDown");
        inputDir.x = 0;
        inputDir.y = 1;
        break;
    case "ArrowLeft":
        console.log("ArrowLeft");
        inputDir.x = -1;
        inputDir.y = 0;
        break;
    case "ArrowRight":
        console.log("ArrowRight");
        inputDir.x = 1;
        inputDir.y = 0;
        break;
    Default:
        break;

   }
});