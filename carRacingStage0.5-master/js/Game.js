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
      var con = await database.ref('playerCount').once("value")
      if(con.exists()){
        playerCount=con.val()
        player.getCount();
      }
      form = new Form()
      form.display();
    }
  }
  play(){

  form.hide();
  textSize(38)
  fill("BLACK")
  text("GAME STARTED",50,100)
  Player.getinfo()
  if(allplayers!==undefined){
    
  var place = 100
  for(var ply in allplayers){

    if(ply==="player"+player.index){
      fill("red") 
    }
      else{
      fill ("blue")
      }

  place = place + 20
  textSize(15)
  text(allplayers[ply].name+":"+allplayers[ply].distance,150,place)
  }
}
   if(keyDown("UP")&&player.index!==null){
     player.distance+=10
     player.update();
   }

  }

}
