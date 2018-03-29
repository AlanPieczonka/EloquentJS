let arrays = [[1, 2, 3], [4, 5], [6]];

const flattenArrays = arrays.reduce((a, b) => a.concat(b));
console.log(flattenArrays); // → [1, 2, 3, 4, 5, 6]