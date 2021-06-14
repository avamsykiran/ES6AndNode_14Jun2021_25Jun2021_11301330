console.log("Hello World");

n1 = 45;
n2 = 78;

console.log(`Sum of ${n1} and ${n2} is ${n1+n2}`);
console.log(`Difference of ${n1} and ${n2} is ${n1-n2}`);
console.log(`Product of ${n1} and ${n2} is ${n1*n2}`);
console.log(`Quitiont of ${n1} and ${n2} is ${n1/n2}`);
console.log(`Reminder of ${n1} and ${n2} is ${n1%n2}`);


n3 = "45";

console.log(n1==n3)
console.log(n1===n3)
console.log(n1!=n3)
console.log(n1!==n3)


console.log(
    `A string placed in back quotes can be 
    split into 
    any number of lines
    unlike a string enclosed in dbl or single quotes`
);

emp1 = {id:101,name:'Vamsy',sal:4560,hra:456,ta:67}
console.log(emp1);

emp1.netPay = emp1.sal+emp1.hra+emp1.ta;
console.log(emp1);
