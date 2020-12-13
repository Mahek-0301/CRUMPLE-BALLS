class Dustbin {
    constructor(x,y){
        this.dustbinwidth=200;
        this.dustbinheight=100;
        this.wallthickness=20;
        this.image =loadImage("dustbingreen.png");

        this.bottombody = Bodies.rectangle(x,y,this.dustbinwidth,this.wallthickness,{isStatic:true});
        this.leftwallbody = Bodies.rectangle(x-this.dustbinwidth/2,y-this.dustbinheight/2,this.wallthickness,this.dustbinheight,{isStatic:true});
        this.rightwallbody = Bodies.rectangle(x+this.dustbinwidth/2,y-this.dustbinheight/2,this.wallthickness,this.dustbinheight,{isStatic:true});
        World.add(world,this.bottombody);
        World.add(world,this.leftwallbody);
        World.add(world,this.rightwallbody);
    }

    display(){
        var posbottom = this.bottombody.position;
        var posleft = this.leftwallbody.position;
        var posright = this.rightwallbody.position;

        push();
        translate(posleft.x,posleft.y)
        rectMode(CENTER);
        fill(255);
        //rect(0,0,this.wallthickness,this.dustbinheight);
        pop();
        
        push();
        translate(posright.x,posright.y)
        rectMode(CENTER);
        fill(255);
        //rect(0,0,this.wallthickness,this.dustbinheight);
        pop();

        push();
        translate(posbottom.x,posbottom.y + 10)
        imageMode(CENTER);
        fill(255);
        image(this.image,0,-this.dustbinheight/2,this.dustbinwidth,this.dustbinheight);
        pop();

    }

}