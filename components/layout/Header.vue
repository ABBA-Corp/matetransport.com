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
        <div class="header-navbar-logo" @click="show">
          <img src="../../assets/svg/image 2.svg" alt="" />
        </div>

        <div class="header-navbar-nav">
          <ul>
            <li>
              <nuxt-link class="is-active" :to="localePath('/inner-news')"
                >How it works</nuxt-link
              >
            </li>
            <li>
              <nuxt-link :to="localePath('/')">For individuals</nuxt-link>
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
          <el-dropdown
            trigger="click"
            class="nav_lang"
            @command="handleCommand"
          >
            <span class="el-dropdown-link">
              Рус<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown" class="nav_drop">
              <el-dropdown-item
                v-for="locale in availableLocales"
                :key="locale.code"
                :command="locale.code"
                >{{ locale.name }}</el-dropdown-item
              >
            </el-dropdown-menu>
          </el-dropdown>
          <div>
            <nuxt-link class="leave-comment" to="/"
              ><span>Zayavka qoldirish</span></nuxt-link
            >
          </div>
        </div>
        <div class="mobile-menu" @click="drawerOpen">
          <img src="../../assets/svg/hamburger-menu.svg" alt="" />
        </div>
      </div>
      <modal name="modal_header" width="590px" height="auto">
        <div class="modal_container">
          <div class="modal_header d-flex justify-content-between">
            <h5>Tezkor aloqa</h5>
            <span @click="hide"
              ><svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.66699 6.646L17.333 17.31M6.66699 17.31L17.333 6.646"
                  stroke="#024E90"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                /></svg
            ></span>
          </div></div
      ></modal>
    </div>
  </div>
</template>
<script>
import TextCarousel from "./TextCarousel.vue";

import Drawer from "vue-drawer";
export default {
  props: {
    drawerOpen: {
      type: Function,
    },
  },
  data() {
    return {
      translations: [],
      drawerShow: false,
    };
  },
  computed: {
    availableLocales() {
      return this.$i18n.locales;
    },
  },

  methods: {
    show() {
      this.$modal.show(`modal_header`);
    },
    hide() {
      this.$modal.hide(`modal_header`);
    },
    handleCommand(command) {
      this.$i18n.setLocale(command);
      this.GET_STATIC_INFORMATIONS(command);
      this.$store.commit("getTranslations", command);
    },
    drawerToggle() {
      this.drawerShow = !this.drawerShow;
    },
    async GET_TRANSLATIONS(command) {
      this.translations = this.$store.dispatch(
        "fetchTranslations/getTranslations",
        command
      );
    },
    async GET_STATIC_INFORMATIONS() {
      const info = await this.$store.dispatch(
        "fetchStaticInformations/getStaticInformations",
        this.$i18n.locale
      );
      await this.$store.commit("getInfo", info);
    },
  },
  mounted() {
    this.GET_STATIC_INFORMATIONS();

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
  components: { TextCarousel, Drawer },
};
</script>
<style lang="scss">
.header {
  transition: all 0.3s !important;
  height: auto;
  width: 100%;
  position: fixed;
  left: 0;
  z-index: 2006 !important;
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
.el-drawer__wrapper {
  z-index: 2009 !important;
}
</style>
