<script>
import ProjectCard from "./ProjectCard.vue";

export default {
  props: {
    projects: Array,
    pages: Array,
    title: String,
  },

  components: { ProjectCard },
};
</script>

<template>
  <section>
    <h1 class="my-4">{{ title }}</h1>

    <div v-if="projects.length" class="row g-4">
      <ProjectCard
        v-for="project in projects"
        :key="project.id"
        :project="project"
        class="col-md-4 d-flex"
      />
    </div>
    <h2 v-else class="text-muted my-3">Non ci sono progetti pubblicati</h2>

    <nav aria-label="Projects pagination">
      <ul class="pagination my-4">
        <li v-for="page in pages" class="page-item">
          <button
            type="button"
            class="page-link"
            @click="$emit('changePage', page.url)"
            :class="{
              disabled: !page.url,
              active: page.active,
            }"
            v-html="page.label"
          ></button>
        </li>
      </ul>
    </nav>
  </section>
</template>

<style lang="scss" scoped></style>
