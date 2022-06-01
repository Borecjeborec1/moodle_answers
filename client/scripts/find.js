
function findData(str) {
  let res = data
  for (let i = 0; i < res.length; i++) {
    console.log(res[i][0], str.trim().toLowerCase().replace(/ /g, ""))
    if (res[i][0].includes(str.trim().toLowerCase().replace(/ /g, ""))) {
      return { question: res[i][0], answer: res[i][1] }
    }
  }
}