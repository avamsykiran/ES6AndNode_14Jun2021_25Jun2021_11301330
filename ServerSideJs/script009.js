const Emp = function(eid,ename){
    this.eid=eid;
    this.ename=ename;
}

class Dept{
    constructor(dno,dname){
        this.dno=dno;
        this.dname=dname;
    }
}

let e1 = new Emp(1,"Vamsy");
let d1 = new Dept(1,"Accounts");

console.log(e1);
console.log(d1);

Emp.prototype.basic=1200;
Emp.prototype.hra=1450;
Emp.prototype.toString= () => `${this.eid}\t${this.ename}\t${this.basic}\t${this.ta}`;

let e2 = new Emp(2,"Swathi");

console.log(e2);
console.log(e2.basic);
console.log(e2.hra);