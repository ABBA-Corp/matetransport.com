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
          <span class="header-top-link"
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
          </span>
          <span class="header-top-link" @click="show('modal_header')"
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
          </span>
          <nuxt-link class="header-top-btn" to="/"
            ><span>Check my order</span></nuxt-link
          >
        </div>
      </div>
    </div>
    <div class="header-navbar">
      <div class="container_xl header-navbar-items">
        <nuxt-link class="header-navbar-logo" :to="localePath('/')">
          <img src="../../assets/svg/image 2.svg" alt="" />
        </nuxt-link>

        <div class="header-navbar-nav">
          <ul>
            <li>
              <a class="is-active" href="#howItWorks">How it works</a>
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
            <div class="leave-comment" @click="show('modal_leave_weak')">
              <span>Zayavka qoldirish</span>
            </div>
          </div>
        </div>
        <div class="mobile-menu" @click="drawerOpen">
          <img src="../../assets/svg/hamburger-menu.svg" alt="" />
        </div>
      </div>
      <modal name="modal_header" width="440px" height="auto">
        <div class="modal_container">
          <div class="modal_header d-flex justify-content-between">
            <h5>Tezkor aloqa</h5>
            <span @click="hide('modal_header')"
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
          </div>
          <div class="modal_body">
            <p class="fasting-contact-text">
              Telefon raqamingizni yozib qoldiring va bizning operatorlar
            </p>
            <div class="modal-tariff-info-grid">
              <p class="tariff-info-text">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.00033 17.3334C4.39783 17.3334 0.666992 13.6026 0.666992 9.00008C0.666992 4.39758 4.39783 0.666748 9.00033 0.666748C13.6028 0.666748 17.3337 4.39758 17.3337 9.00008C17.3337 13.6026 13.6028 17.3334 9.00033 17.3334ZM8.16699 11.5001V13.1667H9.83366V11.5001H8.16699ZM9.83366 10.1292C10.5034 9.92739 11.0783 9.49171 11.4538 8.90153C11.8292 8.31136 11.9802 7.60596 11.8793 6.9138C11.7783 6.22165 11.4321 5.58878 10.9037 5.13046C10.3753 4.67214 9.6998 4.41886 9.00033 4.41675C8.32604 4.4167 7.67255 4.65021 7.15099 5.07758C6.62943 5.50494 6.272 6.09977 6.13949 6.76091L7.77449 7.08841C7.82089 6.85627 7.93226 6.64208 8.09563 6.47076C8.25901 6.29944 8.46767 6.17803 8.69735 6.12067C8.92702 6.0633 9.16827 6.07234 9.39301 6.14672C9.61775 6.22111 9.81675 6.35778 9.96685 6.54084C10.117 6.7239 10.212 6.94582 10.2409 7.18078C10.2698 7.41574 10.2314 7.65408 10.1301 7.86807C10.0289 8.08205 9.86894 8.26288 9.66893 8.38952C9.46892 8.51616 9.23706 8.5834 9.00033 8.58341C8.77931 8.58341 8.56735 8.67121 8.41107 8.82749C8.25479 8.98377 8.16699 9.19573 8.16699 9.41675V10.6667H9.83366V10.1292Z"
                    fill="#0070CE"
                  /></svg
                >Bepul konsultatsiya
              </p>
              <p class="tariff-info-text">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.00033 17.3334C4.39783 17.3334 0.666992 13.6026 0.666992 9.00008C0.666992 4.39758 4.39783 0.666748 9.00033 0.666748C13.6028 0.666748 17.3337 4.39758 17.3337 9.00008C17.3337 13.6026 13.6028 17.3334 9.00033 17.3334ZM8.16699 11.5001V13.1667H9.83366V11.5001H8.16699ZM9.83366 10.1292C10.5034 9.92739 11.0783 9.49171 11.4538 8.90153C11.8292 8.31136 11.9802 7.60596 11.8793 6.9138C11.7783 6.22165 11.4321 5.58878 10.9037 5.13046C10.3753 4.67214 9.6998 4.41886 9.00033 4.41675C8.32604 4.4167 7.67255 4.65021 7.15099 5.07758C6.62943 5.50494 6.272 6.09977 6.13949 6.76091L7.77449 7.08841C7.82089 6.85627 7.93226 6.64208 8.09563 6.47076C8.25901 6.29944 8.46767 6.17803 8.69735 6.12067C8.92702 6.0633 9.16827 6.07234 9.39301 6.14672C9.61775 6.22111 9.81675 6.35778 9.96685 6.54084C10.117 6.7239 10.212 6.94582 10.2409 7.18078C10.2698 7.41574 10.2314 7.65408 10.1301 7.86807C10.0289 8.08205 9.86894 8.26288 9.66893 8.38952C9.46892 8.51616 9.23706 8.5834 9.00033 8.58341C8.77931 8.58341 8.56735 8.67121 8.41107 8.82749C8.25479 8.98377 8.16699 9.19573 8.16699 9.41675V10.6667H9.83366V10.1292Z"
                    fill="#0070CE"
                  /></svg
                >Yukni bepul hisoblatish
              </p>
              <p class="tariff-info-text">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.00033 17.3334C4.39783 17.3334 0.666992 13.6026 0.666992 9.00008C0.666992 4.39758 4.39783 0.666748 9.00033 0.666748C13.6028 0.666748 17.3337 4.39758 17.3337 9.00008C17.3337 13.6026 13.6028 17.3334 9.00033 17.3334ZM8.16699 11.5001V13.1667H9.83366V11.5001H8.16699ZM9.83366 10.1292C10.5034 9.92739 11.0783 9.49171 11.4538 8.90153C11.8292 8.31136 11.9802 7.60596 11.8793 6.9138C11.7783 6.22165 11.4321 5.58878 10.9037 5.13046C10.3753 4.67214 9.6998 4.41886 9.00033 4.41675C8.32604 4.4167 7.67255 4.65021 7.15099 5.07758C6.62943 5.50494 6.272 6.09977 6.13949 6.76091L7.77449 7.08841C7.82089 6.85627 7.93226 6.64208 8.09563 6.47076C8.25901 6.29944 8.46767 6.17803 8.69735 6.12067C8.92702 6.0633 9.16827 6.07234 9.39301 6.14672C9.61775 6.22111 9.81675 6.35778 9.96685 6.54084C10.117 6.7239 10.212 6.94582 10.2409 7.18078C10.2698 7.41574 10.2314 7.65408 10.1301 7.86807C10.0289 8.08205 9.86894 8.26288 9.66893 8.38952C9.46892 8.51616 9.23706 8.5834 9.00033 8.58341C8.77931 8.58341 8.56735 8.67121 8.41107 8.82749C8.25479 8.98377 8.16699 9.19573 8.16699 9.41675V10.6667H9.83366V10.1292Z"
                    fill="#0070CE"
                  /></svg
                >Tezkor zayavka qoldirish
              </p>
            </div>
            <div class="form-block modal-form-block">
              <!-- <input type="text" id="inputFrom" v-mask="'##/##/#### ##:##:##'" placeholder="Phone number" /> -->
              <the-mask
                type="text"
                placeholder="Phone number"
                :mask="['+998 (##) ### ## ##', '+998 (##) ### ## ##']"
              />
            </div>
            <div class="modal-form-btn">
              <div class="form-btn" @click="sendNomer">
                Biz bilan aloqaga chiqish
              </div>
            </div>
          </div>
        </div></modal
      >
      <modal name="modal_timer" width="440px" height="auto">
        <div class="modal_container">
          <div class="modal_header d-flex justify-content-between">
            <h5>Tezkor aloqa</h5>
            <span @click="hide('modal_timer')"
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
          </div>
          <div class="modal_body">
            <p class="timer_text">
              Ma’lumot uchun raxmat! atiga 1 soat ichida operatorimiz aloqaga
              chiqadi
            </p>
            <div class="modal_timer">
              <span class="two_dots">:</span>
              <flip-countdown
                :deadline="deadline2"
                :showDays="false"
                :showHours="false"
                @timeElapsed="timeElapsedHandler"
              ></flip-countdown>
            </div>
            <div class="d-flex justify-content-center">
              <span class="another_attempt">Boshqattan urinish</span>
            </div>
          </div>
        </div></modal
      >
      <modal
        :adaptive="true"
        name="modal_leave_weak"
        width="996px"
        height="auto"
      >
        <div class="modal_container window-header">
          <div class="modal_header d-flex justify-content-between">
            <div>
              <h5>Zayavka topshirirsh</h5>
              <p class="fasting-contact-text sub-text">
                Malumotlaringiz havfsizligi taminlanadi va tarqatilmaydi
              </p>
            </div>
            <span @click="hide('modal_leave_weak')"
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
          </div>
          <div class="modal_body">
            <form action="">
              <div class="modal_form_container">
                <div class="m-form-title-hr">
                  <h1 class="m-form-title">
                    Truck mode
                  </h1>
                  <span></span>
                </div>
                <div class="form-block-grid">
                  <div class="modal_form_block form-block">
                    <label for="">Truck model</label>
                    <el-select
                      class="banner-select"
                      v-model="value"
                      placeholder="Model"
                    >
                      <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      >
                      </el-option>
                    </el-select>
                  </div>
                  <div class="modal_form_block form-block">
                    <label for="">Truck Year</label>
                    <el-select
                      class="banner-select"
                      v-model="value"
                      placeholder="Calendar"
                    >
                      <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      >
                      </el-option>
                    </el-select>
                  </div>
                  <div class="modal_form_block form-block">
                    <label for="">Truck marka</label>
                    <el-select
                      class="banner-select"
                      v-model="value"
                      placeholder="Change marka"
                    >
                      <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      >
                      </el-option>
                    </el-select>
                  </div>
                </div>
              </div>
              <div class="modal_form_container">
                <div class="m-form-title-hr">
                  <h1 class="m-form-title">
                    Location
                  </h1>
                  <span></span>
                </div>
                <div class="form-block-grid">
                  <div class="modal_form_block form-block">
                    <label for="">Pickup location</label>
                    <input type="text" placeholder="Location" />
                  </div>
                  <div class="modal_form_block form-block">
                    <label for="">Delivery location</label>
                    <input type="text" placeholder="Location" />
                  </div>
                  <div class="modal_form_block form-block">
                    <label for="">Delivery data</label>
                    <el-select
                      class="banner-select"
                      v-model="value"
                      placeholder="Calendar"
                    >
                      <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      >
                      </el-option>
                    </el-select>
                  </div>
                </div>
              </div>
              <div class="modal_form_container">
                <div class="m-form-title-hr">
                  <h1 class="m-form-title">
                    Contact
                  </h1>
                  <span></span>
                </div>
                <div class="form-block-grid">
                  <div class="modal_form_block form-block">
                    <label for="">First name</label>
                    <input type="text" placeholder="Full name" />
                  </div>
                  <div class="modal_form_block form-block">
                    <label for="">Email</label>
                    <input type="text" placeholder="Your email" />
                  </div>
                  <div class="modal_form_block form-block">
                    <label for="">Phone number</label>
                    <input type="text" placeholder="Number" />
                  </div>
                </div>
              </div>
              <div class="modal-application-form-btn">
                <div class="form-btn" @click="sendNomer">
                  Send all informations
                </div>
              </div>
            </form>
          </div>
        </div>
      </modal>
    </div>
  </div>
