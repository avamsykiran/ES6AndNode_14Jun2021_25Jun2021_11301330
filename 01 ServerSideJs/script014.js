class Series{
    constructor(lb,ub){
        this.lb=lb;
        this.ub=ub;
    }

    prepareSeries(){

        return new Promise((resolve,reject)=>{

            if(this.lb>this.ub){
                reject("Invalid Boundaries");
            }else{
                let count=this.lb;
                let flag = setInterval(()=>{
                    console.log(count);
                    count++;
                    if(count==this.ub){
                        clearInterval(flag);
                        resolve();
                    }
                },2000);
            }
        });

    }
}

let s1 = new Series(1,10);
let s2 = new Series(100,120);
let s3 = new Series(200,120);

let p1 = s1.prepareSeries();
let p2 = s2.prepareSeries();
let p3 = s3.prepareSeries();

p1.then(
    () => console.log("Series 1 is compelte"),
    (err) => console.log(`Series 1 has an err: ${err}`)
);

p2.then(
    () => console.log("Series 2 is compelte"),
    (err) => console.log(`Series 2 has an err: ${err}`)
);

p3.then(
    () => console.log("Series 3 is compelte"),
    (err) => console.log(`Series 3 has an err: ${err}`)
);

