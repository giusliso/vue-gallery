<template>
  <div>
    <div class="text-center mt-xxl-5">
      <div class="spinner-grow text-primary spinner" role="status" v-if="images === undefined || images.length === 0">
        <span class="visually-hidden">Loading...</span>
      </div>

    </div>

    <div>
      <b-carousel
          id="carousel-1"
          v-model="slide"
          :interval="4000"
          controls
          indicators
          background="#ababab"
          img-width="1024"
          img-height="100"
          style="text-shadow: 1px 1px 2px #333;"
          @sliding-start="onSlideStart"
          @sliding-end="onSlideEnd"
      >
        <!-- Text slides with image -->
        <b-carousel-slide
            v-for="(image, index) in images"
            v-bind:key="index"
            :caption="index"
            :text="image.value.description"
            :img-src="image.value.url"
        ></b-carousel-slide>
      </b-carousel>

      <p class="mt-4">
        Slide #: {{ slide }}<br>
        Sliding: {{ sliding }}
      </p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ImageGallery',
  props: {
    images: undefined
  },
  data() {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    removeImg: function (img) {
      this.$emit('onDeleteImage', img)
    },
    onSlideStart() {
      this.sliding = true
    },
    onSlideEnd() {
      this.sliding = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
