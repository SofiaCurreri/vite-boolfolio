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
      errors: [],

      success: false,
    };
  },

  props: {
    project_id: Number,
  },

  methods: {
    sendComment() {
      //ad ogni chiamata svuotiamo la lista errori (la svuotiamo degli errori precedenti)
      this.errors = [];

      this.success = false;

      const comment = {
        project_id: this.project_id,
        name: this.comment.name,
        email: this.comment.email,
        message: this.comment.message,
      };

      axios
        .post("http://127.0.0.1:8000/api/comments", comment)
        .then((res) => {
          console.log(res);

          //se richiesta è andata a buon fine svuotiamo i contenitori di questi elementi una volta inviato il commento
          this.comment.name = "";
          this.comment.email = "";
          this.comment.message = "";

          this.success = true;
        })
        .catch((err) => {
          console.log(err.response.data);
          const response_errors = err.response.data.errors;
          for (const field in response_errors) {
            this.errors.push(response_errors[field][0]);
          }
        })
        .finally(() => {});
    },
  },
};
</script>

<template>
  <h3 class="offset-3 my-4">Invia un commento</h3>

  <div v-if="errors.length" class="alert alert-danger" role="alert">
    <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>
  </div>

  <div v-if="success" class="alert alert-success" role="alert">
    Il commento è stato inviato con successo
  </div>

  <form @submit.prevent="sendComment">
    <div class="row my-3">
      <div class="col-3 text-end">
        <label for="comment_name">Nome: </label>
      </div>
      <div class="col-9">
        <input
          type="text"
          class="form-control"
          id="comment_name"
          v-model="comment.name"
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
          v-model="comment.email"
        />
      </div>
    </div>

    <div class="row my-3">
      <div class="col-3 text-end">
        <label for="comment_message">Messaggio: </label>
      </div>
      <div class="col-9">
        <textarea
          v-model="comment.message"
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
