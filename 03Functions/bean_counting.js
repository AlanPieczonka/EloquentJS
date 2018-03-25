const countBs = str => {
    return str.split("")
              .reduce((acc, letter) => letter == 'B' ? acc + 1 : acc, 0);
}

const countChar = (str, char) => {
  return str.split("")
            .reduce((acc, letter) => letter == char ? acc + 1 : acc, 0);
}


console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
