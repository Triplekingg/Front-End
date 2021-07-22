<template>
  <v-app>
    <v-app-bar app color="pink" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://media.discordapp.net/attachments/850372701394829396/867866681166004264/Custom_Controller.png?width=803&height=535"
          transition="scale-transition"
          width="80"
          height="80"
        />
        <h1> GOOD STUFF </h1>


      </div>

      <v-spacer></v-spacer>

    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  theme: { dark: true },
  name: "App",
  data: () => ({
    //
  })
});
// export default new Vuetify({
// theme: { dark: true },
// }) {
//   name: "App",
//
//
//   data: () => ({
//     //
//   }),
// };
</script>
