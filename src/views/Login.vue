<template>
  <div class="columns">
    <div class="column is-one-third is-offset-one-third">
      <div class="hero is-primary mb-4">
        <div class="hero-body">
          <p class="title">Login</p>
          <p class="subtitle">Enter your username and password below.</p>
        </div>
      </div>
      <div class="hero is-primary">
        <div class="hero-body mx-6 my-4">
          <form @submit="loginUser">
            <b-field class="mb-5">
              <template #label>
                <h5 class="title is-6">Username</h5>
              </template>
              <b-input
                v-model="username"
                placeholder="Enter Username..."
              ></b-input>
            </b-field>
            <b-field class="mb-5">
              <template #label>
                <h5 class="title is-6">Password</h5>
              </template>
              <b-input
                type="password"
                v-model="password"
                placeholder="Enter Password..."
                password-reveal
              ></b-input>
            </b-field>
            <hr class="mt-6" />
            <div class="buttons mt-6 is-centered">
              <b-button native-type="submit" type="is-primary" inverted
                >Login</b-button
              >
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { loginUser } from "../api/user";
import router from "../router";

export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    loginUser(event) {
      event.preventDefault();
      const user = {
        username: this.username,
        password: this.password,
      };
      loginUser(user).then(
        // eslint-disable-next-line no-unused-vars
        (response) => {
          console.log(response);
          this.$store.commit("setUserToken", response.data.token);
          this.$store.commit("setUser", response.data.user);
          router.push({ name: "Home" });
        }, // eslint-disable-next-line no-unused-vars
        (error) => {
          this.$buefy.toast.open({
            duration: 5000,
            message: "Username / Password are incorrect, try again.",
            position: "is-bottom",
            type: "is-danger",
          });
        }
      );
    },
    checkPassword(password) {
      // implement this
      return password != "";
    },
  },
};
</script>

<style scoped>
</style>