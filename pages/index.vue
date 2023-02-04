<template lang="html">
  <div class="home-page">
    <Banner />
    <div class="carousel-container">
      <div class="container_xl position-relative">
        <div class="ellipse-shodow"></div>
        <div class="ellipse-shodow2"></div>
      </div>
      <div class="carousel-left"></div>
      <PartnersCarousel />
      <div class="carousel-right"></div>
    </div>
    <AboutUs />
    <LogisticCompany />
    <LogisticsServices :services="services" />
    <CoverageMap />
    <AboutLogisticComp />
  </div>
</template>

<script>
import AboutLogisticComp from "../components/AboutLogisticComp.vue";
import AboutUs from "../components/AboutUs.vue";
import Banner from "../components/Banner.vue";
import Chat from "../components/Chat.vue";
import CoverageMap from "../components/CoverageMap.vue";
import LogisticCompany from "../components/LogisticCompany.vue";
import LogisticsServices from "../components/LogisticsServices/LogisticsServices.vue";
import PartnersCarousel from "../components/PartnersCarousel.vue";
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
    Banner,
    PartnersCarousel,
    AboutUs,
    LogisticCompany,
    LogisticsServices,
    CoverageMap,
    AboutLogisticComp,
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
  transition: 2s;
}
body {
  transition: 10s;
}
*{
scroll-behavior: smooth !important;
}
</style>
