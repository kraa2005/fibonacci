'use strict';
function fib(n) {
    if (n === 0){
        return 0;
    } else if (n === 1){
        return 1;
    }
return fib(n - 1) + fib(n - 2);
}
console.log(`${10}番目のfibonacci数は${fib(10)}です`)
//

const length = 10;
for(let i = 0; i <= length; i++){
    console.log(fib(i))
}

//when adding this{} into the String, you need to start and end with ` this thing. shift+ key below esc

// console.log(`${process.argv[2]}番目のfibonacci数は${fib(process.argv[2])}です`)

//const length = process.argv[2];
//for(let i = 0; i <= length; i++){
    //console.log(fib(i))
//}
//console.log(`${process.argv[2]}番目のfibonacci数は${fib(process.argv[2])}です`)