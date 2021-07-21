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
          <div>
            <v-img
            src="https://i.pinimg.com/originals/42/18/a3/4218a3857b7df8235d454c43ded08b1e.jpg"
          />
          </div>

          <p>This sentence contains  example text.<br>
            <br>
            As you can see, two breaks add the space above.</p>

          <div><v-img
            src="https://i.redd.it/zaixl992b8s21.png"
          /></div>

          <p>This sentence contains  example text.<br>
            <br>
            As you can see, two breaks add the space above.</p>

          <div><v-img
            src="https://soleposter.com/image/cache/catalog/poster/10071/10071-683x1024.jpg"
          /></div>
          <p>This sentence contains  example text.<br>
            <br>
            As you can see, two breaks add the space above.</p>

          <div><v-img
            src="https://i.pinimg.com/originals/25/67/58/25675897d91a3ee92ce7b0ef29fd1255.jpg"
          /></div>
          <p>This sentence contains  example text.<br>
            <br>
            As you can see, two breaks add the space above.</p>

          <div><v-img
            src="https://www.gbposters.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/f/p/fp4824-the-last-of-us-2-ellie.jpg"
          /></div>
          <p>This sentence contains  example text.<br>
            <br>
            As you can see, two breaks add the space above.</p>

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