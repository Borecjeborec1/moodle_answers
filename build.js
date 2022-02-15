const fs = require('fs');
fs.writeFileSync('./client/scripts/data.js', `const data = ${fs.readFileSync('questions.json', "utf8")}`)