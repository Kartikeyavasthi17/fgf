class Stone{
constructor(x,y,radius)
{
    var options={
    isStatic:false,
    restitution:0,
    friction:0.1,
    density:0.2,   
    }

    this.body =Matter.Bodies.circle(x,y,(radius-20)/2,options);
    this.radius =radius;
    this.image =loadImage("stone.png")
    World.add(world, this.body);

}

display()
{

    var pos =this.body.position;
    push();
    translate(pos.x,pos.y);

      imageMode(CENTER);
     image(this.image, 0, 0, this.radius, this.radius);
      pop();
}
}