<template>
  <v-container>
    <div class="review">
      <h1>Here are the top 5 games of the month</h1>
      <p><v-btn
        color="success"
        class="mr-4"
        @click="logout"
      >
        Logout
      </v-btn></p>

      <div class="my-container">
        <vue-aspect-ratio ar="4:3" width="480px">
          <div><v-img
            src="https://i.pinimg.com/originals/42/18/a3/4218a3857b7df8235d454c43ded08b1e.jpg"
          /></div>
        </vue-aspect-ratio>
      </div>
    </div>


  </v-container>

</template>


<script>
import Vue from "vue";
import VueAspectRatio from "vue-aspect-ratio";

export default {

  methods: {
    async logout() {
      //submit to backend to logout
      let response = await Vue.axios.get("/api/logout");
      if (response.data.success){
        this.$router.push({ path: "/login" });
      }
    },
  },
  name: "AmazingComponent",
  components: {
    "vue-aspect-ratio": VueAspectRatio
  }
};
</script>