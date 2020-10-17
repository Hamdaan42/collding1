var fixedrect,movingrect,rect1,rect2,rect3;


function setup() {

  createCanvas(800,400);
  fixedrect = createSprite(200,200,40,40);
  movingrect = createSprite(300,200,40,40);
  rect1 = createSprite(100,100,40,40);
  rect2 = createSprite(300,100,40,40);
  rect3 = createSprite(400,100,40,40);
  

  fixedrect.shapeColor = "green";
  movingrect.shapeColor = "green";
  rect1.shapeColor = "green";
  rect3.shapeColor = "green";
  rect2.shapeColor = "green";

 
}

function draw() {
  background("black"); 
  movingrect.x = World.mouseX 
  movingrect.y = World.mouseY 
  if(iftouching(movingrect,rect1)){
   movingrect.shapeColor = "blue"
   rect1.shapeColor = "blue"
  }
  else {
 movingrect.shapeColor = "green"
    rect1.shapeColor = "green"
  }
  drawSprites();
}
function iftouching(object1,object2){
if(object1.x - object2.x<object2.width/2+object1.width/2&&
  object2.x - object1.x <object2.width/2+object1.width/2&&
   object2.y - object1.y <object2.height/2+object1.height/2&&
    object1.y - object2.y <object2.height/2+object1.height/2
  ){
   
    return true 
  }
  else {
   
   return false 
  }

}