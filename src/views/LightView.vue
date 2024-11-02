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
      // Initialize three lights in the "on" state (true)
      lights: [true, true, true]
    };
  },
  methods: {
    toggleLight(index) {
      // Toggle the light's state
      this.lights[index] = !this.lights[index];
    }
  }
};
</script>

<style>
.lightbulb-container {
  display: flex;
  justify-content: space-around;
}

button {
  font-size: 2rem;
  padding: 10px;
  border: none;
  cursor: pointer;
}

.light-on {
  background-color: yellow;
}

.light-off {
  background-color: gray;
}
</style>
