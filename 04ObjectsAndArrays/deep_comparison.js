const deepEqual = (x, y) => {
  if(
    (typeof x == "object" && x != null) && 
    (typeof y == "object" && y != null)
  ) {
    const xKeys = Object.keys(x),
          yKeys = Object.keys(y),
          xKeysLength = xKeys.length,
          yKeysLength = yKeys.length;
    if(xKeysLength > 0 && (xKeysLength === yKeysLength)){
      for(let key of xKeys){
        if(!yKeys.includes(key) || !deepEqual(x[key], y[key])) { return false }
      }
      return true;
    }
    else{
      return false;
    }
  } else {
    return x === y;
  }
};

let obj = {here: {is: "an"}, object: 2};
let obj2 = {here: {is: "an"}, object: 3};

console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true