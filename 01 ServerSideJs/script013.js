class Series{
    constructor(lb,ub){
        this.lb=lb;
        this.ub=ub;
    }

    startSeries(){
        let count=this.lb;
        let flag = setInterval(()=>{
            console.log(count);
            count++;
            if(count==this.ub){
                clearInterval(flag);
            }
        },2000);
    }
}

let s1 = new Series(1,10);
let s2 = new Series(100,110);

s1.startSeries();
s2.startSeries();

