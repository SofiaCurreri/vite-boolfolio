<script>
import ContactPage from "../pages/ContactPage.vue";
import HomePage from "../pages/HomePage.vue";

export default {
  name: "AppHeader",
};
</script>

<template>
  <nav class="navbar bg-body-tertiary">
    <div class="container">
      <span class="navbar-brand mb-0 h1">Vue Portfolio</span>

      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link :to="{ name: 'home' }" class="nav-link">
            HomePage
          </router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'contacts' }" class="nav-link">
            ContactPage
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style lang="scss" scoped></style>
