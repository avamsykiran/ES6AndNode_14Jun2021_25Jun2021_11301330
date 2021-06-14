
const greet = () => "hello"
const greetUser = unm => `Hello ${unm}`
const greetUserAsDirected = (unm,greeting) => `${greeting} ${unm}`
const greetUserAsPerTime = unm => {

    let h = (new Date()).getHours();

    let greeting = "";

    if(h>=3 && h<12)
        greeting="Good Morning ";
    else if(h>=12 && h<=16)
        greeting="Good Noon ";
    else
        greeting="Good Evening ";

    return `${greeting} ${unm}`;
}


console.log(greet())
console.log(greetUser("Vamsy"))
console.log(greetUserAsDirected("Vamsy","Namasthey"))
console.log(greetUserAsPerTime("Vamsy"))