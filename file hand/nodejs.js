const fs = require ("fs");
const os = require ("os");
console.log(os.cpus().lenght);

fs.readFile("test.txt", (err, result) => {});

console.log("2");