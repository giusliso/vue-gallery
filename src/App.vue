<template>
  <div id="app">
    <div class="container">
      <AddImage @onImageAdding="addImage($event)"/>
      <ImageGallery @onDeleteImage = "deleteImage($event)" :images="images"/>
    </div>
  </div>
</template>

<script>
import ImageGallery from "./components/ImageGallery";
import AddImage from "./components/AddImage";
import ImageService from "./services/ImageService";
export default {
  name: 'App',
  components: {
    AddImage,
    ImageGallery
  },
  data() {
    return {
      images: []
    }
  },
  methods: {
    addImage: async function (img) {
      await ImageService.addImage(img);
      this.images = await ImageService.getImages();
    },
    deleteImage: async function(img) {
      await ImageService.removeImage(img);
      this.images = await ImageService.getImages();
    }
  },
  created() {
    ImageService.getImages().then(img => this.images = img);
  }
}
</script>

<style lang="scss">
@import "app";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
