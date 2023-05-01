<script>
export default {
  props: {
    project: Object,
  },
};
</script>

<template>
  <div>
    <div class="card">
      <div class="card-header">
        <h2>{{ project.title }}</h2>
      </div>
      <div class="card-body">
        {{ project.text }}
      </div>
      <div class="card-footer d-flex justify-content-between">
        Creato il {{ project.created_at }}

        <router-link
          class="btn btn-sm btn-primary"
          :to="{
            name: 'project-detail',
            params: {
              id: project.id,
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
