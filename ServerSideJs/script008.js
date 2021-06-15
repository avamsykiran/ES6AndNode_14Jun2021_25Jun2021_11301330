
class Rectangle {
    //not possible to declare any datamemeber here......

    constructor(length,breadth){
        //can have only one constructor
        this.length=length;
        this.breadth=breadth;
    }

    area(){
        return this.length*this.breadth;
    }

    perimeter(){
        return 2*(this.length+this.breadth);
    }
}

class Cuboid extends Rectangle {
    constructor(length,breadth,height){
        super(length,breadth);
        this.height=height;
    }

    totalSurfaceArea(){
        return 4*this.area() + 2*(this.breadth*this.height)
    }

    volume(){
        return this.length+this.breadth*this.height
    }
}

let r = new Rectangle(10,20);
console.log(r.area())
console.log(r.perimeter())

let c = new Cuboid(5,4,3)
console.log(c.totalSurfaceArea())
console.log(c.volume())