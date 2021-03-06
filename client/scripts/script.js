const mainDiv = document.querySelector('.main');
const mainP = document.querySelector('.main>p');
const mainH = document.querySelector('.main>h1');
const mainSpans = document.querySelectorAll('.main>span');
const nonPC = document.querySelector('.main>.nonPC');
const inp = document.querySelector('#question');
const findBtn = document.querySelector('#find');




function pcSetup() {
  mainDiv.classList.add("animSolo")
  document.addEventListener("paste", (e) => {
    if (!e.clipboardData.getData('text/plain')) return
    if (!findData(e.clipboardData.getData('text/plain'))) {
      mainP.innerText = `
    Question: ${e.clipboardData.getData('text/plain')} 
    
    Answer: Could not find answer, consider pasting only part of the question. 
    `
      mainP.style.textTransform = 'capitalize';
      mainDiv.classList.remove("selected")
      return
    }
    mainP.innerText = `
    Question: ${findData(e.clipboardData.getData('text/plain')).question} 
    
    Answer: ${findData(e.clipboardData.getData('text/plain')).answer}
    `
    mainP.style.textTransform = 'capitalize';
    mainDiv.classList.remove("selected")
  })

  document.addEventListener("click", () => {
    if (mainDiv.className.includes("selected")) {
      mainDiv.classList.remove("selected")
      mainP.innerText = "Click here and press CTRL+V to paste question."
    } else {
      mainDiv.classList.add("selected")
      mainP.innerText = ""
      let str = "Waiting..."
      for (let i in str.split("")) {
        let el = document.createElement("span")
        el.innerText = str.split("")[i]
        el.style = "--i:" + i
        el.style.minWidth = "1rem"
        mainP.appendChild(el)
      }
    }
  })
  setTimeout(() => {
    mainP.style.opacity = 1
    mainH.style.opacity = 1
    mainSpans.forEach(el => el.style.opacity = 1)
  }, 2000)
}
window.onload = () => {
  if (navigator.userAgent.includes("x64") || navigator.userAgent.includes("x32")) return pcSetup()
  mainP.style.display = "none"
  mainH.style.opacity = 1
  mainSpans.forEach(el => el.style.opacity = 1)
  nonPC.style.display = "block"
  nonPC.addEventListener("submit", (e) => {
    e.preventDefault()
    mainP.style.display = ""
    mainP.style.opacity = "1"
    mainP.innerText = `
    Question: ${findData(inp.value).question} 
    
    Answer: ${findData(inp.value).answer}
  `
    mainP.style.textTransform = 'capitalize';
    mainDiv.classList.remove("selected")
    inp.value = ""
  })
}


