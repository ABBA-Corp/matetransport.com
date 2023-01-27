<template lang="html">
  <div>
    <Header />
    <div class="header-back"></div>

    <Nuxt />
    <Footer />
  </div>
</template>
<script>
import Header from "../components/layout/Header.vue";
import Footer from "../components/layout/Footer.vue";
export default {
  components: {
    Header,
    Footer,
  },
};
</script>
<style lang="scss">
.header-back {
  height: 129px;
  background: white;
}
</style>
