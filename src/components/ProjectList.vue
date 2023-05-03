<script>
import axios from "axios";
import ProjectCard from "./ProjectCard.vue";
import AppPagination from "./AppPagination.vue";

export default {
  data() {
    return {
      error: false,
      isLoading: false,
      projects: {
        list: [],
        pages: [],
      },
      type: null,
    };
  },

  props: {
    type: String,
  },

  components: { ProjectCard, AppPagination },

  emits: ["changePage"],

  methods: {
    fetchProjects(endpoint = null) {
      this.isLoading = true;

      //se non ti arriva endpoint usa questo
      if (!endpoint) endpoint = this.baseEndpoint;

      //altrimenti...
      axios
        .get(endpoint)
        .then((response) => {
          this.projects.list = response.data.projects.data;
          this.projects.pages = response.data.projects.links;
          if (response.data.type) this.type = response.data.type;
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

  computed: {
    title() {
      if (this.type == "most-recent") return "Progetti più recenti";
      if (this.type == "by-type")
        return this.type
          ? "Progetti del tipo" + this.type.label
          : "Progetti filtrati per tipo";
      return "Lista progetti";
    },

    baseEndpoint() {
      if (this.type == "most-recent")
        return "http://127.0.0.1:8000/api/projects";
      if (this.type == "by-type")
        return (
          "http://127.0.0.1:8000/api/type" +
          this.$route.params.type_id +
          "/projects"
        );
      return "http://127.0.0.1:8000/api/projects";
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
