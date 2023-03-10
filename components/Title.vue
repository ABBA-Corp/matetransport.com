<template lang="html">
  <div class="title-comp">
    <div>
      <h1 v-html="title"></h1>
      <span></span>
    </div>
    <div>
      <p class="colors" v-if="text" v-html="text"></p>
    </div>
  </div>
</template>
<script>
export default {
  props: ["title", "text"],
  data() {
    return {
      loader: true,
    };
  },

};
</script>
<style lang="scss">
.colors{
color: white !important;
}
.loader_fixed {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 2222;
  top: 0;
  left: 0;
  background: red;
}
</style>
