<template class="eachreview" xmlns:th="http://www.w3.org/1999/xhtml">
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
            <div class="child" >
              {{review}}
<!--              <tbody>-->
<!--              <tr th:if="${fortniteReviews.empty}">-->
<!--                <td colspan="2"> No Reviews Available </td>-->
<!--              </tr>-->
<!--              <tr th:each="review : ${fortniteReviews}">-->
<!--                <td><span th:text="${review}">  </span></td>-->
<!--              </tr>-->
<!--              </tbody>-->
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
import store from "@/store"
// import Component from 'vue-class-component'
// import VueAspectRatio from "vue-aspect-ratio";
// new Vue({
//   data() {
//     vueProp: 'vue variable' // visible to template
//   }
// });
export default {
  data: () => ({
    blah:"hi",
    vueProp: 'vue variable',
    valid: true,
    review: null,
    fortnite: "Fortnite",
    reviewRules: [(v) => !!v || "Review cannot be empty"],
    //  async submitFortnitetest() {
    //   let response = await Vue.axios.get("/api/review");
    //   this.blah=response.data.Test;
    //
    //   // await store.dispatch("setFortnite", response.data);
    //   // return store.state.fortniteReviews;
    //   // this.blah = blah;
    //   // this.review = response.data.Reviews;
    // },
    async submitFortnite() {
      let response = await Vue.axios.get("/api/review");
      await store.dispatch("setFortnite", response.data);
      this.review = response.data.reviews;
    },
    // get someblah(){
    //   return this.blah;
    // }
  }),
  beforeMount(){
    this.submitFortnite();
  },

  methods: {

    async logout() {
      //submit to backend to logout
      let response = await Vue.axios.get("/api/logout");
      if (response.data.success){
        this.$router.push({ path: "/login" });
      }
    },
      // async submitFortnite() {
      //   let response = await Vue.axios.get("/api/review");
      //   await store.dispatch("setFortnite", response.data);
      //   let blah = response.data.Test;
      //   this.blah = blah;
      //   this.review = response.data.Reviews;
      // },
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