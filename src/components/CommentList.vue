<script>
import axios from "axios";
import CommentForm from "./CommentForm.vue";

export default {
  name: "CommentList",
  data() {
    return {
      comments: {
        list: [],
        links: [],
      },
    };
  },

  props: {
    project_id: Number,
  },

  components: { CommentForm },

  methods: {
    fetchComments() {
      axios
        .get(`http://127.0.0.1:8000/api/project/${this.project_id}/comments`)
        .then((res) => {
          this.comments.list = res.data.data;
        });
    },
  },

  created() {
    this.fetchComments();
  },
};
</script>

<template>
  <ul style="list-style: none" class="my-5">
    <li v-for="comment in comments.list">
      <strong>{{ comment.name }}</strong
      >: {{ comment.message }}
      <hr />
    </li>
  </ul>

  <!--  @addedComment="fetchComments" => dopo che è stato aggiunto un commento dammi di nuovo la lista commenti perchè è cambiata -->
  <CommentForm :project_id="project_id" @addedComment="fetchComments" />
</template>

<style lang="scss" scoped></style>
