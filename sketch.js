var database;
var game,gameState = 0;
var player,PlayerCount;
var form;


function setup(){
    database = firebase.database();
    createCanvas(700,700);
   game = new Game();
   game.getState();
   game.start();
    
}

function draw(){
    background("white");

    drawSprites();
}


