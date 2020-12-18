class Particle {
    constructor(x, y) {
      var options = {
          restitution:0.4
      }
      this.body = Bodies.circle(x, y, 10, options);
      this.radius = 10;
      
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle)
      ellipseMode(CENTER);
      fill(color(random(0, 255), random(0, 255), random(0, 255)))
      ellipse(0, 0, 20, 20);
      pop();
    }
  };
