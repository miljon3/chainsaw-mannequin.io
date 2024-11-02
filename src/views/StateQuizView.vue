<template>
    <div class="state-quiz">
      <h2>Gissa delstaten utifrån dess kontur</h2>
      <div v-if="!quizOver">
        <div class="state-image">
          <!-- Visar delstatens silhuett med SVG -->
          <svg
            :viewBox="currentState.viewBox"
            xmlns="http://www.w3.org/2000/svg"
            width="300"
            height="200"
          >
            <path :d="currentState.path" fill="#cccccc" stroke="#333333" />
          </svg>
        </div>
        <div class="guess-input">
          <input
            v-model="userGuess"
            placeholder="Skriv namnet på delstaten"
            :disabled="guessSubmitted"
          />
          <button @click="submitGuess" :disabled="guessSubmitted">
            Skicka in gissning
          </button>
        </div>
        <div v-if="guessSubmitted" class="feedback">
          <p v-if="isCorrect">Rätt! Det är {{ currentState.name }}.</p>
          <p v-else>Fel. Rätt svar är {{ currentState.name }}.</p>
          <button @click="nextState">Nästa delstat</button>
        </div>
      </div>
      <div v-else>
        <h3>Du har gissat på alla delstater!</h3>
        <p>Du fick {{ score }} av {{ totalStates }} rätt.</p>
        <button @click="resetQuiz">Börja om</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        states: [
          // En förenklad lista med delstater och deras SVG-pathdata
          // För enkelhetens skull inkluderas endast några få delstater här
          {
            name: "California",
            path: "M100,100 L150,150 L200,100 L150,50 Z",
            viewBox: "0 0 300 200"
          },
          {
            name: "Texas",
            path: "M50,150 L100,200 L150,150 L100,100 Z",
            viewBox: "0 0 300 200"
          },
          {
            name: "Florida",
            path: "M200,50 L250,100 L300,50 L250,0 Z",
            viewBox: "0 0 300 200"
          }
          // Lägg till alla 50 delstater med korrekta SVG-pathdata
        ],
        currentState: null,
        userGuess: "",
        guessSubmitted: false,
        isCorrect: false,
        score: 0,
        quizOver: false,
        totalStates: 0,
        usedStates: []
      };
    },
    mounted() {
      // Initierar quizzen
      this.totalStates = this.states.length;
      this.nextState();
    },
    methods: {
      submitGuess() {
        this.guessSubmitted = true;
        // Jämför användarens gissning med delstatens namn (inte skiftlägeskänsligt)
        this.isCorrect =
          this.userGuess.trim().toLowerCase() ===
          this.currentState.name.toLowerCase();
        if (this.isCorrect) {
          this.score++;
        }
        // Lägg till den aktuella delstaten till usedStates
        this.usedStates.push(this.currentState);
      },
      nextState() {
        if (this.states.length === 0) {
          this.quizOver = true;
          return;
        }
        // Välj en slumpmässig delstat som inte har använts än
        const randomIndex = Math.floor(Math.random() * this.states.length);
        this.currentState = this.states.splice(randomIndex, 1)[0];
        this.userGuess = "";
        this.guessSubmitted = false;
        this.isCorrect = false;
      },
      resetQuiz() {
        // Återställer quizzen
        this.states = this.states.concat(this.usedStates);
        this.usedStates = [];
        this.score = 0;
        this.quizOver = false;
        this.totalStates = this.states.length;
        this.nextState();
      }
    }
  };
  </script>
  
  <style>
  .state-quiz {
    max-width: 600px;
    margin: auto;
    text-align: center;
    font-family: Arial, sans-serif;
  }
  
  .state-image {
    margin: 20px 0;
  }
  
  .guess-input {
    margin-bottom: 20px;
  }
  
  .feedback {
    margin-top: 20px;
  }
  
  button {
    padding: 10px 20px;
    font-size: 16px;
  }
  
  input {
    padding: 10px;
    font-size: 16px;
    width: 300px;
  }
  
  </style>
  