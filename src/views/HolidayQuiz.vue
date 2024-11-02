<template>
    <div class="holiday-quiz">
      <h2>Gissa vilka svenska helgdagar som också är amerikanska helgdagar</h2>
      <ul>
        <li v-for="(holiday, index) in holidays" :key="holiday.name">
          <label>
            <input
              type="checkbox"
              v-model="holiday.selected"
              :disabled="submitted"
            />
            {{ holiday.name }}
          </label>
        </li>
      </ul>
      <button @click="checkAnswers" :disabled="submitted">Skicka in svar</button>
  
      <div v-if="submitted" class="results">
        <h3>Dina resultat:</h3>
        <p>Du gissade rätt på {{ correctCount }} av {{ totalCommon }} möjliga.</p>
        <ul>
          <li
            v-for="(holiday, index) in holidays"
            :key="holiday.name"
            :class="{
              correct: holiday.isCommon && holiday.selected,
              incorrect: !holiday.isCommon && holiday.selected,
              missed: holiday.isCommon && !holiday.selected
            }"
          >
            {{ holiday.name }} -
            <span v-if="holiday.isCommon">Också en amerikansk helgdag ✅</span>
            <span v-else>Inte en amerikansk helgdag ❌</span>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        submitted: false,
        correctCount: 0,
        totalCommon: 0,
        holidays: [
          { name: "Nyårsdagen (1 januari)", isCommon: true, selected: false },
          { name: "Trettondedag jul (6 januari)", isCommon: false, selected: false },
          { name: "Långfredagen", isCommon: false, selected: false },
          { name: "Påskdagen", isCommon: false, selected: false },
          { name: "Valborgsmässoafton (30 april)", isCommon: false, selected: false },
          { name: "Första maj (1 maj)", isCommon: false, selected: false },
          { name: "Kristi himmelsfärdsdag", isCommon: false, selected: false },
          { name: "Sveriges nationaldag (6 juni)", isCommon: false, selected: false },
          { name: "Midsommarafton", isCommon: false, selected: false },
          { name: "Alla helgons dag", isCommon: false, selected: false },
          { name: "Julafton (24 december)", isCommon: false, selected: false },
          { name: "Juldagen (25 december)", isCommon: true, selected: false },
          { name: "Annandag jul (26 december)", isCommon: false, selected: false }
        ]
      };
    },
    mounted() {
      // Calculate total number of common holidays
      this.totalCommon = this.holidays.filter(holiday => holiday.isCommon).length;
    },
    methods: {
      checkAnswers() {
        this.submitted = true;
        // Calculate the number of correct answers
        this.correctCount = this.holidays.reduce((count, holiday) => {
          if (holiday.isCommon && holiday.selected) {
            return count + 1;
          } else {
            return count;
          }
        }, 0);
      }
    }
  };
  </script>
  
  <style>
  .holiday-quiz {
    max-width: 600px;
    margin: auto;
    font-family: Arial, sans-serif;
  }
  
  .holiday-quiz h2 {
    text-align: center;
  }
  
  .holiday-quiz ul {
    list-style-type: none;
    padding: 0;
  }
  
  .holiday-quiz li {
    margin: 10px 0;
  }
  
  .holiday-quiz button {
    display: block;
    margin: 20px auto;
    padding: 10px 20px;
    font-size: 16px;
  }
  
  .results ul {
    margin-top: 20px;
  }
  
  .results li {
    margin: 5px 0;
  }
  
  .correct {
    color: green;
  }
  
  .incorrect {
    color: orange;
  }
  
  .missed {
    color: red;
  }
  </style>
  