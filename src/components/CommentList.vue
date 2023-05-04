<script>
import CommentForm from "./CommentForm.vue";

export default {
  name: "CommentList",
  data() {
    return {};
  },

  components: { CommentForm },
};
</script>

<template>
  <h1 class="my-4">Lista commenti</h1>

  <CommentForm />
</template>

<style lang="scss" scoped></style>