</template>
<script>
import TextCarousel from "./TextCarousel.vue";
import FlipCountdown from "vue2-flip-countdown";
import Drawer from "vue-drawer";
import moment from "moment";
const fmt = "YYYY-MM-DD HH:mm:ss";
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
      deadline2: moment().add(1, "h").format(fmt),
      options: [
        {
          value: "Option1",
          label: "Option1",
        },
        {
          value: "Option2",
          label: "Option2",
        },
        {
          value: "Option3",
          label: "Option3",
        },
      ],
      value: "",
    };
  },
  computed: {
    availableLocales() {
      return this.$i18n.locales;
    },
  },

  methods: {
    sendNomer() {
      this.$modal.hide(`modal_header`);

      (this.deadline2 = moment().add(1, "h").format(fmt)),
        this.$modal.show(`modal_timer`);
    },
    show(name) {
      this.$modal.show(name);
      document.body.style.overflowY = "hidden";
      document.body.style.height = "100vh";
    },
    hide(name) {
      this.$modal.hide(name);
      document.body.style.overflowY = "auto";
      document.body.style.height = "auto";
    },
    timeElapsedHandler(e) {
      console.log(e);
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
    const time = new Date();
    console.log(time);
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
  components: { TextCarousel, Drawer, FlipCountdown },
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
  cursor: pointer;
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
