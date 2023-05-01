<script>
import axios from "axios";
import ProjectCard from "./ProjectCard.vue";
import AppPagination from "./AppPagination.vue";

export default {
  data() {
    return {
      error: false,
      projects: {
        list: [],
        pages: [],
      },
    };
  },

  props: {
    title: String,
  },

  components: { ProjectCard, AppPagination },

  emits: ["changePage"],

  methods: {
    fetchProjects(endpoint = null) {
      //se non ti arriva endpoint usa questo
      if (!endpoint) endpoint = "http://127.0.0.1:8000/api/projects";

      //altrimenti...
      axios
        .get(endpoint)
        .then((response) => {
          this.projects.list = response.data.data;
          this.projects.pages = response.data.links;
        })
        .catch((err) => {
          this.error = err.message;
        });
    },
  },

  created() {
    this.fetchProjects();
  },
};
</script>

<template>
  <section>
    <h1 class="my-4">{{ title }}</h1>

    <div v-if="error" class="alert alert-danger" role="alert">
      {{ error }}
    </div>

    <div v-else-if="projects.list.length" class="row g-4">
      <ProjectCard
        v-for="project in projects.list"
        :key="project.id"
        :project="project"
        :isDetail="false"
        class="col-md-4 d-flex"
      />
    </div>
    <h2 v-else class="text-muted my-3">Non ci sono progetti pubblicati</h2>

    <AppPagination :pages="projects.pages" @changePage="fetchProjects" />
  </section>
</template>

<style lang="scss" scoped></style>
