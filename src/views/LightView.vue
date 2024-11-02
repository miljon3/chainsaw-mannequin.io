<template>
  <div class="lightbulb-container">
    <button
      v-for="(light, index) in lights"
      :key="index"
      :class="{'light-on': light, 'light-off': !light}"
      @click="toggleLight(index)"
    >
      {{ light ? '💡' : '💤' }}
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lights: [true, true, true] // All lights start as "on"
    };
  },
  methods: {
    toggleLight(index) {
      this.lights[index] = !this.lights[index]; // Toggle the light state
    }
  }
};
</script>

<style>
.lightbulb-container {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}

button {
  font-size: 4rem; /* Increase font size for larger lightbulbs */
  padding: 20px; /* Increase padding for a larger clickable area */
  border: none;
  border-radius: 50%; /* Makes the buttons circular */
  cursor: pointer;
  width: 120px;
  height: 120px;
}

.light-on {
  background-color: yellow;
}

.light-off {
  background-color: gray;
}
</style>
