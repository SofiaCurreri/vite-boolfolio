<script>
import CommentForm from "./CommentForm.vue";

export default {
  name: "CommentList",
  data() {
    return {};
  },

  props: {
    project_id: Number,
  },

  components: { CommentForm },
};
</script>

<template>
  <h1 class="my-4">Lista commenti</h1>

  <CommentForm :project_id="project_id" />
</template>

<style lang="scss" scoped></style>
