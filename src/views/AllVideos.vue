<template>
  <div>
    <div class="columns">
      <div class="column is-half">
        <div v-for="video in all_videos" :key="video.id">
          <VideoCard v-bind:params="video" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VideoCard from "../components/VideoCard";
import axios from "axios";

export default {
  name: "AllVideos",
  components: {
    VideoCard,
  },
  data() {
    return {
      all_videos: [],
    };
  },
  mounted() {
    // Get all videos
    const req_url = this.api_route + "content/videos";
    axios.get(req_url).then(
      (response) => {
        this.all_videos = response.data;
      },
      (error) => {
        console.log(error);
      }
    );
  },
};
</script>

<style scoped>
</style>