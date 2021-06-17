class Series {
    constructor(lb, ub) {
        this.lb = lb;
        this.ub = ub;
    }

    pause(time) {
        return new Promise((resolve,reject)=>{
            setTimeout(resolve,time);
        })
    }

    async prepareSeries() {

        if (this.lb > this.ub) {
            throw "Invalid Boundaries";
        }
        
        let sum = 0;
        let count = this.lb;
        while(count<=this.ub){
            console.log(count);
            sum+=count;
            await this.pause(2000);
            count++;
        }
        return sum;
    }
}

let s1 = new Series(1, 10);
let s2 = new Series(100, 120);
let s3 = new Series(200, 120);

const createOnSuccess = (seriesName) => (n) => console.log(`${seriesName} is complete and the sum is ${n}`)
const createOnError = (seriesName) => (err) => console.log(`${seriesName} has an err: ${err}`)

s1.prepareSeries().then(createOnSuccess("Series1"), createOnError("Series1"));
s2.prepareSeries().then(createOnSuccess("Series2"), createOnError("Series2"));
s3.prepareSeries().then(createOnSuccess("Series3"), createOnError("Series3"));
