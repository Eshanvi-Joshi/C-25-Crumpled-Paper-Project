class Paper{
constructor(x,y,r){

    this.image = loadImage("paper.png")
    var options={
        isStatic:false,
        restitution:0.3,
        friction:0,
        density:0.62
}

this.body = Bodies.circle(x, y, r, options);
this.r = r
World.add(world,this.body);
}

display(){
 
    var pos  = this.body.position;
    imageMode(CENTER)
    image(this.image, pos.x, pos.y, this.r*2, this.r*2);
   
}
}
