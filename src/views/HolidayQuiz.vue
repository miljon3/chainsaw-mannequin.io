<template>
    <div class="holiday-quiz">
      <h2>Guess Which Swedish Holidays are Also U.S. Holidays</h2>
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
      <button @click="checkAnswers" :disabled="submitted">Submit Answers</button>
  
      <div v-if="submitted" class="results">
        <h3>Your Results:</h3>
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
            <span v-if="holiday.isCommon">Also a U.S. holiday ✅</span>
            <span v-else>Not a U.S. holiday ❌</span>
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
        holidays: [
          { name: "New Year's Day (Jan 1)", isCommon: true, selected: false },
          { name: "Epiphany (Jan 6)", isCommon: false, selected: false },
          { name: "Good Friday", isCommon: false, selected: false },
          { name: "Easter Sunday", isCommon: true, selected: false },
          { name: "Walpurgis Night (Apr 30)", isCommon: false, selected: false },
          { name: "May Day (May 1)", isCommon: false, selected: false },
          { name: "Ascension Day", isCommon: false, selected: false },
          { name: "National Day of Sweden (Jun 6)", isCommon: false, selected: false },
          { name: "Midsummer's Eve", isCommon: false, selected: false },
          { name: "All Saints' Day", isCommon: false, selected: false },
          { name: "Christmas Eve (Dec 24)", isCommon: false, selected: false },
          { name: "Christmas Day (Dec 25)", isCommon: true, selected: false },
          { name: "Boxing Day (Dec 26)", isCommon: false, selected: false }
        ]
      };
    },
    methods: {
      checkAnswers() {
        this.submitted = true;
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
  