<template>
  <div class="columns">
    <div class="card p-4 column is-half is-offset-one-quarter">
      <h3 class="subtitle is-3">Add New Video</h3>
      <hr />
      <section>
        <b-field
          horizontal
          label="URL"
          :type="url_message_type"
          :message="error_message"
        >
          <b-input
            v-model="url"
            placeholder="Enter YouTube URL..."
            autocomplete="off"
            :disabled="url_verified ? true : false"
            expanded
          ></b-input>
        </b-field>

        <div v-show="url_verified">
          <b-field horizontal label="Title">
            <b-input v-model="video_title" expanded disabled></b-input>
          </b-field>
          <b-field horizontal label="Author">
            <b-input v-model="video_author" expanded disabled></b-input>
          </b-field>
          <b-image :src="thumbnail_url" ratio=""></b-image>
        </div>

        <b-field class="mt-5">
          <p class="control">
            <b-button
              :label="url_verified ? 'Add to Database' : 'Get Video Data'"
              type="is-primary"
              :loading="loading"
              @click="submitVideo"
            />
          </p>
        </b-field>
      </section>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "AddVideo",
  data() {
    return {
      url: "",
      loading: false,
      error_message: "",
      url_message_type: "none",
      url_verified: false,
      thumbnail_url: "",
      video_title: "",
      video_author: "",
    };
  },

  methods: {
    submitVideo() {
      if (this.url_verified) {
        this.addVideo();
      } else {
        this.getVideoData();
      }
    },
    addVideo() {
      this.loading = true;
      const req_url = this.api_route + "content/video";
      const user_id = 1;
      const urlParams = new URLSearchParams(this.url.split("?")[1]);
      const youtube_id = urlParams.get("v");
      axios
        .post(req_url, {
          title: this.video_title,
          author: this.video_author,
          url: this.url,
          thumbnail_url: this.thumbnail_url,
          user_id: user_id,
          youtube_id: youtube_id,
        })
        .then(
          (response) => {
            if (Object.keys(response.data).length === 0) {
              this.$buefy.toast.open({
                message: `Video Already Exists`,
                type: "is-warning",
              });
            } else {
              this.$buefy.toast.open({
                message: `Added Video: ${response.data.title}`,
                type: "is-success",
              });
            }
          },
          (error) => {
            console.log(error);
            this.$buefy.toast.open({
              message: `Error. Could not add video`,
              type: "is-danger",
            });
          }
        );
      this.url_verified = false;
      this.url_message_type = "none";
      this.url = "";
      this.loading = false;
    },
    getVideoData() {
      this.loading = true;
      const urlParams = new URLSearchParams(this.url.split("?")[1]);
      const youtube_id = urlParams.get("v");
      if (this.url == "") {
        this.error_message = "Please enter a YouTube URL";
        this.url_message_type = "is-danger";
        this.url_verified = false;
        this.loading = false;
      } else if (youtube_id == null) {
        this.error_message = "Invalid YouTube URL";
        this.url_message_type = "is-danger";
        this.url_verified = false;
        this.loading = false;
      } else {
        const req_url = this.api_route + "content/video/metadata/" + youtube_id;
        axios.get(req_url).then(
          (response) => {
            if (Object.keys(response.data).length === 0) {
              this.error_message = "Error collecting Video Title/Thumbnail";
              this.url_verified = false;
              this.url_message_type = "is-danger";
            } else {
              this.thumbnail_url = response.data.thumbnail_url;
              this.video_title = response.data.title;
              this.video_author = response.data.author;
              this.error_message = "";
              this.url_message_type = "is-success";
              this.url_verified = true;
            }
            this.loading = false;
          },
          (error) => {
            console.log(error);
          }
        );
      }
    },
  },
};
</script>

<style scoped>
</style>