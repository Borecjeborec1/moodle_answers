
function findData(str) {
  let res = data
  for (let i = 0; i < res.length; i++) {
    if (res[i][0].includes(str.toLowerCase())) {
      return { question: res[i][0], answer: res[i][1] }
    }
  }
}