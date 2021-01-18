class Stone{
    constructor(x,y,r)
    {
        var options={

        isStatic:false,
        //restitution:0.3,
        friction:1,
        density:0.8,
    }

    this.x=x;
    this.y=y;
    this.r=r;
    this.image= loadImage("Plucking mangoes/stone.png");
    this.body=Bodies.circle(x,y,r,options)
    World.add(myworld,this.body);
    
}

    display()
    {
        var pos= this.body.position;
        push() 
        translate(pos.x,pos.y);
        // rectMode(CENTER);
        imageMode(CENTER);
        ellipseMode(RADIUS);
        image(this.image,0,0,this.r*2,this.r*2);
        //fill("WHITE");
        // ellipse(0,0,this.r,this.r);
        pop()

    }
}


