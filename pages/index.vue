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
import AboutUs from "../components/AboutUs.vue";
import Banner from "../components/Banner.vue";
import PartnersCard from "../components/cards/PartnersCard.vue";
import LogisticCompany from "../components/LogisticCompany.vue";
import PartnersCarousel from "../components/PartnersCarousel.vue";
import LogisticsServices from "../components/LogisticsServices/LogisticsServices.vue";
import CoverageMap from "../components/CoverageMap.vue";
import AboutLogisticComp from "../components/AboutLogisticComp.vue";
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
    Banner,
    PartnersCard,
    AboutUs,
    LogisticCompany,
    LogisticsServices,
    CoverageMap,
    AboutLogisticComp,
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
}
</style>
