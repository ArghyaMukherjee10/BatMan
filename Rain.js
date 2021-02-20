class Drop {
    constructor(x,y,radius) {
      var options = {
          density:1,
          friction:0.1,
          restitution:0.1
      }
      this.radius = radius;
      this.rain = Bodies.rectangle(x,y,this.radius,this.radius,options);
      World.add(world, this.rain);
    }
    display(){
     ellipseMode(CENTER);
     fill("blue");
     ellipse(0,0, this.radius*2, this.radius*2);
    }
    rainPosition(){
      if (this.rain.position>height){
        Matter.Body.setPosition(this.rain,{x:random(0,400), y:random(0,400)})
    }
    }
  }