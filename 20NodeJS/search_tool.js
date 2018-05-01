const { statSync, readdirSync, readFileSync } = require("fs");

const searchTerm = new RegExp(process.argv[2]);
const search = file => {
  const stats = statSync(file);
  if (stats.isDirectory()) {
    for (let f of readdirSync(file)) {
      search(file + "/" + f);
    }
  } else if (searchTerm.test(readFileSync(file, "utf8"))) {
    console.log("FILES WHOSE CONTENT MATCHES THE REGULAR EXPRESSION:");
    console.log(file);
  }
};

for (let arg of process.argv.slice(3)) {
  search(arg);
}
