<template>
  <v-container>
    <div class="review">
      <h1>This is the review page</h1>

            <v-btn
              color="success"
              class="mr-4"
              @click="logout"
            >
              Logout
            </v-btn>

    </div>
  </v-container>
</template>


<script>
import Vue from "vue";

export default {
  methods: {
    async logout() {
      //submit to backend to logout
      let response = await Vue.axios.get("/api/logout");
      if (response.data.success){
        this.$router.push({ path: "/login" });
      }
    },
  }
};
</script>