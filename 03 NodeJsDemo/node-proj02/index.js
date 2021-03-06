var fs = require('fs');

var emps = [
    { empId: 101, ename: 'Prem Vadala', basic: 1200 },
    { empId: 102, ename: 'Shahil Khanna', basic: 1230 },
    { empId: 103, ename: 'Anjali Rao', basic: 1800 },
    { empId: 104, ename: 'Meghna Prasad', basic: 1500 },
    { empId: 105, ename: 'Sri Latha Pasudi', basic: 1700 }
];

const filePath = "./emps.json";
/*
fs.writeFileSync(filePath,JSON.stringify(emps));
console.log("The data is stored!");

var bufferData = fs.readFileSync(filePath);
var data = JSON.parse(bufferData);
console.log(data);
*/

fs.writeFile(filePath, JSON.stringify(emps), (err) => {
    if (err) {
        console.log("Operation Failed! Due to " + err);
    } else {
        console.log("The data is stored!");
        fs.readFile(filePath, (err, data) => {
            if (err) {
                console.log("Operation Faile! Dut ot " + err);
            } else {
                var data = JSON.parse(data);
                console.log(data);
            }
        })
    }
});

console.log("The program is done!");