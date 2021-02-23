<template>
  <div id="app">
    <b-navbar>
      <template #brand>
        <b-navbar-item tag="router-link" :to="{ name: 'Home' }">
          <b-icon icon="play" class="mr-4"></b-icon>
          <strong>Video Player</strong>
        </b-navbar-item>
      </template>
      <template #start>
        <b-navbar-dropdown label="Content">
          <b-navbar-item tag="router-link" :to="{ name: 'AddVideo' }">
            <b-icon pack="fas" icon="plus" size="is-small" class="mr-2">
            </b-icon
            >Add New Video
          </b-navbar-item>
          <b-navbar-item href="#">
            <b-icon pack="fas" icon="dice-five" size="is-small" class="mr-2">
            </b-icon
            >Random Video
          </b-navbar-item>
          <b-navbar-item tag="router-link" :to="{ name: 'AllVideos' }">
            <b-icon pack="fas" icon="video" size="is-small" class="mr-2">
            </b-icon
            >Full Library
          </b-navbar-item>
        </b-navbar-dropdown>
        <b-navbar-item tag="router-link" :to="{ name: 'About' }">
          About
        </b-navbar-item>
      </template>

      <template #end>
        <b-navbar-item tag="div">
          <div class="buttons">
            <!-- USER IS NOT LOGGED IN -->
            <div v-show="!user">
              <b-button
                tag="router-link"
                :to="{ name: 'Register' }"
                type="is-link"
              >
                Register
              </b-button>
              <b-button
                tag="router-link"
                :to="{ name: 'Login' }"
                type="is-link"
              >
                Login
              </b-button>
            </div>
            <!-- USER IS LOGGED IN -->
            <div v-show="user">
              <b-button type="is-link" @click="logout"> Logout </b-button>
            </div>
          </div>
        </b-navbar-item>
      </template>
    </b-navbar>
    <router-view class="mt-5" />
  </div>
</template>

<script>
import router from "./router";
import { mapGetters } from "vuex";

export default {
  computed: mapGetters(["user"]),
  methods: {
    logout() {
      this.$store.dispatch("logout");
      router.push({ name: "Home" });
    },
  },
};
</script>

<style>
#app {
  text-align: center;
}
</style>
