// function is a first class citizien
// we can use function to store in a variable
const calc=()=>{
    return 4*5;
}
// a variable that hold that functions

// 1_1
// let aNumber=calc();
// console.log(aNumber);

// 1_2
// callback function is a function that is called inside another function 
const printCalc=(calc)=> console.log(calc());
printCalc(calc);