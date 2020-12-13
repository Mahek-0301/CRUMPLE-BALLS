class Paper{
    constructor(x,y,r){
     var options = {
         isStatic : false,
         restitution : 0.3,
         friction : 0.5,
         density :3.6
     }

     this.r = r;
     this.image =loadImage("paper.png");

     this.body = Bodies.circle(x,y,(this.r-20)/2,options);
     World.add(world,this.body);
    }

    display(){

        var pos= this.body.position;
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        fill(255,0,255)
        image(this.image,0,0,this.r,this.r)
        pop();
    }
}