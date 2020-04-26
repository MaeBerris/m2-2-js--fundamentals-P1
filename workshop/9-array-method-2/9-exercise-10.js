// Q10
// Build on what you did for Q9.
// This time the function should return a letter grade instead of the average.
// Here is how I calculate the grades
// <60 	is F
// <70 	is D
// <80 	is C
// <90 	is B
// <100 is A

// Write function here

function calculateAverage(grades) {
    let total = 0;
    let letterGrade =""
    grades.forEach(function(grade){
        return total = total + grade ; 
    }) 
    let average = total/grades.length;
    if (average < 60){
        letterGrade = "F"
    }
    if (average >= 60 && average < 70){
        letterGrade = "D"
    }
    if (average >= 70 && average < 80){
        letterGrade = "C"
    }
    if (average >= 80 && average < 90){
        letterGrade = "B"
    }
    if (average >= 90 && average < 100){
        letterGrade = "A"
    }
    return "Class, your average for this exam was " + letterGrade
}

console.log(calculateAverage([96, 77, 83, 100, 99]));

 
// Call the function with [48, 95, 65, 48, 59, 78, 72, 65]

// Try with other values as well


