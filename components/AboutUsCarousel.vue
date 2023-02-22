<template lang="html">
  <div>
    <div
      class="flex items-center justify-center blog position-relative about-us-carousel"
    >
      <div class="swiper mySwiper-steps">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <AboutUsSteps :img="1" />
          </div>
          <div class="swiper-slide">
            <AboutUsSteps :img="2" />
          </div>
          <div class="swiper-slide">
            <AboutUsSteps :img="3" />
          </div>
          <div class="swiper-slide">
            <AboutUsSteps :img="4" />
          </div>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
    <div
      class="flex items-center justify-center blog position-relative about-us-carousel-mobile"
    >
      <div class="swiper mySwiper-steps-mobile">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <AboutUsSteps :img="1" />
          </div>
          <div class="swiper-slide">
            <AboutUsSteps :img="2" />
          </div>
          <div class="swiper-slide">
            <AboutUsSteps :img="3" />
          </div>
          <div class="swiper-slide">
            <AboutUsSteps :img="4" />
          </div>
        </div>
      </div>
      <div class="swiper-pagination-mobile"></div>
      <div class="banner-form-btn mt-5 about-us-btns-mobile">
        <a class="contact-btn" :href="`tel:${$store.state.staticInfo.nbm}`">
          {{ $store.state.translations[`main.howWeWork_call`] }}
        </a>
        <div class="form-btn" v-if="img != 4">
          {{ $store.state.translations["main.form_btn_nextStage"]
          }}<svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.9565 6.28711L18.6695 12.0001L12.9565 17.7131M5.35547 12.0001H18.6525"
              stroke="white"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
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
import AboutUsSteps from "./cards/AboutUsSteps.vue";
import PartnersCard from "./cards/PartnersCard.vue";
export default {
  props: ["reviews"],
  mounted() {
    const swiper = new Swiper(".mySwiper-steps", {
      slidesPerView: 1,
      direction: "vertical",
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
      },
      navigation: {
        nextEl:
          ".swiper-slide .about-us-grid .about-us-info .banner-form-btn .form-btn ",
        prevEl: ".swiper-slide .swiper-button-prev",
      },

      speed: 1000,
    })
    const swiper2 = new Swiper(".mySwiper-steps-mobile", {
      slidesPerView: 1,
      pagination: {
        el: ".swiper-pagination-mobile",
        type: "bullets",
        clickable: true,
      },
      navigation: {
        nextEl: ".banner-form-btn .form-btn ",
        prevEl: ".swiper-slide .swiper-button-prev",
      },

      speed: 1000,
    });
  },
  components: { PartnersCard, AboutUsSteps },
};
</script>

<style lang="scss">
.mySwiper-steps {
  height: calc(519px + 80px);
}
.about-us-carousel-mobile {
  display: none;
}
@media (max-width: 1000px) {
  .mySwiper-steps {
    height: 1000px;
    background: red;
  }
  .about-us-carousel-mobile {
    display: block;
  }
  .about-us-carousel {
    display: none;
  }
}
.swiper-pagination-bullets {
  left: 10px !important;
}
.about-us-btns-mobile {
  .swiper-button-disabled {
    display: none;
  }
}
</style>
