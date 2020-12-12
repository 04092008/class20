var rect1,rect2;

function setup(){
  createCanvas (1200,800) 
  rect1=createSprite(400,200,40,70)
  rect1.shapeColor="pink"
  rect2=createSprite(200,300,50,80)
  rect2.shapeColor="pink"
  rect1.debug=true;
  rect2.debug=true;
}
function draw()  {
background("grey")
rect2.y=mouseY;
rect2.x=mouseX;
if(rect2.x-rect1.x<rect2.width/2+rect1.width/2&&
  rect1.x-rect2.x<rect2.width/2+rect1.width/2&&
  rect2.y-rect1.y<rect2.height/2+rect1.height/2&&
  rect1.y-rect2.y<rect2.height/2+rect1.height/2){
  rect2.shapeColor="red"
  rect1.shapeColor="red"
}
else{
  rect1.shapeColor="pink"
  rect2.shapeColor="pink"
}
drawSprites();
}
