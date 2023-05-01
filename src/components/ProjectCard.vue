<script>
export default {
  name: "ProjectCard",
  props: {
    project: Object,
    isDetail: Boolean,
  },

  computed: {
    abstract() {
      return this.project.text.slice(0, 200);
    },
  },
};
</script>

<template>
  <div>
    <div class="card">
      <div class="card-header d-flex justify-content-between">
        <h2>{{ project.title }}</h2>
        <span class="badge">{{ project.type.label }}</span>
      </div>
      <div class="card-body">
        {{ isDetail ? project.text : abstract }}
      </div>
      <div class="card-footer d-flex justify-content-between">
        Creato il {{ project.created_at }}

        <router-link
          class="btn btn-sm btn-primary"
          :to="{
            name: 'project-detail',
            params: {
              slug: project.slug,
            },
          }"
          v-if="!isDetail"
        >
          Vedi
        </router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
