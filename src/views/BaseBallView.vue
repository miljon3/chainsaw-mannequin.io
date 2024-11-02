<template>
    <div class="baseball-quiz">
      <h2>Baseball-trivia</h2>
      <div v-if="!quizFinished">
        <div v-for="(question, index) in questions" :key="index" class="question">
          <p>{{ index + 1 }}. {{ question.question }}</p>
          <ul>
            <li v-for="(option, idx) in question.options" :key="idx">
              <label>
                <input
                  type="radio"
                  :name="'question' + index"
                  :value="option"
                  v-model="userAnswers[index]"
                  :disabled="quizFinished"
                />
                {{ option }}
              </label>
            </li>
          </ul>
        </div>
        <button @click="submitQuiz">Skicka in svar</button>
      </div>
      <div v-else>
        <h3>Resultat</h3>
        <p>Du fick {{ score }} av {{ questions.length }} rätt.</p>
        <div v-for="(question, index) in questions" :key="index" class="review">
          <p>{{ index + 1 }}. {{ question.question }}</p>
          <p>Ditt svar: {{ userAnswers[index] }}</p>
          <p v-if="userAnswers[index] === question.answer" class="correct">Rätt!</p>
          <p v-else class="incorrect">Fel! Rätt svar: {{ question.answer }}</p>
        </div>
        <button @click="resetQuiz">Börja om</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        quizFinished: false,
        score: 0,
        userAnswers: [],
        questions: [
          {
            question: "Vilket lag har vunnit flest World Series-titlar?",
            options: ["New York Yankees", "Boston Red Sox", "St. Louis Cardinals", "Los Angeles Dodgers"],
            answer: "New York Yankees"
          },
          {
            question: "Vilken spelare kallas ofta 'The Sultan of Swat'?",
            options: ["Babe Ruth", "Lou Gehrig", "Hank Aaron", "Willie Mays"],
            answer: "Babe Ruth"
          },
          {
            question: "Vilket årtionde infördes designated hitter-regeln i American League?",
            options: ["1960-talet", "1970-talet", "1980-talet", "1990-talet"],
            answer: "1970-talet"
          },
          {
            question: "Vad kallas det när en batter slår en home run med baserna fulla?",
            options: ["Grand Slam", "Home Run Cycle", "Perfect Hit", "Full House"],
            answer: "Grand Slam"
          },
          {
            question: "Vilket lag bröt 'The Curse of the Bambino' genom att vinna World Series 2004?",
            options: ["Chicago Cubs", "Boston Red Sox", "Chicago White Sox", "Cleveland Indians"],
            answer: "Boston Red Sox"
          }
        ]
      };
    },
    methods: {
      submitQuiz() {
        this.score = 0;
        for (let i = 0; i < this.questions.length; i++) {
          if (this.userAnswers[i] === this.questions[i].answer) {
            this.score++;
          }
        }
        this.quizFinished = true;
      },
      resetQuiz() {
        this.quizFinished = false;
        this.score = 0;
        this.userAnswers = [];
      }
    }
  };
  </script>
  
  <style>
  .baseball-quiz {
    max-width: 600px;
    margin: auto;
    font-family: Arial, sans-serif;
  }
  
  .question {
    margin-bottom: 20px;
  }
  
  .review {
    margin-bottom: 20px;
  }
  
  .correct {
    color: green;
  }
  
  .incorrect {
    color: red;
  }
  
  button {
    padding: 10px 20px;
    font-size: 16px;
  }
  </style>
  