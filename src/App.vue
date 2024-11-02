<template>
  <div>
    <header>
      <div class="logo">
        <!-- You can place your logo here -->
      </div>
      <button class="menu-toggle" @click="toggleMenu">
        ☰
      </button>
      <nav :class="{ open: menuOpen }">
        <RouterLink
          v-for="route in routes"
          :key="route.path"
          :to="route.path"
          @click.native="closeMenu"
        >
          {{ formatRouteName(route.name) }}
        </RouterLink>
      </nav>
    </header>
    <RouterView />
  </div>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router';
import { routes } from './router';

export default {
  name: 'App',
  data() {
    return {
      routes,
      menuOpen: false
    };
  },
  methods: {
    formatRouteName(name) {
      // Capitalize the first letter for display in the navigation bar
      return name.charAt(0).toUpperCase() + name.slice(1);
    },
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    closeMenu() {
      this.menuOpen = false;
    }
  }
};
</script>

<style scoped>
/* Reset some default styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background-color: #333;
}

.logo {
  /* Placeholder for your logo */
  color: #fff;
  font-size: 1.5rem;
}

.menu-toggle {
  display: none;
  font-size: 2rem;
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
}

nav {
  display: flex;
  flex-direction: row;
}

nav a {
  color: #fff;
  text-decoration: none;
  padding: 0 1rem;
  line-height: 1.5;
}

nav a.router-link-exact-active {
  border-bottom: 2px solid #fff;
}

@media (max-width: 768px) {
  .menu-toggle {
    display: block;
  }

  nav {
    position: absolute;
    top: 60px; /* Adjust based on header height */
    left: 0;
    width: 100%;
    background-color: #333;
    flex-direction: column;
    align-items: center;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease-in-out;
  }

  nav.open {
    max-height: 500px; /* Enough to show all links */
  }

  nav a {
    padding: 1rem;
    width: 100%;
    text-align: center;
  }
}
</style>
