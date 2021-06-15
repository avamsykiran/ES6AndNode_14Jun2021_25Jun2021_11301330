"use strict";

let items = [
    {id:1,name:'A4 Sheets',price:456,dop:new Date("2021-01-01")},
    {id:3,name:'A3 Sheets',price:1456,dop:new Date("2020-12-21")},
    {id:5,name:'A5 Sheets',price:4526,dop:new Date("2020-12-11")},
    {id:6,name:'A2 Sheets',price:4356,dop:new Date("2020-12-15")},
    {id:2,name:'A1 Sheets',price:6456,dop:new Date("2020-12-13")},
    {id:4,name:'Laser Catridge',price:6456,dop:new Date("2021-01-10")},
    {id:7,name:'Ink Jet Catridge',price:3456,dop:new Date("2021-01-09")}
];

console.log(items);

items.push({id:101,name:'25kg Rice Bag',price:3456})
console.log(items)

let itemRemoved = items.pop();
console.log(`${itemRemoved} removed`)
console.log(items)

items.sort((a,b) => a.id-b.id)
console.log(items);

items.sort((a,b) => a.name.localeCompare(b.name))
console.log(items);

items.sort((a,b) => a.dop===b.dop?0:a.dop>b.dop?1:-1)
console.log(items);

items.sort((a,b) => a.id-b.id)
items.splice(2,3); //removing 3 ele from index 2.
console.log(items);

/*------------------------prototype function or stream operators------------------------*/

items.forEach( item => item.price=item.price*2 )
console.log(items);

let cheapestItem = items.reduce((a,b) => a.price<b.price?a:b)
console.log(cheapestItem)

let itemNames = items.map(item => item.name)
console.log(itemNames)

let itemsPackedIn2020 = items.filter(item => item.dop.getFullYear()===2020)
console.log(itemsPackedIn2020)

let index = items.findIndex(item => item.id===7)
console.log(index)

let itemFound = items.find(item => item.id===7)
console.log(itemFound)

