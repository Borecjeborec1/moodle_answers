const mainDiv = document.querySelector('.main');
const mainP = document.querySelector('.main>p');
const mainH = document.querySelector('.main>h1');
const mainSpans = document.querySelectorAll('.main>span');
const nonPC = document.querySelector('.main>.nonPC');
const inp = document.querySelector('#question');
const findBtn = document.querySelector('#find');
const mainPMobile = document.querySelector('.main>.mobi');




function pcSetup() {
  document.addEventListener("paste", (e) => {
    if (!e.clipboardData.getData('text/plain')) return
    if (!findData(e.clipboardData.getData('text/plain'))) return
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
  nonPC.style.diplay = "none"
}
window.onload = () => {
  if (navigator.userAgent.includes("x64") || navigator.userAgent.includes("x32")) return pcSetup()
  mainP.style.display = "none"
  findBtn.addEventListener("click", () => {
    mainP.style.display = ""
    mainP.innerText = `
    Question: ${findData(inp.value).question} 
    
    Answer: ${findData(inp.value).answer}
  `
    mainP.style.textTransform = 'capitalize';
    mainDiv.classList.remove("selected")
  }
  )

}

setTimeout(() => {
  mainP.style.opacity = 1
  mainH.style.opacity = 1
  mainSpans.forEach(el => el.style.opacity = 1)
  nonPC.style.opacity = 1
}, 2000)