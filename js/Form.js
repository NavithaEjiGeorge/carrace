class Form {

  constructor() {
    this.input = createInput("").attribute("placeholder","Enter your NAME");
    this.button = createButton('PLAY');
    this.greeting = createElement('h2');
    this.title = createElement('h2')
    this.reset = createButton('RESET')
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

  display(){
    this.title.html("FURIOUS CAR RACING");
    this.title.position(displayWidth/2-450,displayHeight/2-440);
    this.title.style('color',"blue")
    this.title.style('font-size',"80px")
    this.input.position(displayWidth/2-200,displayHeight/2-100);
    this.input.style('font-size',"30px")
    this.input.style('color',"violet")
    this.button.position(displayWidth/2-100,displayHeight/2);
    this.button.style('background-color',"lightgreen")
    this.button.style('font-size',"30px")
    this.button.size(160)
    this.reset.position(displayWidth/2-600,50)
    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2-300,displayHeight/2-200);
      this.greeting.style('font-size',"100px")
      this.greeting.style('color',"red")
    });
this.reset.mousePressed(()=>{
  game.update(0)
  player.updateCount(0)
  database.ref("/").update({
    players:null
  })
})
  }
}
