/**
 * NOTE: For the exercises in this section, you are not allowed to use the
 * `for` or `while` loops.
 *
 * You must solve them using array methods like filter, map, forEach, etc.
 *
 * You will also need to verify that your functions work as expected.
 * Be sure to test them. :)
 */

// Q8
// Returns true if every element of lst is of length at least 5.
// Otherwise returns false.
function allLong(lst) {
  const areAllLong = lst.every(function (name){
    return name.length >= 5
  })
  return areAllLong
}

console.log('Q8 - case 1', allLong(['Scott', 'Bob', 'Ric', 'Jim']));
// Should be false

console.log(
  'Q8 - case 2',
  allLong(['Cyborg', 'Robin', 'Batman', 'Superman', 'Aquaman', 'Flash'])
);
// Should be true
