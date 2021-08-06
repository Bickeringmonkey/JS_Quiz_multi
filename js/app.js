// 1. Create a multidimensional array to hold quiz questions and answers
const questions = [
    ["Who is the pointy eared Science Officer on StarTrek?", "spock"],
      ["What Famous Ship Sank in 1912?", "titanic"],
      ["Famous food created with Cocoa Powder?", "chocolate"],
      ["Mathew Perry was in this famous sitcom", "friends"],
      ["Luke i am your ____?", "father"]
    ]

    

    // 2. Store the number of questions answered correctly
    let score = 0;
    let correct = [];
    let incorrect = [];

    /* 
  3. Use a loop to cycle through each question
      - Present each question to the user
      - Compare the user's response to answer in the array
      - If the response matches the answer, the number of correctly
        answered questions increments by 1
*/

for (let i = 0; i < questions.length; i++) {
    let question = questions[i][0];
    let answer = questions[i][1];
    let response = prompt(question);

    if (response.toLowerCase() === answer) {
        correct.push(question);
        score += 1;
    }else {
        incorrect.push(question);
    }
}

function createQuizList( arr ) {
    let items = '';
    for (let i = 0; i < arr.length; i++) {
        items += `<li>${arr[i]}</li>`;
    }
    return items;
}

// Display the number of correct answers to the user
let html = `
    <h1>You got ${score} question(s) correct</h1>
    <h2>You got these questions right:</h2>
    <ol>${createQuizList(correct)}</ol>

    <h2>You got these questions wrong:</h2>
    <ol>${createQuizList(incorrect)}</ol>
`;

document.querySelector('main').innerHTML = html;