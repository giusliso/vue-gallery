<template>
  <div>
    <div class="d-flex justify-content-center mb-3" v-if="!images">
      <b-spinner variant="primary"  label="Loading..."></b-spinner>
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
            :caption="image.description"
            :text="image.value.description"
            :img-src="image.value.url"
        ></b-carousel-slide>
      </b-carousel>

      <div><b-button style="margin-top: 10px" variant="danger" @click="removeImg(images[slide])">Delete Image</b-button></div>
      <p class="mt-4">
        Description: <strong> {{ images[slide].value.description }} </strong><br>
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
