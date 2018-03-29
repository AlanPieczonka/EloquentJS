const everyWithLoop = (array, test) => {
    let isValid = true;
    for(let element of array){
      if(!test(element)) { isValid = false }
    }  
    return isValid;
  }
  
  const everyWithSome = (array, test) => {
    return !array.some(element => !test(element));
  }
  
  console.log(everyWithLoop([1, 3, 5], n => n < 10));
  // → true
  console.log(everyWithLoop([2, 4, 16], n => n < 10));
  // → false
  console.log(everyWithLoop([], n => n < 10));
  // → true
  
  console.log(everyWithSome([1, 3, 5], n => n < 10));
  // → true
  console.log(everyWithSome([2, 4, 16], n => n < 10));
  // → false
  console.log(everyWithSome([], n => n < 10));
  // → true
  