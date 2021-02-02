var path,mainCyclist;

var pathImg,mainRacerImgC,mainRacerImgT, pinkRacerImgC, pinkRacerImgT, yellowRacerImgC, yellowRacerImgT, redRacerImgC, redRacerImgT;

var pinkCG, yellowCG, redCG;

var cycleBell;

var END =0;
var PLAY =1;
var gameState = PLAY;

var distance=0;

function preload(){
  pathImg = loadImage("images/Road.png")
  
  mainRacerImgC = loadAnimation("images/mainPlayer1.png","images/mainPlayer2.png");
  mainRacerImgT= loadAnimation("images/mainPlayer3.png");
  
  pinkRacerImgC = loadAnimation("opponent1.png","opponent2.png");
  pinkRacerImgT= loadAnimation("opponent3.png");
  
  yellowRacerImgC = loadAnimation("opponent4.png","opponent5.png");
  yellowRacerImgT= loadAnimation("opponent6.png");
  
  redRacerImgC = loadAnimation("opponent7.png","opponent8.png");
  redRacerImgT= loadAnimation("opponent9.png");
  
  cycleBell = loadSound("bell.mp3");
}

function setup(){

  createCanvas(500,300);

  // Moving background
  path=createSprite(100,150);
  path.addImage(pathImg);
  path.velocityX = -5;

  //creating boy running
  mainCyclist  = createSprite(70,150,20,20);
  mainCyclist.addAnimation("SahilRunning",mainRacerImg1);
  mainCyclist.scale=0.07;
  
  pinkCG = createGroup();
  yellowCG = createGroup();
  redCG = createGroup();
}

function draw() {
  background(0);
  
  drawSprites();
  textSize(20);
  fill(255);
  text("Distance: "+ distance,350,30);
  
  if(gameState===PLAY){
  
   mainCyclist.y = World.mouseY;
  
   edges= createEdgeSprites();
   mainCyclist .collide(edges);
  
  //code to reset the background
  if(path.x < 0 ){
    path.x = width/2;
  }
  var selectOpp = Math.round(random(1, 3))
  if(World.frameCount % 150 === 0) {
    if (selectOpp === 1) {
      pinkcyclist();
    }
    if (selectOpp === 2) {
      redcyclist();
    }
    if (selectOpp === 3) {
      yellowcyclist();
    }
  }
  }
}

function pinkcyclist() {
  player1 = createSprite(1100, Math.round(random(50, 250)))  
  player1.scale = 0.06;
  player1.addAnimation("oppPlayer1", pinkRacerImgC)
  player1.setLifetime=170;
  pinkCG.add(player1)
}

function redcyclist() {
  player2 = createSprite(1100, Math.round(random(50, 250)))  
  player2.scale = 0.06;
  player2.addAnimation("oppPlayer2", redRacerImgC)
  player2.setLifetime=170;
  redCG.add(player2)
}

function yellowcyclist() {
  player3 = createSprite(1100, Math.round(random(50, 250)))  
  player3.scale = 0.06;
  player3.addAnimation("oppPlayer1", PinkRacerImgC)
  player3.setLifetime=170;
  yellowCG.add(player3)
}