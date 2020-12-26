class Box {
    constructor(x,y,width,height){
      var  boxOptions = {
            restitution : 0.8 , 
            density : 0.7 ,
            friction : 0.3
        }
        this.body = Bodies.rectangle(x,y,width,height,boxOptions);
        this.width = width ;
        this.height = height ;
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position ;
        var angle = this.body.angle ;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        stroke("brown");
        strokeWeight(4);
        rect(0,0,this.width,this.height);
        pop();
    }

}