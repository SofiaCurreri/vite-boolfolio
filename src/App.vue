<script>
import axios from "axios";
import AppHeader from "./components/AppHeader.vue";
import ProjectList from "./components/ProjectList.vue";

export default {
  data() {
    return {
      title: "Vue Portfolio",
      projects: [],
    };
  },

  components: { AppHeader, ProjectList },

  methods: {
    fetchProjects() {
      axios.get("http://127.0.0.1:8000/api/projects").then((response) => {
        this.projects = response.data;
      });
    },
  },

  created() {
    this.fetchProjects();
  },
};
</script>

<template>
  <AppHeader :title="title" />

  <!-- Il primo projects è quello che arriva dal figlio(ProjectList) mentre il secondo è quello del padre(App) scritto nei data -->
  <ProjectList :projects="projects" title="Projects List" class="my-5" />
</template>

<style lang="scss" scoped></style>
