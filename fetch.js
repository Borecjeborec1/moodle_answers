const Nightmare = require('nightmare');
const fs = require('fs');


const nightmare = Nightmare({ show: true });

require('dotenv').config();


nightmare
  .goto(process.env.MOODLE_URL)
  .type('#username', process.env.MOODLE_USERNAME)
  .type('#password', process.env.MOODLE_PASSWORD)
  .click('#loginbtn')
  .wait(2000)
  .evaluate(() => {
    let questions = [...document.querySelectorAll('.qtext')].map((el) => el.innerText.replace(/\n/g, ''))
    let answers = [...document.querySelectorAll('.rightanswer')].map((el) => el.innerText.replace(/\n|Správná odpověď je: |Správná odpověď je|\.|'/g, ''))
    return [questions, answers];
  })
  .end(el => {
    let res = JSON.parse(fs.readFileSync('questions.json', "utf8"))
    for (let i = 0; i < el[0].length; i++) {
      res.push([el[0][i].replace(/ /g, ""), el[1][i]])
    }
    fs.writeFileSync('questions.json', JSON.stringify(res))
  })
  .then()
  .catch((error) => {
    console.error('Search failed:', error);
  });