<template lang="html">
  <div>
    <Chat />
    <Header />
    <div class="header-back"></div>
    <Nuxt />
    <Footer />
  </div>
</template>
<script>
import Header from "../components/layout/Header.vue";
import Footer from "../components/layout/Footer.vue";
import Chat from "../components/Chat.vue";
export default {
  components: {
    Header,
    Footer,
    Chat
},
};
</script>
<style lang="scss">


</style>
