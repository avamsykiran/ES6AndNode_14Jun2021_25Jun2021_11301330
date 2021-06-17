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
                let sum=0;
                let count=this.lb;
                let flag = setInterval(()=>{
                    console.log(count);
                    sum+=count;
                    count++;
                    if(count==this.ub){
                        clearInterval(flag);
                        resolve(sum);
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
    (n) => console.log(`Series 1 is complete and the sum is ${n}`),
    (err) => console.log(`Series 1 has an err: ${err}`)
);

p2.then(
    (n) => console.log(`Series 1 is complete and the sum is ${n}`),
    (err) => console.log(`Series 2 has an err: ${err}`)
);

p3.then(
    (n) => console.log(`Series 1 is complete and the sum is ${n}`),
    (err) => console.log(`Series 3 has an err: ${err}`)
);

