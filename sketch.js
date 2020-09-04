var ground1,division1,division2,division3,division4,division5,division6,division7;
var particles=[];
var plinkos = [] ;
var j =0
var l,l2 
var p1

function setup() {
  createCanvas(600,800);
  //createSprite(400, 200, 50, 50);
  engine=Matter.Engine.create()
  world=engine.world
  ground1=new ground(400,650,800,10)
  division1=new ground(100,545,10,200)
  division2=new ground(200,545,10,200)
  division3=new ground(300,545,10,200)
  division4=new ground(400,545,10,200)
  division5=new ground(500,545,10,200)
  division6=new ground(10,545,10,200)
  division7=new ground(590,545,10,200)
 
  for(var j = 40;j<=width;j=j+50)
  {
    plinkos.push(new plinko(j,75));
  }
  for(var j = 40;j<=width-10;j=j+50)
  {
    plinkos.push(new plinko(j,205));
  }
  for(var j = 40;j<=width-10;j=j+50)
  {
    plinkos.push(new plinko(j,305));
  }
  l = plinkos.length
  


  l2=particles.lenght
  p1=new particle (0,0)


  Matter.Engine.run(engine);
}

function draw() {
  j=j+1
  background(0);  
  ground1.display()
  division1.display()
  division2.display()
  division3.display()
  division4.display()
  division5.display()
  division6.display()
  division7.display()
  p1.display()
  if (frameCount%10===0)
  {
    particles.push(new particle(random(width/2+20,width/2-20),10))
  }
  l2=particles.lenght

  for (var j =0; i<=particles.length;i++)
  {
    particles[i].display()

  }

  for (var i =0; i<=l;i++)
  {
    plinkos[i].display()

  }
  
  //plinkos[j].display()
  console.log(l)
  drawSprites();
  
}