<template>
  <div class="home">
    Welcome home!!!

    <div v-show="user">It's nice to see you again {{ user.username }}</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Home",
  computed: mapGetters(["user"]),
};
</script>
