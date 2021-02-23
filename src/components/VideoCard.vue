<template>
  <div class="card">
    {{ params.title }}
    <b-image
      :src="params.thumbnail_url"
      alt="A random image"
      ratio="6by4"
    ></b-image>
  </div>
</template>

<script>
export default {
  props: ["params"],
};
</script>

<style scoped>
</style>