<template lang="html">
  <div>
    <el-drawer
      title="I am the title"
      :visible.sync="drawer"
      :with-header="false"
    >
      <span>Hi there!</span>
      <button @click="drawerClose">close</button>
    </el-drawer>

    <Chat />
    <Header :drawerOpen="drawerOpen" />
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
  data() {
    return {
      drawer: false,
    };
  },
  methods: {
    drawerOpen() {
      this.drawer = true;
    },
    drawerClose() {
      this.drawer = false;
    },
  },
  components: {
    Header,
    Footer,
    Chat,
  },
};
</script>
<style lang="scss">
.v-modal {
  z-index: 2006 !important;
}
@media (max-width: 576px) {
  .el-drawer {
    width: 80% !important;
  }
}
</style>
