<template lang="html">
  <div class="home-page">
    <LazyBanner />
    <div class="carousel-container">
      <div class="container_xl position-relative">
        <div class="ellipse-shodow"></div>
        <div class="ellipse-shodow2"></div>
      </div>
      <div class="carousel-left"></div>
      <LazyPartnersCarousel />
      <div class="carousel-right"></div>
    </div>
    <LazyAboutUs />
    <LazyLogisticCompany />
    <LazyLogisticsServices :services="services" />
    <LazyCoverageMap />
    <LazyAboutLogisticComp />
  </div>
</template>

<script>
import Chat from "../components/Chat.vue";
export default {
  name: "IndexPage",
  data() {
    return {
      services: [],
    };
  },
  computed: {
    localChange() {
      return this.$i18n.locale;
    },
  },
  mounted() {
    this.GET_SERVICES();
    this.GET_GOOGLE_API();
  },
  methods: {
    async GET_GOOGLE_API() {
      this.googleApi = await this.$store.dispatch(
        "fetchGoogleApi/getGoogleApi"
      );
    },
    async GET_SERVICES() {
      this.$nextTick(() => {
        this.$nuxt.$loading.start();
      });
      this.services = await this.$store.dispatch(
        "fetchServices/getServices",
        this.$i18n.locale
      );
      console.log(this.services);
      await this.$nuxt.$loading.finish();
    },
  },
  components: {
    Chat,
  },
  watch: {
    localChange(newVal, oldVal) {
      if (newVal != oldVal) {
      }
    },
  },
};
</script>
<style>
.padding-top {
  height: calc(47.97px + 81.97px);
}
.home-page {
  overflow: hidden;
  transition: 1s;
}
</style>
