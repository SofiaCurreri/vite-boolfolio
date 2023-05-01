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
      <div class="card-header clearfix">
        <span
          v-if="project.type"
          class="badge float-end"
          :style="{ backgroundColor: project.type.color }"
        >
          {{ project.type.label }}
        </span>
        <h2>{{ project.title }}</h2>
      </div>
      <div class="card-body">
        tags
        <hr />
        {{ isDetail ? project.text : abstract }}
      </div>
      <div class="card-footer d-flex justify-content-between">
        Creato il {{ project.created_at }}

        <router-link
          v-if="!isDetail"
          class="btn btn-sm btn-primary"
          :to="{
            name: 'project-detail',
            params: {
              slug: project.slug,
            },
          }"
        >
          Vedi
        </router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
