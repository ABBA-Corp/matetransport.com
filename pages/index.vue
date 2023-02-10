<template lang="html">
  <div class="home-page" id="home-banner">
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
    <CoverageMap :articles="articles" :states="states" />
    <AboutLogisticComp />
  </div>
</template>
<script src="//code.jivosite.com/widget/4Tm0SZmQhV" async></script>
<script>
import AboutLogisticComp from "../components/AboutLogisticComp.vue";
import AboutUs from "../components/AboutUs.vue";
import Banner from "../components/Banner.vue";
import CoverageMap from "../components/CoverageMap.vue";
import LogisticCompany from "../components/LogisticCompany.vue";
import LogisticsServices from "../components/LogisticsServices/LogisticsServices.vue";
import PartnersCarousel from "../components/PartnersCarousel.vue";

// Fetch the computer's MAC address
export default {
  name: "IndexPage",
  data() {
    return {
      services: [],
      articles: [],
      states: [],
    };
  },
  computed: {
    localChange() {
      return this.$i18n.locale;
    },
  },
  mounted() {
    this.__GET_SERVICES();
    this.__GET_ARTICLES();
    this.__GET_STATES();
    console.log(window.navigator);
  },
  methods: {
    async __GET_SERVICES() {
      this.$nextTick(() => {
        this.$nuxt.$loading.start();
      });
      this.services = await this.$store.dispatch(
        "fetchServices/getServices",
        this.$i18n.locale
      );
      this.$nuxt.$loading.finish();
    },
    async __GET_ARTICLES() {
      this.articles = await this.$store.dispatch(
        "fetchArticles/getArticles",
        this.$i18n.locale
      );
    },
    async __GET_STATES() {
      this.states = await this.$store.dispatch(
        "fetchLocations/getStates",
        this.$i18n.locale
      );
    },
  },
  components: {
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
}

* {
  scroll-behavior: smooth !important;
}
</style>
