<script>
import axios from "axios";
import ProjectCard from "../components/ProjectCard.vue";

export default {
  name: "ProjectDetailPage",

  data() {
    return {
      project: null,
    };
  },

  components: { ProjectCard },

  created() {
    //$route è una variabile di cui disponiamo solo se abbiamo il Router
    //params perchè è un parametro
    //id perchè è il parametro che ci serve
    // console.log(this.$route.params.id);

    axios
      .get(`http://127.0.0.1:8000/api/projects/${this.$route.params.slug}`)
      .then((response) => {
        this.project = response.data;
      });
  },
};
</script>

<template>
  <h1 class="my-4">Dettaglio Progetto {{ project?.title }}</h1>
  <ProjectCard v-if="project" :project="project" :isDetail="true" />
</template>

<style lang="scss" scoped></style>
