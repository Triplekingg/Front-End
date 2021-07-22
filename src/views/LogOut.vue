<template>
  <v-container>
    <div class="logout">
      <h1>You have been logged out</h1>
      <li>
        <router-link to="/login" @click="submit">Click here to log in</router-link>
      </li>
    </div>
  </v-container>
</template>


<script>
import Vue from "vue";

export default {

  methods: {
    async submit() {
      //submit to backend to authenticate
      let response = await Vue.axios.get("/api/logout");
      if (response.data.success) {
        this.$router.push({ path: "/login" });
      }
    }
  }
};
</script>