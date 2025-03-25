// input
let num1, num2, result, correctAnswer;

// for generate table
function generateTable() {
  let num = document.getElementById("numberInput").value;
  let outputDiv = document.getElementById("tableOutput");
  outputDiv.innerHTML = ""; // Clear previous results

  if (num === "") {
    alert("Please enter a number");
    return;
  }

  let number = parseInt(num);
  let tableHTML = "";
  for (let i = 1; i <= 12; i++) {
    tableHTML += `<p>${i} x ${number} = ${i * number}</p>`;
  }
  outputDiv.innerHTML = tableHTML;
}

// for generate question
function generateQuestion() {
  num1 = Math.floor(Math.random() * 12) + 1;
  num2 = Math.floor(Math.random() * 12) + 1;
  result = num1 * num2;
  correctAnswer = num2;

  document.getElementById("question").innerHTML = `${num1} x ? = ${result}`;
  document.getElementById("answerInput").value = "";
  document.getElementById("feedback").innerHTML = "";
}

// for checking answer
function checkAnswer() {
  let userAnswer = document.getElementById("answerInput").value;

  if (userAnswer === "") {
    alert("Enter Your Answer");
    return;
  }

  if (parseInt(userAnswer) === correctAnswer) {
    document.getElementById("feedback").innerHTML =
      "✅ <span class='correct'>Correct</span>";
  } else {
    document.getElementById("feedback").innerHTML =
      `❌ <span class='wrong'>Wrong! The correct answer is ${correctAnswer}</span>`;
  }

  setTimeout(generateQuestion, 2500);
}

generateQuestion();
