<template class="eachreview">
  <v-container >
    <div >
      <h1>Here are the top 5 games of the month</h1>
      <p align="right"><v-btn
        color="success"
        class="mr-4"
        @click="logout"
      >
        Logout
      </v-btn></p>

      <div class="my-container" >
        <div class="box1">
            <div class="image"><v-img
              src="https://wallpapershome.com/images/pages/pic_h/18292.jpg"
            /></div>
          <div class="parent grid-parent">
            <div class="child">
            </div>
            <div class="child">
              <v-btn
                color="success"
                class="mr-4"
                @click="submitFortnite"
              >
                Test
              </v-btn>

            </div>
          </div>

        </div>

      </div>
    </div>


  </v-container>

</template>


<script>
import Vue from "vue";
// import VueAspectRatio from "vue-aspect-ratio";

export default {
  data: () => ({
    valid: true,
    review: null,
    fortnite: "Fortnite",
    reviewRules: [(v) => !!v || "Review cannot be empty"],
  }),

  methods: {
    async logout() {
      //submit to backend to logout
      let response = await Vue.axios.get("/api/logout");
      if (response.data.success){
        this.$router.push({ path: "/login" });
      }
    },
      async submitFortnite() {
          let reviews = this.$session.get("reviews");
          this.review = reviews;
      },
      redirection(){
        this.$router.push({ path: "/" });
      },
      reset() {
        this.$refs.form.reset();
      },
    }
  ,
  // name: "AmazingComponent",
  // components: {
  //   "vue-aspect-ratio": VueAspectRatio
  // }
};
</script>
<style scoped src="../assets/css/review.css">
@import '../assets/css/review.css';
</style>