<template>
  <div class="flex items-center justify-center blog position-relative">
    <div class="swiper mySwiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <PartnersCard />
        </div>
        <div class="swiper-slide">
          <PartnersCard />
        </div>
        <div class="swiper-slide">
          <PartnersCard />
        </div>
        <div class="swiper-slide">
          <PartnersCard />
        </div>
        <div class="swiper-slide">
          <PartnersCard />
        </div>
        <div class="swiper-slide">
          <PartnersCard />
        </div>
        <div class="swiper-slide">
          <PartnersCard />
        </div>
        <div class="swiper-slide">
          <PartnersCard />
        </div>
        <div class="swiper-slide">
          <PartnersCard />
        </div>
        <div class="swiper-slide">
          <PartnersCard />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import Swiper JS
// add or remove unused modules
import Swiper from "swiper/swiper-bundle.js";
import "swiper/swiper-bundle.min.css";
import PartnersCard from "./cards/PartnersCard.vue";
export default {
  mounted() {
    const swiper = new Swiper(".mySwiper", {
      slidesPerView: 3,
      spaceBetween: 24,
      centeredSlides: true,
      loop: true,
      autoplay: {
        delay: 1,
        disableOnInteraction: false,
      },
      speed: 30000,
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        770: {
          slidesPerView: 2,
          spaceBetween: 50,
        },

        771: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        1440: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      },
    });
  },
  components: { PartnersCard },
};
</script>

<style lang="scss">
.carousel-container {
  margin-top: 90px !important;
  max-width: 1920px;
  margin: 0 auto;
}
</style>
