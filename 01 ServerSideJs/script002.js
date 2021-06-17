
function hello(){
    console.log("Hello World");
}

function helloUser(userName){
    console.log(`Hello ${userName}`);
}

function getHelloUser(userName){
    return `Hello ${userName}`
}

hello();
helloUser("Vamsy");
console.log(getHelloUser("IndhikaaValli"));

hello1 = function(){
    console.log("Hello World");
}

helloUser1=function (userName){
    console.log(`Hello ${userName}`);
}

getHelloUser1=function (userName){
    return `Hello ${userName}`
}

hello1();
helloUser1("Vamsy");
console.log(getHelloUser1("IndhikaaValli"));