class RectangularBoard {
    
    constructor(length,breadth){
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

class CircularBoard {
    
    constructor(radius){
        this.radius=radius;
    }

    area(){
        return Math.pow(this.radius,2)*Math.PI;
    }

    perimeter(){
        return 2*Math.PI*this.radius;
    }
}

const estimate = function(paintRate,borderRate) {
    return (this.area()*paintRate) + (this.perimeter()*borderRate)
}

let r = new RectangularBoard(10,20);
let c = new CircularBoard(23);

console.log(r);
console.log(estimate.call(r,10,5)); //r.estimate(10,5);
console.log(c);
console.log(estimate.call(c,10,5)); //c.estimate(10,5);

console.log(estimate.apply(r,[10,5])); //r.estimate(10,5);
console.log(estimate.apply(c,[10,5])); //c.estimate(10,5);
