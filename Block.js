class blocks {
  constructor(x,y) {
    var gravity = {
      'isStatic': false,
    }
    this.body = Bodies.rectangle(x,y,25,30,gravity);
    this.visibility = 255;
    this.image = loadImage("block.png");
    World.add(world, this.body);
  }
  display(){
    if(this.body.speed < 3){
      var pos =this.body.position;
      imageMode(CENTER);
      strokeWeight(3);
      image(this.image,pos.x, pos.y,30,35);
     }
     else{
       World.remove(world, this.body);
       var pos =this.body.position;
       push();
       this.visibility = this.visibility - 25;
       tint(255,this.visibility);
       image(this.image,pos.x, pos.y,30,35);
       pop();
     }
  }
  score() {
    if(this.visibility < 0 && this.visibility >= -105) {
      score++;
    }
  }
}