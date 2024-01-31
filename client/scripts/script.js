const mainDiv = document.querySelector('.main');
const mainH = document.querySelector('.main>h1');
const mainSpans = document.querySelectorAll('.main>span');
const nonPC = document.querySelector('.main>.nonPC');
const inp = document.querySelector('#question');
const findBtn = document.querySelector('#find');
const resultDiv = document.querySelector('#result')

const questionText = document.querySelector('#questionText');
const answerText = document.querySelector('#answerText');

function searchQuestion(partialInput) {
  const matchingQuestions = [];

  for (const question in questionsAndAnswers) {
    if (question.toLowerCase().includes(partialInput.toLowerCase())) {
      matchingQuestions.push({ q: question, a: questionsAndAnswers[question] });
    }
  }

  return matchingQuestions;
}

function pcSetup() {
  handleLoadAnimation()
  document.addEventListener("paste", (e) => {
    if (!e.clipboardData.getData('text/plain')) return

    const answers = searchQuestion(e.clipboardData.getData('text/plain'))
    console.log(answers)
    if (answers.length < 1) {
      questionText.innerText = e.clipboardData.getData('text/plain')
      answerText.innerText = `Could not find answer, consider pasting only part of the question. `
      mainDiv.classList.remove("selected")
      return
    }
    let qaContent = ""
    for (answer in answers) {
      qaContent += `<h2>Question:</h4>
      <p id="questionText">${answers[answer].q}</p>
      <br>
      <h2>Answer:</h4>
      <p id="answerText">${answers[answer].a}</p>
      <br>`
    }
    resultDiv.innerHTML = qaContent
    mainDiv.classList.remove("selected")
  })


  function handleLoadAnimation() {
    mainDiv.classList.add("animSolo")

    setTimeout(() => {
      mainH.style.opacity = 1
      resultDiv.style.opacity = 1
      mainSpans.forEach(el => el.style.opacity = 1)
    }, 1000)
  }
}


function phoneSetup() {
  mainH.style.opacity = 1
  mainSpans.forEach(el => el.style.opacity = 1)
  nonPC.style.display = "block"
  nonPC.addEventListener("submit", (e) => {
    e.preventDefault()
    mainDiv.classList.remove("selected")
    inp.value = ""
  })
}
window.onload = () => {
  if (navigator.userAgent.includes("x64") || navigator.userAgent.includes("x32")) return pcSetup()
  phoneSetup()
}


