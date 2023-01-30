<template lang="html">
  <div class="header" ref="navScroll">
    <div class="header-top">
      <div class="container_xl header-top-grid">
        <div class="d-flex align-items-center header-text-animate">
          <div class="anim-left"></div>
          <p class="slider-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. publishing software like Aldus PageMaker including
            versions of
          </p>
          <div class="anim-right"></div>
        </div>
        <div class="header-links">
          <nuxt-link class="header-top-link" to="/"
            >Careers
            <svg
              width="11"
              height="11"
              viewBox="0 0 11 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="5.5" cy="5.5" r="5.5" fill="#008AFF" />
            </svg>
          </nuxt-link>
          <nuxt-link class="header-top-link" to="/"
            >Contact us
            <svg
              width="11"
              height="11"
              viewBox="0 0 11 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="5.5" cy="5.5" r="5.5" fill="#008AFF" />
            </svg>
          </nuxt-link>
          <nuxt-link class="header-top-btn" to="/"
            ><span>Check my order</span></nuxt-link
          >
        </div>
      </div>
    </div>
    <div class="header-navbar">
      <div class="container_xl header-navbar-items">
        <div class="header-navbar-logo">
          <img src="../../assets/svg/image 2.svg" alt="" />
        </div>
        <div class="header-navbar-nav">
          <ul>
            <li>
              <nuxt-link class="is-active" to="/">How it works</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/">For individuals</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/">For businesses</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/">Why montway</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/">Help</nuxt-link>
            </li>
          </ul>
        </div>
        <div class="header-navbar-btn">
          <div>
            <nuxt-link class="leave-comment" to="/"
              ><span>Zayavka qoldirish</span></nuxt-link
            >
          </div>
        </div>
        <div class="mobile-menu">
          <img src="../../assets/svg/hamburger-menu.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TextCarousel from "./TextCarousel.vue";

export default {
  mounted() {
    console.log(this.$refs);
    var header = this.$refs.navScroll;
    window.addEventListener("scroll", () => {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > 300) {
        header.style.top = "0px";
        header.style.marginTop = "0";
        this.navStyle = true;
      } else {
        header.style.top = "0px";
        header.style.marginTop = "0";
        this.navStyle = true;
      }
      this.lastScrollTop = scrollTop;
    });
  },
  components: { TextCarousel },
};
</script>
<style lang="scss">
.header {
  transition: all 0.3s !important;
  height: auto;
  width: 100%;
  position: fixed;
  left: 0;
  z-index: 2020 !important;
  top: 0;
  background: rgba(255, 255, 255, 0.85);
  box-shadow: 0px 24px 54px -16px rgba(0, 70, 147, 0.12);
  backdrop-filter: blur(25px);
}
.leave-comment {
  position: relative;
  background: #fff;
  overflow: hidden;
  span {
    transition: 0.3s;
  }
  &::before {
    content: "";
    position: absolute;
    overflow: hidden;

    border-radius: 20px;
    left: -1px;
    top: -1px;
    width: calc(100% + 2px);
    height: calc(100% + 2px);
    z-index: -1;
    background: linear-gradient(90deg, #008aff 0%, #005ba8 100%);
  }
  &::after {
    content: "";
    overflow: hidden;
    background: linear-gradient(90deg, #008aff 0%, #005ba8 100%);
    height: 0;
    width: 100%;
    position: absolute;
    bottom: 50%;
    top: 50%;
    left: 0;
    transition: 0.3s;
    border-radius: 20px;
  }
  &:hover {
    &::after {
      top: 0;
      bottom: 0;
      height: 100%;
    }
    span {
      position: relative;
      z-index: 10;
      color: #fff;
    }
  }
}
</style>
