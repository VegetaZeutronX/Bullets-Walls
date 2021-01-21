

var bullet,wall;


var speed, weight; 

var thickness

function setup() {
  createCanvas(1600, 400);


	speed=random(55,90)
	weight=random(400,1500)


	bullet=createSprite(50, 200, 70,20);   

	bullet.velocityX = speed;

	bullet.shapeColor="white";
    
    thickness = random(22,83)
	speed=random(223,321)
	weight=random(30,52)
  
  	wall=createSprite(1200,200, thickness, height/2)
  	wall.shapeColor=color(80,80,80)
}


function draw() {
  background(0);

  if(wall.x-bullet.x < (bullet.width+wall.width)/2)
  {
  	bullet.velocityX=0;
  	var damage=0.5 * weight* speed* speed/(thickness^3);
	if(damage>10)
	{
		wall.shapeColor="red";
	}

	if(damage<10)
	{
		wall.shapeColor="green";
	}
  drawSprites();
 
}

}
