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

//Game Function
function main(ctime) {
    window.requestAnimationFrame(main);
    console.log(ctime)
    if((ctime - lastPaintTime)/1000 < 1/speed){
        return;
    }
    lastPaintTime = ctime;
    gameEngine();
     
}
 function gameEngine(){
    // part1:updating the snake array

    // part2: render the snake and food
}













//Main logic starts here
window.requestAnimationFrame(main);