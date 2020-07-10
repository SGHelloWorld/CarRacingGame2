var hypnoticBall, database;
var position;


function setup(){
  database = firebase.database();
  game=new game();
  game.getstate();
  game.start();
}

function draw(){
  background("white");
}

