class Launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
  


        this.pointB = pointB
        this.launch= Constraint.create(options);
        World.add(myworld, this.launch);
    }

    fly(){
        this.launch.bodyA = null;
    }

    display(){


        
        


        if(this.launch.bodyA){
            var pointA = this.launch.bodyA.position;
            var pointB = this.pointB;

           
            line(pointA.x, pointA.y, pointB.x, pointB.y);
           

           

        }
    }
    
}