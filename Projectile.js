class Projectile
{
    constructor(x,y)
    {
        var options = {
            'restitution':0.5,
            'friction':1.0,
            'density':1.5
        }
        this.body = Bodies.circle(x, y, 25, options);
        this.radius = 50;
        
        World.add(world, this.body);
      }
      display()
      {
        var pos =this.body.position;
        var ang =this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(ang);
        fill("blue");
        ellipse(0, 0, this.radius, this.radius);
        pop();
      } 
}