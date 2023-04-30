<script>
import AppHeader from "./components/AppHeader.vue";
import HomePage from "./pages/HomePage.vue";
import ContactPage from "./pages/ContactPage.vue";

export default {
  data() {
    return {
      title: "Vue Portfolio",
    };
  },

  components: { AppHeader, HomePage, ContactPage },
};
</script>

<template>
  <AppHeader :title="title" />
  <main class="container">
    <router-view></router-view>
  </main>
</template>

<style lang="scss" scoped></style>
