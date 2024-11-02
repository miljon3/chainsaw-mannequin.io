<template>
    <div class="map-container">
      <svg
        viewBox="0 0 1000 600"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
      >
        <!-- Example path for one state. Add similar paths for other states. -->
        <path
          v-for="(state, index) in states"
          :key="state.name"
          :d="state.path"
          :fill="state.clicked ? 'blue' : 'red'"
          @click="toggleStateColor(index)"
          class="state"
        />
      </svg>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        states: [
          {
            name: "California",
            path: "M150,300 L200,350 L250,300 L200,250 Z", // Example path data for California
            clicked: false
          },
          {
            name: "Texas",
            path: "M300,400 L350,450 L400,400 L350,350 Z", // Example path data for Texas
            clicked: false
          }
          // Add more states with appropriate SVG path data
        ]
      };
    },
    methods: {
      toggleStateColor(index) {
        // Toggle the clicked state, changing the color
        this.states[index].clicked = !this.states[index].clicked;
      }
    }
  };
  </script>
  
  <style>
  .map-container {
    width: 100%;
    max-width: 800px;
    margin: auto;
  }
  
  .state {
    stroke: black;
    stroke-width: 1;
    cursor: pointer;
    transition: fill 0.3s ease;
  }
  </style>
  