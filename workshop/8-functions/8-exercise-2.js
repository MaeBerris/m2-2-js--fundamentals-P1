// Q2a
// Write a function that accepts two integers and *returns*
// the greater one. (this is slightly different from the previous question.)

function max(num1, num2) {
    if(num1 > num2){
        return num1
    }else if(num2 > num1){
        return num2
    } 
}

// Also, wouldn't it be nice if there were a Math method that could simplify the code....
// https://www.w3schools.com/jsreF/jsref_obj_math.asp

// Q2b
// What if we wanted to figure out the max of 4 integers, instead of 2?

function max4 (num1, num2, num3, num4){
    let maxValue= Math.max(num1, num2, num3, num4)
    return maxValue
}

// STRETCH
// What if we wanted to write a function which took an unlimited number of
// integers, and returned the largest one?

// All of the following calls should be valid:
maxValue(4, 2); // 4
maxValue(4, 2, 8, 1, 5, 10); // 10
maxValue(4, 2, 8, 1, 5, 10, 1, 64, 2, 8, -100, 54); // 64


function maxInfinity (num1, num2, ...restArgs){
    let maxValue= Math.max(num1, num2,...restArgs)
    return maxValue
}
// HINT: You'll want to use "rest parameters".
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
