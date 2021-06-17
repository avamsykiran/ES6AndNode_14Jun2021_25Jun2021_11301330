const f1 = function(){
    console.log("hello");
}

f1();

//f1 = "a simple string"; is not possible
f1();

/*--------------------------------------------------------*/

const f2 = function(){
    n1 = 56;
    console.log(n1);
    var n2 = 156;
    console.log(n2);
    let n3 = 256;
    console.log(n3);

    if(true){
        var n4 = 356;
        console.log(n4);
        let n5 = 456;
        console.log(n5);
    }

    console.log(n4);
    //console.log(n5);//not aaccessable
}

f2();

console.log(n1);
//console.log(n2); //not accessable
//console.log(n3); //not accessable
//console.log(n4); //not accessable
//console.log(n5); //not accessable