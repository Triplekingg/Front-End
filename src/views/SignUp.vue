<template>
  <v-container>
    <h3>Please note that the username is not case sensitive</h3>

    {{ error }}
    <template>
      <v-form
        ref="form"
        v-model="valid"
        lazy-validation
      >
        <v-text-field
          v-model="username"
          :rules="usernameRules"
          label="Username"
          required
        ></v-text-field>

        <v-text-field
          v-model="displayName"
          :rules="displayNameRules"
          label="Display Name"
          required
        ></v-text-field>

        <v-text-field
          type="password"
          v-model="password"
          :rules="passwordRules"
          label="Password"
          required
        ></v-text-field>

        <v-text-field
          type="password"
          v-model="confirmPassword"
          :rules="passwordRules"
          label="Confirm Password"
          required
        ></v-text-field>

        <v-btn
          :disabled="!valid"
          color="success"
          class="mr-4"
          @click="submit"
          href="/"
        >
          Sign Up
        </v-btn>

        <v-btn color="error" class="mr-4" @click="reset">Reset</v-btn>

        <v-btn
          color="success"
          class="mr-4"
          @click="redirection"
        >
          Back
        </v-btn>

      </v-form>
    </template>
  </v-container>
</template>

<script>
import Vue from "vue";

export default {
  data: () => ({
    error: "",
    valid: true,
    username: "",
    displayName: "",
    password: "",
    confirmPassword: "",
    usernameRules: [(v) => !!v || "Username is required"],
    displayNameRules: [(v) => !!v || "Display Name is required"],
    passwordRules: [(v) => !!v || "Password is required"]
  }),

  methods: {
    async submit() {
      if (this.$refs.form.validate()) {
        //submit to backend to create user
        let formData = new FormData();
        formData.append("username", this.username);
        formData.append("password", this.password);
        formData.append("displayName", this.displayName);

        let response = await Vue.axios.post("/api/signup", formData);
        if (response.data.success) {
          this.$router.push({ path: "/login" });
        } else {
          this.$router.push({ path: "/about" });
        }
      }
    }, redirection() {
      this.$router.push({ path: "/" });
    },
    reset() {
      this.$refs.form.reset();
    }
  },
  name: "SignUp"
};
</script>