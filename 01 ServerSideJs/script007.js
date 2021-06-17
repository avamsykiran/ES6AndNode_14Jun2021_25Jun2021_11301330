"use strict";

let item =  {id:1,name:'A4 Sheets',price:456,dop:new Date("2021-01-01")}

console.log(item);

//...item
//id:1,name:'A4 Sheets',price:456,dop:new Date("2021-01-01")

let item2 = item;
let item3 = {...item}
item.id=101;
console.log(item2)
console.log(item3)

let arr=[1,2,3,4,5,null,7,8]
console.log(arr);
let arr2=[...arr,10,11,null,13,14,15] //[1,2,3,4,5,null,7,8,10,11,null,13,14,15]
console.log(arr2);

const sum = (...nums) => nums.reduce((a,b)=>a+b)
const prd = (...nums) => nums.reduce((a,b)=>((a??1)*(b??1)))

console.log(sum(10,20))
console.log(sum(10,20,30))
console.log(sum(10,20,30,40))
console.log(sum(...arr2))
console.log(prd(...arr2))
