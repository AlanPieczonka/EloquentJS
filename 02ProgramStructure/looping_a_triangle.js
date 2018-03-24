const createTriangle = (maximum, hashPerLine = 1) => {
  if (hashPerLine > maximum) { return true; }

  console.log('#'.repeat(hashPerLine));
  createTriangle(maximum, hashPerLine + 1); // recursion here
};
console.log(createTriangle(7));

// or more straightforward way...
for (let i = 1; i < 7; i++) {
  console.log('#'.repeat(i));
}
