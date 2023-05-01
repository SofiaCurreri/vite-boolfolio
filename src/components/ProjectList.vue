<script>
import axios from "axios";
import ProjectCard from "./ProjectCard.vue";
import AppPagination from "./AppPagination.vue";
import AppLoader from "./AppLoader.vue";

export default {
  data() {
    return {
      error: false,
      isLoading: false,
      projects: {
        list: [],
        pages: [],
      },
    };
  },

  props: {
    title: String,
  },

  components: { ProjectCard, AppPagination, AppLoader },

  emits: ["changePage"],

  methods: {
    fetchProjects(endpoint = null) {
      this.isLoading = true;

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
          console.log(err);
          this.error = err.message;
        })
        .finally(() => {
          //ogni volta che fetch finisce, a prescindere da come è andato (che abbia errori o no) il loading finisce
          this.isLoading = false;
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
    <AppLoader v-if="isLoading" />

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
