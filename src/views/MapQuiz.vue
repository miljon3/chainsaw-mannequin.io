<template>
    <div class="guess-states-container">
      <h1>Guess the Top 10 Most Populous US States</h1>
      <p>Select up to 10 states you think are the most populous.</p>
      <form @submit.prevent="submitGuesses">
        <div class="states-list">
          <div
            v-for="(state, index) in states"
            :key="state.name"
            class="state-item"
          >
            <input
              type="checkbox"
              :id="state.name"
              :value="state.name"
              v-model="selectedStates"
              :disabled="isDisabled(state.name)"
            />
            <label :for="state.name">{{ state.name }}</label>
          </div>
        </div>
        <button type="submit" :disabled="selectedStates.length !== 10">
          Submit Guesses
        </button>
      </form>
  
      <div v-if="showResults" class="results">
        <h2>Results</h2>
        <p>You got {{ correctGuesses }} out of 10 correct!</p>
        <h3>Top 10 Most Populous States:</h3>
        <ol>
          <li v-for="state in correctStates" :key="state.name">
            {{ state.name }} (Population: {{ state.population.toLocaleString() }})
          </li>
        </ol>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        states: [
          { name: "Alabama", population: 5024279 },
          { name: "Alaska", population: 733391 },
          { name: "Arizona", population: 7151502 },
          { name: "Arkansas", population: 3011524 },
          { name: "California", population: 39538223 },
          { name: "Colorado", population: 5773714 },
          { name: "Connecticut", population: 3605944 },
          { name: "Delaware", population: 989948 },
          { name: "Florida", population: 21538187 },
          { name: "Georgia", population: 10711908 },
          { name: "Hawaii", population: 1455271 },
          { name: "Idaho", population: 1839106 },
          { name: "Illinois", population: 12812508 },
          { name: "Indiana", population: 6785528 },
          { name: "Iowa", population: 3190369 },
          { name: "Kansas", population: 2937880 },
          { name: "Kentucky", population: 4505836 },
          { name: "Louisiana", population: 4657757 },
          { name: "Maine", population: 1362359 },
          { name: "Maryland", population: 6177224 },
          { name: "Massachusetts", population: 7029917 },
          { name: "Michigan", population: 10077331 },
          { name: "Minnesota", population: 5706494 },
          { name: "Mississippi", population: 2961279 },
          { name: "Missouri", population: 6154913 },
          { name: "Montana", population: 1084225 },
          { name: "Nebraska", population: 1961504 },
          { name: "Nevada", population: 3104614 },
          { name: "New Hampshire", population: 1377529 },
          { name: "New Jersey", population: 9288994 },
          { name: "New Mexico", population: 2117522 },
          { name: "New York", population: 20201249 },
          { name: "North Carolina", population: 10439388 },
          { name: "North Dakota", population: 779094 },
          { name: "Ohio", population: 11799448 },
          { name: "Oklahoma", population: 3959353 },
          { name: "Oregon", population: 4237256 },
          { name: "Pennsylvania", population: 13002700 },
          { name: "Rhode Island", population: 1097379 },
          { name: "South Carolina", population: 5118425 },
          { name: "South Dakota", population: 886667 },
          { name: "Tennessee", population: 6910840 },
          { name: "Texas", population: 29145505 },
          { name: "Utah", population: 3271616 },
          { name: "Vermont", population: 643077 },
          { name: "Virginia", population: 8631393 },
          { name: "Washington", population: 7705281 },
          { name: "West Virginia", population: 1793716 },
          { name: "Wisconsin", population: 5893718 },
          { name: "Wyoming", population: 576851 }
        ],
        selectedStates: [],
        showResults: false,
        correctGuesses: 0,
        correctStates: []
      };
    },
    methods: {
      isDisabled(stateName) {
        return (
          this.selectedStates.length >= 10 &&
          !this.selectedStates.includes(stateName)
        );
      },
      submitGuesses() {
        // Get the top 10 most populous states
        const top10States = this.states
          .slice()
          .sort((a, b) => b.population - a.population)
          .slice(0, 10)
          .map(state => state.name);
  
        // Calculate the number of correct guesses
        this.correctGuesses = this.selectedStates.filter(state =>
          top10States.includes(state)
        ).length;
  
        // Store the correct top 10 states for display
        this.correctStates = this.states
          .filter(state => top10States.includes(state.name))
          .sort((a, b) => b.population - a.population);
  
        this.showResults = true;
      }
    }
  };
  </script>
  
  <style>
  .guess-states-container {
    max-width: 600px;
    margin: auto;
    padding: 20px;
  }
  
  .states-list {
    max-height: 400px;
    overflow-y: scroll;
    border: 1px solid #ccc;
    padding: 10px;
  }
  
  .state-item {
    display: flex;
    align-items: center;
    margin-bottom: 5px;
  }
  
  .state-item input {
    margin-right: 10px;
  }
  
  button {
    margin-top: 20px;
    padding: 10px 20px;
  }
  
  button[disabled] {
    background-color: #ccc;
    cursor: not-allowed;
  }
  
  .results {
    margin-top: 30px;
  }
  
  .results ul,
  .results ol {
    list-style-type: none;
    padding: 0;
  }
  
  .results li {
    margin-bottom: 5px;
  }
  </style>
  