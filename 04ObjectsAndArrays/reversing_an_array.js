const reverseArray = (array) => array.sort((a, b) => a < b);

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];

const reverseArrayInPlace = (array) => {
  let newArray = reverseArray(array);
  return newArray;
}

let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]