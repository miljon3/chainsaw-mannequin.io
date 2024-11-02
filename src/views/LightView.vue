<template>
  <div class="lightbulb-container">
    <button
      :class="{'light-on': light, 'light-off': !light}"
      @click="toggleLight"
    >
      {{ light ? '💡' : '💤' }}
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      light: true // The light starts as "on"
    };
  },
  methods: {
    toggleLight() {
      this.light = !this.light; // Toggle the light state
    }
  }
};
</script>

<style>
.lightbulb-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

button {
  font-size: 6rem; /* Increase font size for larger lightbulb */
  padding: 30px;    /* Increase padding for a larger clickable area */
  border: none;
  border-radius: 50%; /* Makes the button circular */
  cursor: pointer;
  width: 180px;
  height: 180px;
}

.light-on {
  background-color: yellow;
}

.light-off {
  background-color: gray;
}
</style>
