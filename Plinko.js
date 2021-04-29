class Plinko{
    constructor(x,y){

    
    var options = {
        restitution:0.4,
        friction : 0,
        isStatic:true
    }
    this.r = 10;
    this.body = Bodies.circle(x,y,this.r,optios)
    world.add(World,this.body);
}
display(){
    var pos = this.body.postion;
    var angle = this.body.angle
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    imageMode(CENTER);
noStroke();
fill("red");
ellipseMode(RADIUS);
ellipse(0,0,this.r,this.r);
pop();

}
}