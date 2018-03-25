const createTriangle = (maximum, hashesPerLine = 1) => {
  if (hashesPerLine > maximum) { return true; }

  console.log('#'.repeat(hashesPerLine));
  createTriangle(maximum, hashesPerLine + 1); // recursion here
};
console.log(createTriangle(7));

// or more straightforward way...
for (let i = 1; i <= 7; i++) {
  console.log('#'.repeat(i));
}
