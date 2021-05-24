<template>
  <div>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Add Image</h5>
          <form
              id="insert-img"
              @submit="checkForm"
              method="post"
              novalidate="true"
          >
            <div class="form-floating mb-3 ">
              <input
                  type="text" class="form-control"
                  id="url" v-model="url"
                  placeholder="Insert URL">
              <label for="url">URL</label>
            </div>
            <div class="form-floating mb-3">
              <input
                  type="text"
                  class="form-control"
                  v-model="description" id="description"
                  placeholder="Insert URL">
              <label for="description">Image Description</label>
            </div>
            <button type="submit" class="btn btn-primary">Send</button>
          </form>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "AddImage",
  data() {
    return {
      url: null,
      description: null
    }
  },
  methods: {
    checkForm: function (e) {
      e.preventDefault();
      if(this.url && this.description){
        this.$emit('onImageAdding', {
          description: this.description,
          url: this.url
        });
        this.url = null;
        this.description = null;
      }
    }
  }
}
</script>

<style scoped>

</style>
