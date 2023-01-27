<template lang="html">
  <div class="home-page">
    <div class="padding-top"></div>
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
    <LogisticsServices/>
    <CoverageMap />
    <AboutLogisticComp/>
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
import AboutLogisticComp from "../components/AboutLogisticComp.vue"
export default {
  name: "IndexPage",
  components: { Banner, PartnersCard, AboutUs, LogisticCompany, LogisticsServices, CoverageMap,AboutLogisticComp },
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
