const Nightmare = require('nightmare');
const fs = require('fs');



require('dotenv').config();

const ctvrty_rocnik = ['http://moodle2013.gsosfm.cz/mod/quiz/view.php?id=1688', 'http://moodle2013.gsosfm.cz/mod/quiz/view.php?id=1686', 'http://moodle2013.gsosfm.cz/mod/quiz/view.php?id=1684', 'http://moodle2013.gsosfm.cz/mod/quiz/view.php?id=1685', 'http://moodle2013.gsosfm.cz/mod/quiz/view.php?id=1689', 'http://moodle2013.gsosfm.cz/mod/quiz/view.php?id=1682', 'http://moodle2013.gsosfm.cz/mod/quiz/view.php?id=1683', 'http://moodle2013.gsosfm.cz/mod/quiz/view.php?id=1681', 'http://moodle2013.gsosfm.cz/mod/quiz/view.php?id=1687']
const treti_rocnik = ['http://moodle2013.gsosfm.cz/mod/quiz/view.php?id=1671', 'http://moodle2013.gsosfm.cz/mod/quiz/view.php?id=1678', 'http://moodle2013.gsosfm.cz/mod/quiz/view.php?id=1664', 'http://moodle2013.gsosfm.cz/mod/quiz/view.php?id=1679', 'http://moodle2013.gsosfm.cz/mod/quiz/view.php?id=1667', 'http://moodle2013.gsosfm.cz/mod/quiz/view.php?id=1665', 'http://moodle2013.gsosfm.cz/mod/quiz/view.php?id=1670', 'http://moodle2013.gsosfm.cz/mod/quiz/view.php?id=1668', 'http://moodle2013.gsosfm.cz/mod/quiz/view.php?id=1669', 'http://moodle2013.gsosfm.cz/mod/quiz/view.php?id=1672', 'http://moodle2013.gsosfm.cz/mod/quiz/view.php?id=1666', 'http://moodle2013.gsosfm.cz/mod/quiz/view.php?id=1673', 'http://moodle2013.gsosfm.cz/mod/quiz/view.php?id=1674', 'http://moodle2013.gsosfm.cz/mod/quiz/view.php?id=1675', 'http://moodle2013.gsosfm.cz/mod/quiz/view.php?id=1676']
const druhy_rocnik = ['http://moodle2013.gsosfm.cz/mod/quiz/view.php?id=1658', 'http://moodle2013.gsosfm.cz/mod/quiz/view.php?id=1655', 'http://moodle2013.gsosfm.cz/mod/quiz/view.php?id=1659', 'http://moodle2013.gsosfm.cz/mod/quiz/view.php?id=1660', 'http://moodle2013.gsosfm.cz/mod/quiz/view.php?id=1657', 'http://moodle2013.gsosfm.cz/mod/quiz/view.php?id=1663', 'http://moodle2013.gsosfm.cz/mod/quiz/view.php?id=1661', 'http://moodle2013.gsosfm.cz/mod/quiz/view.php?id=1651', 'http://moodle2013.gsosfm.cz/mod/quiz/view.php?id=1654', 'http://moodle2013.gsosfm.cz/mod/quiz/view.php?id=1656', 'http://moodle2013.gsosfm.cz/mod/quiz/view.php?id=1652', 'http://moodle2013.gsosfm.cz/mod/quiz/view.php?id=1653']
const prvni_rocnik = ['http://moodle2013.gsosfm.cz/mod/quiz/view.php?id=1636', 'http://moodle2013.gsosfm.cz/mod/quiz/view.php?id=1640', 'http://moodle2013.gsosfm.cz/mod/quiz/view.php?id=1639', 'http://moodle2013.gsosfm.cz/mod/quiz/view.php?id=1641', 'http://moodle2013.gsosfm.cz/mod/quiz/view.php?id=1637', 'http://moodle2013.gsosfm.cz/mod/quiz/view.php?id=1638', 'http://moodle2013.gsosfm.cz/mod/quiz/view.php?id=1642', 'http://moodle2013.gsosfm.cz/mod/quiz/view.php?id=1650', 'http://moodle2013.gsosfm.cz/mod/quiz/view.php?id=1646', 'http://moodle2013.gsosfm.cz/mod/quiz/view.php?id=1645', 'http://moodle2013.gsosfm.cz/mod/quiz/view.php?id=1644', 'http://moodle2013.gsosfm.cz/mod/quiz/view.php?id=1643', 'http://moodle2013.gsosfm.cz/mod/quiz/view.php?id=1647', 'http://moodle2013.gsosfm.cz/mod/quiz/view.php?id=1648']


