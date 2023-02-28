<template>
  <div v-if="loader" class="data_loader">
    <cube-spin></cube-spin>
  </div>
</template>
<script>
import CubeSpin from "vue-loading-spinner/src/components/RotateSquare2.vue";
export default {
  components: { CubeSpin },
  props: ["loader"],
};
</script>
<style lang="scss">
.data_loader {
  position: fixed;
  z-index: 2050;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: #fff;
}
.spinner {
  &::after {
    background-color: rgb(0, 138, 255) !important;
  }
}
</style>
