class Target
{
    constructor(x,y)
    {
        var options = {
            'restitution':0.8,
            'friction':2.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, 50, 50, options);
        this.width = 50;
        this.height = 50;
        this.Visiblity = 0;
        
        World.add(world, this.body);
      }
      display()
      {
        var pos =this.body.position;
        var ang =this.body.angle;

        if(this.body.speed < 7)
        {
          push();
          translate(pos.x,pos.y);
          rotate(ang);
          rectMode(CENTER);
          fill("red");
          rect(0, 0, this.width, this.height);
          pop();
        }
        else
        {
          World.remove(world, this.body);
          this.Visiblity = this.Visiblity + 5;
          console.log(this.Visiblity);
        }
      }

      score()
      {
        if (this.Visiblity > 5 && this.Visiblity < 1010)
        {
          score+=1;
        }
      }
};