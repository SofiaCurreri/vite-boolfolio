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
  <router-view></router-view>
</template>

<style lang="scss" scoped></style>
