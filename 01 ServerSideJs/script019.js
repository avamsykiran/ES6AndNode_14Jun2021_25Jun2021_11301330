
function *f1(){
    let x=10
    yield x
    x +=20
    yield x
    x*=20
    yield x
    x-=20
    return x
}

let handler = f1(); //returns a generator object 
                    //(with a memebr funciton next())
                    //this next function return each step
                    //and the step has a value and a done as properties

while(true){
    let step = handler.next();
    console.log(step.value);
    if(step.done){
        break;
    }
}