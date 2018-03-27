const arrayToList = ([value, ...rest]) => {
  return {
    value,
    rest: rest.length ? arrayToList(rest) : null
  }
};

const listToArray = list => {
  const { value, rest } = list,
        arr = [];

  arr.push(value);
  if(rest) { arr.push(...listToArray(rest)) };
  return arr;
};

const prepend = (element, list) => ({ value: element, rest: list })

const nth = (list, number) => {
  const { value, rest } = list;

  if(number){
    return rest ? nth(rest, number - 1) : undefined
  } else {
    return value;
  }
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
