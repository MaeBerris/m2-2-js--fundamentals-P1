// Q5
// Write a JavaScript program to find ALL the Armstrong
// numbers between 0 and 999, store them in array an output
// that array to the console.

// Note : An Armstrong number of three digits is an integer
// such that the sum of the cubes of its digits is equal
// to the number itself. For example,
// 371 is an Armstrong number:
// 3 ** 3 + 7 ** 3 + 1 ** 3
// = 27   + 343    + 1
// = 371

let armstrongNumbers = [];

for(i = 0; i <=999; i++){
    let string = i.toString()
    let firstDigit = string[0]
    let secondDigit = string[1]
    let thirdDigit = string[2]
    if(firstDigit ** 3 === i && secondDigit === undefined && thirdDigit === undefined){
        armstrongNumbers.push(i)
    }
    if(firstDigit ** 3 + secondDigit ** 3 === i && thirdDigit === undefined){
        armstrongNumbers.push(i)
    } 
    if (firstDigit ** 3 + secondDigit**3 + thirdDigit**3 === i){
        armstrongNumbers.push(i)
    }
    
}

console.log(armstrongNumbers);
