let question = document.querySelector(".question")
let answers = document.querySelector(".answers").querySelectorAll(".answer")
let count = document.querySelector(".count")
let prev = document.querySelector(".prev")
let next = document.querySelector(".next")
let score = document.querySelector(".score")
let complete = document.querySelector(".complete")
let maxLength = state.length
let current = 0
let totalScore = 0
let memory = []

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
        }
        if (!memory.includes(current)) {
          memory.push(current)
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
}

next.onclick = () => {
  current = Math.min(maxLength - 1, ++current)
  if (memory.includes(current)) {
    complete.classList.add("show")
  } else {
    complete.classList.remove("show")
  }
  loadData(state[current])
}

loadData(state[current])
