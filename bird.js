class Bird {
    constructor(x,y){
      var  birdOptions = {
            restitution : 0.8 , 
            density : 0.7 ,
            friction : 0.3
        }
        this.body = Bodies.rectangle(x,y,50,50,birdOptions);
        this.width = 50 ;
        this.height = 50 ;
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position ;
        var angle = this.body.angle ;
        pos.x = mouseX ;
        pos.y = mouseY ;
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