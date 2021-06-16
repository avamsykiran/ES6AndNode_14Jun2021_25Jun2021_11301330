//constructor funcitons
const Employee = function(empid,name,basic,ta,hra){
    this.empid=empid;
    this.name=name;
    this.basic=basic;
    this.ta=ta;
    this.hra=hra;
    this.netPay = function(){
        return this.basic+this.hra+this.ta;
    };
}

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

let e = new Employee(1,"Vamsy",1234,45,67)
console.log(e);
console.log(e.netPay());

let r = new Rectangle(10,20);
console.log(r)
console.log(r.area())
console.log(r.perimeter())

let c = new Cuboid(5,4,3)
console.log(c)
console.log(c.totalSurfaceArea())
console.log(c.volume())