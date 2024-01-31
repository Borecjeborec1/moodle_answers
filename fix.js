const fs = require('fs');
const data = JSON.parse(fs.readFileSync('questions.json', "utf8"));
for (let el of data) {
  el[0] = el[0].trim().toLowerCase()
  el[1] = el[1].trim().toLowerCase()
}

fs.writeFileSync('questions.json', JSON.stringify([...new Set(data)]))