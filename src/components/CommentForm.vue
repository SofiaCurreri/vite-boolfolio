<script>
import axios from "axios";

export default {
  name: "CommentForm",

  data() {
    return {
      comment: {
        name: "",
        email: "",
        message: "",
      },
    };
  },

  props: {
    project_id: Number,
  },

  methods: {
    sendComment() {
      const comment = {
        project_id: this.project_id,
        name: this.comment.name,
        email: this.comment.email,
        message: this.comment.message,
      };

      axios.post();
    },
  },
};
</script>

<template>
  <h3 class="offset-3 my-4">Invia un commento</h3>
  <form action="" @submit.prevent="sendComment">
    <div class="row my-3">
      <div class="col-3 text-end">
        <label for="comment_name">Nome: </label>
      </div>
      <div class="col-9">
        <input
          type="text"
          class="form-control"
          id="comment_name"
          v-model="name"
        />
      </div>
    </div>

    <div class="row my-3">
      <div class="col-3 text-end">
        <label for="comment_email">Email: </label>
      </div>
      <div class="col-9">
        <input
          type="email"
          class="form-control"
          id="comment_email"
          v-model="email"
        />
      </div>
    </div>

    <div class="row my-3">
      <div class="col-3 text-end">
        <label for="comment_message">Messaggio: </label>
      </div>
      <div class="col-9">
        <textarea
          v-model="message"
          id="comment_message"
          class="form-control"
        ></textarea>
      </div>
    </div>

    <div class="row my-3">
      <div class="col-9 offset-3">
        <button type="submit" class="btn btn-primary">Invia</button>
      </div>
    </div>
  </form>
</template>

<style lang="scss" scoped></style>
