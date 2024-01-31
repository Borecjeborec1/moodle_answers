// merge json from files new-questions1,2,3,4 to new json

const fs = require('fs');
const data1 = JSON.parse(fs.readFileSync('new-questions1.json', "utf8"));
const data2 = JSON.parse(fs.readFileSync('new-questions2.json', "utf8"));
const data3 = JSON.parse(fs.readFileSync('new-questions3.json', "utf8"));
const data4 = JSON.parse(fs.readFileSync('new-questions4.json', "utf8"));
// merge them to one big object
const mergedData = {
    ...data1,
    ...data2,
    ...data3,
    ...data4
};

fs.writeFileSync('new-questions.json', JSON.stringify(mergedData))

