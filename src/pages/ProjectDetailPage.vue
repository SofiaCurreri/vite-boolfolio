<script>
import axios from "axios";
import ProjectCard from "../components/ProjectCard.vue";
import AppLoader from "../components/AppLoader.vue";

export default {
  name: "ProjectDetailPage",

  data() {
    return {
      project: null,
      isLoading: false,
    };
  },

  components: { ProjectCard, AppLoader },

  created() {
    //$route è una variabile di cui disponiamo solo se abbiamo il Router
    //params perchè è un parametro
    //id perchè è il parametro che ci serve
    // console.log(this.$route.params.id);
    this.isLoading = true;

    axios
      .get(`http://127.0.0.1:8000/api/projects/${this.$route.params.slug}`)

      //se la chiamata axios va bene fai questo...
      .then((response) => {
        this.project = response.data;
      })

      //se va male fai questo...
      .catch((err) => {
        this.$router.push({ name: "not-found" });
      })

      //comunque vada fai questo...
      .finally(() => {
        this.isLoading = false;
      });
  },
};
</script>

<template>
  <AppLoader v-if="isLoading" />
  <h1 class="my-4">Dettaglio Progetto {{ project?.title }}</h1>
  <ProjectCard v-if="project" :project="project" :isDetail="true" />
</template>

<style lang="scss" scoped></style>
