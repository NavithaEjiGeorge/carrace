var canvas, backgroundImage;
var car1
var car2
var car3
var car4
var cars
var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var form, player, game;
var seconds = 0;
var minute;
var time;
function preload(){
  car1I = loadImage("car1.png")
  car2I = loadImage("car2.png")
  car3I = loadImage("car3.png")
  car4I = loadImage("car4.png")
  track = loadImage("track.jpg")
  ground = loadImage("ground.png")
  bg = loadImage("furious-racing.jpg")
  sound = loadSound("sound.wav")
}

function setup(){
  canvas = createCanvas(displayWidth-20,displayHeight-150);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  console.log(displayWidth)
console.log(displayHeight)
console.log(windowWidth)
console.log(windowHeight)
}

function draw(){
  background(bg)
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
    sound.play()
    timer()

  }
if(gameState===2){
  game.end()
}
}
function timer(){
  seconds = seconds+1/4;  
  if(seconds%60===0){
    minute = minute+1;
  }
  console.log(minute+":"+seconds)
}