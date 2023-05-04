<script>
import ProjectList from "../components/ProjectList.vue";

export default {
  name: "TypeProjectsPage",
  components: { ProjectList },
};
</script>

<template>
  <!-- Il primo projects è quello che arriva dal figlio(ProjectList) mentre il secondo è quello del padre(App) scritto nei data -->
  <ProjectList projects-list-type="by-type" class="my-5" />
</template>

<style lang="scss" scoped></style>
