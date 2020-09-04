class ground{
    constructor(x,y,width,height)
    {
        this.x=x
        this.y=y
        this.width=width
        this.height=height
        this.body=Matter.Bodies.rectangle(this.x,this.y,this.width,this.height,{isStatic:true})
        Matter.World.add(world,this.body)
    }
    display()
    {
    var pos = this.body.position
    push()
    translate(pos.x,pos.y)
    rectMode(CENTER)
    fill(255)
    rect(0,0,this.width,this.height)
    pop()
    }
}