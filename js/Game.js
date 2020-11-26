class Game {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
    car1=createSprite(100,200,20,20)
    car2=createSprite(300,200,20,20)
    car3=createSprite(500,200,20,20)
    car4=createSprite(700,200,20,20)
    car1.addImage(car1I)
    car2.addImage(car2I)
    car3.addImage(car3I)
    car4.addImage(car4I)

    cars=[car1,car2,car3,car4]
  }

  play(){
    form.hide();
   // textSize(30);
  //  text("Game Start", 120, 100)
    Player.getPlayerInfo();
    var position = camera.position.y-200;
    
    if(allPlayers !== undefined){
    //  var display_position = 130;
    var index = 0;
    var x=180;
    var y;
    background("black")
    image(track,0,-displayHeight*4,displayWidth,displayHeight*5)
      for(var plr in allPlayers){
        x=x+200
        y=displayHeight-allPlayers[plr].distance
        index=index+1;
        cars[index-1].x=x
        cars[index-1].y=y
        if(index==player.index){
       //   cars[index-1].shapeColor="red";
          fill("red")
          ellipse(x,y,80,80)

          camera.position.x=displayWidth/2
          camera.position.y=cars[index-1].y;

        }
        textSize(20)
        textAlign(CENTER)
        fill("green")
        position = position+50
        text(allPlayers[plr].name,cars[index-1].x,cars[index-1].y+70)
        fill("black")
        strokeWeight(2)
        stroke("black")
        text(allPlayers[plr].name.slice(0,3).toUpperCase() +"...." + "    :  " +  allPlayers[plr].distance,130,position)
   }
    }
    if(player.distance>3800){
      gameState=2;
    }
console.log(player.distance)
    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=50
      player.update();
    }
    drawSprites()
  }
  end(){
  console.log("gameOver")
  }
}