const ch_prvni_rocnik = ['http://moodle2013.gsosfm.cz/mod/quiz/view.php?id=1735', 'http://moodle2013.gsosfm.cz/mod/quiz/view.php?id=1736', 'http://moodle2013.gsosfm.cz/mod/quiz/view.php?id=1737', 'http://moodle2013.gsosfm.cz/mod/quiz/view.php?id=1743', 'http://moodle2013.gsosfm.cz/mod/quiz/view.php?id=1741', 'http://moodle2013.gsosfm.cz/mod/quiz/view.php?id=1738', 'http://moodle2013.gsosfm.cz/mod/quiz/view.php?id=1739', 'http://moodle2013.gsosfm.cz/mod/quiz/view.php?id=1740']
const ch_druhy_rocnik = ['http://moodle2013.gsosfm.cz/mod/quiz/view.php?id=1707', 'http://moodle2013.gsosfm.cz/mod/quiz/view.php?id=1716', 'http://moodle2013.gsosfm.cz/mod/quiz/view.php?id=1712', 'http://moodle2013.gsosfm.cz/mod/quiz/view.php?id=1717', 'http://moodle2013.gsosfm.cz/mod/quiz/view.php?id=1713', 'http://moodle2013.gsosfm.cz/mod/quiz/view.php?id=1709', 'http://moodle2013.gsosfm.cz/mod/quiz/view.php?id=1711', 'http://moodle2013.gsosfm.cz/mod/quiz/view.php?id=1718', 'http://moodle2013.gsosfm.cz/mod/quiz/view.php?id=1719', 'http://moodle2013.gsosfm.cz/mod/quiz/view.php?id=1720', 'http://moodle2013.gsosfm.cz/mod/quiz/view.php?id=1721', 'http://moodle2013.gsosfm.cz/mod/quiz/view.php?id=1714', 'http://moodle2013.gsosfm.cz/mod/quiz/view.php?id=1715', 'http://moodle2013.gsosfm.cz/mod/quiz/view.php?id=1705', 'http://moodle2013.gsosfm.cz/mod/quiz/view.php?id=1706', 'http://moodle2013.gsosfm.cz/mod/quiz/view.php?id=1708']
const ch_treti_rocnik = ['http://moodle2013.gsosfm.cz/mod/quiz/view.php?id=1722', 'http://moodle2013.gsosfm.cz/mod/quiz/view.php?id=1723', 'http://moodle2013.gsosfm.cz/mod/quiz/view.php?id=1733', 'http://moodle2013.gsosfm.cz/mod/quiz/view.php?id=1724', 'http://moodle2013.gsosfm.cz/mod/quiz/view.php?id=1725', 'http://moodle2013.gsosfm.cz/mod/quiz/view.php?id=1726', 'http://moodle2013.gsosfm.cz/mod/quiz/view.php?id=1734', 'http://moodle2013.gsosfm.cz/mod/quiz/view.php?id=1728', 'http://moodle2013.gsosfm.cz/mod/quiz/view.php?id=1729', 'http://moodle2013.gsosfm.cz/mod/quiz/view.php?id=1731', 'http://moodle2013.gsosfm.cz/mod/quiz/view.php?id=1730', 'http://moodle2013.gsosfm.cz/mod/quiz/view.php?id=1732']
const ch_ctvrty_rocnik = ['http://moodle2013.gsosfm.cz/mod/quiz/view.php?id=1702', 'http://moodle2013.gsosfm.cz/mod/quiz/view.php?id=1694', 'http://moodle2013.gsosfm.cz/mod/quiz/view.php?id=1693', 'http://moodle2013.gsosfm.cz/mod/quiz/view.php?id=1695', 'http://moodle2013.gsosfm.cz/mod/quiz/view.php?id=1696', 'http://moodle2013.gsosfm.cz/mod/quiz/view.php?id=1692', 'http://moodle2013.gsosfm.cz/mod/quiz/view.php?id=1703', 'http://moodle2013.gsosfm.cz/mod/quiz/view.php?id=1697', 'http://moodle2013.gsosfm.cz/mod/quiz/view.php?id=1698', 'http://moodle2013.gsosfm.cz/mod/quiz/view.php?id=1691', 'http://moodle2013.gsosfm.cz/mod/quiz/view.php?id=1699', 'http://moodle2013.gsosfm.cz/mod/quiz/view.php?id=1704', 'http://moodle2013.gsosfm.cz/mod/quiz/view.php?id=1700', 'http://moodle2013.gsosfm.cz/mod/quiz/view.php?id=1701']

const result = {}
async function processSite(url) {
  const nightmare = Nightmare({ show: false });
  try {
    await nightmare
      .goto(url)
      .type('#username', process.env.MOODLE_USERNAME)
      .type('#password', process.env.MOODLE_PASSWORD)
      .click('#loginbtn')
      .wait(2000)
      .click("a[title='Prohlídka odpovědí tohoto pokusu']")
      .wait(2000);

    const pageData = await nightmare.evaluate(() => {
      let questions = [...document.querySelectorAll('.qtext')].map((el) => el.innerText);
      let answers = [...document.querySelectorAll('.rightanswer')].map((el) => el.innerText.replace(/Správná odpověď je: |Správná odpověď je|'/g, ''));

      const data = {};

      questions.forEach((questionElement, index) => {
        let question = questions[index];
        let answer = answers[index]

        data[question] = answer;
      });

      return data;
    });
    Object.assign(result, pageData);
  } catch (error) {
    console.error('Search failed:', error);
  } finally {
    await nightmare.end();
  }
}

async function main() {
  for (let i = 0; i < ch_ctvrty_rocnik.length; i++) {
    await processSite(ch_ctvrty_rocnik[i]);
  }
  console.log(result);
  fs.writeFileSync('new-questions4.json', JSON.stringify(result))
}

main()