<script>
import axios from "axios";
import AppHeader from "./components/AppHeader.vue";
import ProjectList from "./components/ProjectList.vue";

export default {
  data() {
    return {
      title: "Vue Portfolio",
      projects: {
        list: [],
        pages: [],
      },
    };
  },

  components: { AppHeader, ProjectList },

  emits: ["changePage"],

  methods: {
    fetchProjects(endpoint = null) {
      //se non ti arriva endpoint usa questo
      if (!endpoint) endpoint = "http://127.0.0.1:8000/api/projects";

      //altrimenti...
      axios.get(endpoint).then((response) => {
        this.projects.list = response.data.data;
        this.projects.pages = response.data.links;
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
  <ProjectList
    :projects="projects.list"
    :pages="projects.pages"
    @changePage="fetchProjects"
    title="Most recent"
    class="my-5"
  />
</template>

<style lang="scss" scoped></style>
