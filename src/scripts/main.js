let question = document.querySelector(".question")
let answers = document.querySelector(".answers").querySelectorAll(".answer")
let count = document.querySelector(".count")
let prev = document.querySelector(".prev")
let next = document.querySelector(".next")
let score = document.querySelector(".score")
let maxLength = state.length
let current = 0
let totalScore = 0

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
      let index = Array.from(answers).indexOf(element.target)
      if (index == correctAnswer) {
        answer.classList.add("correct")
        totalScore++
        score.innerText = totalScore
      } else {
        answer.classList.add("incorrect")
        answers[correctAnswer].classList.add("correct")
        totalScore = Math.max(0, --totalScore)
        score.innerText = totalScore
      }
    }
  })
}

prev.onclick = () => {
  current = Math.max(0, --current)
  console.log("current:", current)
  loadData(state[current])
}

next.onclick = () => {
  current = Math.min(maxLength - 1, ++current)
  console.log("current:", current)
  loadData(state[current])
}

loadData(state[current])
