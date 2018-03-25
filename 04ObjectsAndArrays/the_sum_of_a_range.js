const range = (start, end, step = 1) => {
  let values = [];
  if (start === end) { return values }
  if(start < end){
    for (let i = start; i <= end; i += step) values.push(i);
  } else{
    for (let i = start; i >= end; i += step) values.push(i);
  }
  return values;
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]

const sum = numbers => numbers.reduce((acc, value) => acc + value, 0);
console.log(sum(range(1, 10)));
// → 55
