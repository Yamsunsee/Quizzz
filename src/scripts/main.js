let current = parseInt(localStorage.getItem("current"))
if (!current) {
  localStorage.setItem("current", 0)
  current = 0
}

let totalScore = parseInt(localStorage.getItem("totalScore"))
if (!totalScore) {
  localStorage.setItem("totalScore", 0)
  totalScore = 0
}

let memory = JSON.parse(localStorage.getItem("memory"))
if (!memory) {
  memory = []
  localStorage.setItem("memory", JSON.stringify(memory))
}

let question = document.querySelector(".question")
let answers = document.querySelector(".answers").querySelectorAll(".answer")
let count = document.querySelector(".count")
let prev = document.querySelector(".prev")
let next = document.querySelector(".next")
let score = document.querySelector(".score")
let complete = document.querySelector(".complete")
let reset = document.querySelector(".reset")
let maxLength = state.length

function loadData(data) {
  count.innerText = `${current + 1} / ${maxLength}`
  let correctAnswer = -1
  question.innerText = data.question
  data.answers.forEach((answer, index) => {
    answers[index].className = "answer"
    if (answer.includes("*")) {
      answer = answer.slice(0, -1)
      correctAnswer = index
    }
    answers[index].innerText = answer
  })

  answers.forEach((answer) => {
    answer.onclick = (element) => {
      if (answer.classList.length == 1) {
        let index = Array.from(answers).indexOf(element.target)
        if (index == correctAnswer) {
          answer.classList.add("correct")
          for (let i = 0; i < 4; i++) {
            if (i != index && i != correctAnswer) {
              answers[i].classList.add("disable")
            }
          }
          if (!memory.includes(current)) {
            totalScore++
            score.innerText = totalScore
            localStorage.setItem("totalScore", totalScore)
          }
        } else {
          answer.classList.add("incorrect")
          answers[correctAnswer].classList.add("correct")
          for (let i = 0; i < 4; i++) {
            if (i != index && i != correctAnswer) {
              answers[i].classList.add("disable")
            }
          }
          if (memory.includes(current)) {
            totalScore -= 2
            totalScore = Math.max(0, totalScore)
          } else {
            totalScore = Math.max(0, --totalScore)
          }
          score.innerText = totalScore
          localStorage.setItem("totalScore", totalScore)
        }
        if (!memory.includes(current)) {
          memory.push(current)
          localStorage.setItem("memory", JSON.stringify(memory))
        }
        complete.classList.add("show")
      }
    }
  })
}

prev.onclick = () => {
  current = Math.max(0, --current)
  if (memory.includes(current)) {
    complete.classList.add("show")
  } else {
    complete.classList.remove("show")
  }
  loadData(state[current])
  localStorage.setItem("current", current)
}

next.onclick = () => {
  current = Math.min(maxLength - 1, ++current)
  if (memory.includes(current)) {
    complete.classList.add("show")
  } else {
    complete.classList.remove("show")
  }
  loadData(state[current])
  localStorage.setItem("current", current)
}

reset.onclick = () => {
  localStorage.setItem("current", 0)
  localStorage.setItem("totalScore", 0)
  memory = []
  localStorage.setItem("memory", JSON.stringify(memory))
  window.location.reload()
}

score.innerText = totalScore
loadData(state[current])
