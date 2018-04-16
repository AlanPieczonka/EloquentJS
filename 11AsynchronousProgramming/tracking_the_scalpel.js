async function locateScalpel(nest) {
    let currentNest = nest.name;
    while (true) {
        let nextNest = await anyStorage(nest, currentNest, "scalpel");
        if (nextNest == currentNest) return currentNest;
        currentNest = nextNest;
    }
}

function locateScalpel2(nest) {
    function loop(currentNest) {
        return anyStorage(nest, currentNest, "scalpel").then(nextNest => {
            if (nextNest == currentNest) return currentNest;
            else return loop(nextNest);
        });
    }
    return loop(nest.name);
}

locateScalpel(bigOak).then(console.log);
// → Butcher's Shop
locateScalpel2(bigOak).then(console.log);
  // → Butcher's Shop
