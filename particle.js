class particle
{
    constructor(x,y)
    {
        this.x=x;
        this.y=y;
        this.radius=20
        this.color=random(0,255),random(0,255),random(0,255)
        this.body=Matter.Bodies.circle(this.x,this.y,10)
        Matter.World.add(world,this.body)

    }
    display()
    {
     var pos=this.body.position
     push()
     translate(pos.x,pos.y);
     ellipseMode(RADIUS)
     fill(255)
     circle(0,0,this.radius)
     pop()
    }
}