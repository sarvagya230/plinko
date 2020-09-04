class plinko
{
    constructor(x,y)
    {
        this.x=x;
        this.y=y;
        this.radius=10
        
        this.body=Matter.Bodies.circle(this.x,this.y,this.radius,{isStatic:true})
        Matter.World.add(world,this.body)
    }
    display()
    {
        var pos=this.body.position
        push()
        translate(pos.x,pos.y)
        ellipseMode(RADIUS)
        fill(255)
        circle(0,0,this.radius)
        pop()
    }
}