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
    <div class="card w-100">
      <div class="card-header clearfix">
        <router-link
          :to="{
            name: 'type-projects',
            params: {
              type_id: project.type_id,
            },
          }"
          v-if="project.type"
          class="badge float-end"
          :style="{
            backgroundColor: project.type.color,
            textDecoration: 'none',
          }"
        >
          {{ project.type.label }}
        </router-link>
        <h2>{{ project.title }}</h2>
      </div>
      <div class="card-body">
        <div class="clearfix">
          <img
            :src="project.image"
            class="img-fluid float-end ms-3 mb-1"
            width="100"
            :alt="project.slug"
          />
          {{ isDetail ? project.text : abstract }}
        </div>
        <div v-if="project.technologies.length">
          <hr />
          <span
            v-for="technology in project.technologies"
            :key="technology.id"
            class="badge rounded-pill me-2"
            :style="{ backgroundColor: technology.color }"
          >
            {{ technology.label }}
          </span>
        </div>
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
