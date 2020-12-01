class Bob {
    constructor(x,y) {
      var options = {
          isStatic: true,
          restitution: 0.3,
          friction: 0.5,
          density: 1.2
      }
      this.body = Bodies.circle(x,y,80,options);
      World.add(world,this.body)
    
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      strokeWeight(1)
      stroke("black")
      fill("rgb(255, 35, 240)");
      ellipse(pos.x, pos.y);
    }
  };