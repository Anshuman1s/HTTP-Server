let x = 12;

console.log(x<15);
console.log(x>10);
// Solution
let z;
let varr;
let miu;
function CalculatePoints(x,miu,varr){
    z = (x+miu)/varr
    console.log(z);
}
// CalculatePoints(12,20,16)

// Write a function which calculate the square of input value

/*
function calculateSquare(n){
    if(x==0){
        console.log(`The square of 0 is${n}`);
    }else{
        console.log(`The square of ${n} is: `+n*n);
    }
}
calculateSquare(0);
calculateSquare(12);4*/

// find the number is prime or not 

function isPrime(x){
    if(x===1 || x===2){
        console.log(`${x} is prime:`);
    }else if(x%2!=0 && x%3!=0){
        console.log(`${x} is prime:`);
    }else{
        console.log(`${x} is not a prime number:`);
    }
}