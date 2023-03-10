<template lang="html">
  <div class="banner  ">
    <div class=" banner-title-mobile">
      <Title
        :title="$store.state.staticInfo.title"
        :text="$store.state.staticInfo.subtitle"
      />
    </div>
    <div class="container_xl Header_body">
      <div></div>
      <div class="banner-form formWidth" data-aos="fade-left" data-aos-duration="1000">
        <div class="ellipse-shodow3"></div>

        <el-form
          label-position="top"
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="120px"
          class="demo-ruleForm"
          action=""
        >
          <div class="form-title">
            <h2>{{ $store.state.translations["main.banner_form_title"] }}</h2>
          </div>
          <div v-if="active == 1">
            <div class="form-block">
              <label for="inputFrom">{{
                $store.state.translations["main.form_label_email"]
              }}</label>

              <el-form-item prop="email" label-position="top">
                <input
                  class="w-100"
                  type="email"
                  v-model="ruleForm.email"
                  id="inputFrom"
                  :placeholder="$store.state.translations['main.placeH_email']"
                  required
                />
                <span class="email_incorrect" v-if="emailIncorrect">
                  incorrect email
                </span>
              </el-form-item>
            </div>

            <div class="form-block">
              <label for="inputFrom">{{
                $store.state.translations["main.form_label_firstDate"]
              }}</label>
              <el-form-item prop="date" label-position="top">
                <a-date-picker
                  class="w-100"
                  @change="onChangeDate"
                  :format="dateFormatList"
                  :placeholder="
                    $store.state.translations['main.placeH_firstDate']
                  "
                />
              </el-form-item>
            </div>

            <div class="form-block">
              <label for="inputTo">{{
                $store.state.translations["main.form_label_number"]
              }}</label>

              <el-form-item prop="nbm" label-position="top">
                <the-mask
                  class="w-100"
                  type="text"
                  placeholder="(___) ___-____"
                  :mask="['(###) ###-####', '(###) ###-####']"
                  v-model="ruleForm.nbm"
                  label-position="top"
                />
              </el-form-item>
            </div>
          </div>
          <div v-if="active == 0">
            <div class="form-block">
              <label for="">{{
                $store.state.translations["main.form_label_shipFrom"]
              }}</label>
              <el-form-item prop="ship_from" label-position="top">
                <el-select
                  v-model="ruleForm.ship_from"
                  class="mb-2 w-100"
                  filterable
                  :disabled="!cities.length > 0"
                  ref="selectInput"
                  :placeholder="
                    $store.state.translations['main.placeH_shipFrom']
                      ? $store.state.translations['main.placeH_shipFrom']
                      : 'Loading...'
                  "
                  popper-class="web-selects"
                >
                  <el-option
                    class="edit-select"
                    v-for="item in cities"
                    :key="item.id"
                    :label="`${item.state.name} ${item.name} ${item.zip}`"
                    :value="`${item.id}`"
                  >
                  </el-option>
                </el-select>
              </el-form-item>
            </div>
            <div class="form-block">
              <label for="">{{
                $store.state.translations["main.form_label_shipTo"]
              }}</label>
              <el-form-item prop="ship_to" label-position="top">
                <el-select
                  v-model="ruleForm.ship_to"
                  class="mb-2 w-100"
                  filterable
                  :disabled="!cities.length > 0"
                  ref="selectInput"
                  :placeholder="
                    $store.state.translations['main.placeH_shipTo']
                      ? $store.state.translations['main.placeH_shipTo']
                      : 'Loading...'
                  "
                  popper-class="web-selects"
                  loading-text="Loading..."
                >
                  <el-option
                    class="edit-select"
                    v-for="item in cities"
                    :key="item.id"
                    :label="`${item.state.name} ${item.name} ${item.zip}`"
                    :value="`${item.id}`"
                  >
                  </el-option>
                </el-select>
              </el-form-item>
            </div>
          </div>
          <div v-if="active == 2">
            <div class="form-block">
              <label for="">{{
                $store.state.translations["main.form_vehicleYear"]
              }}</label>
              <el-form-item prop="car_year" label-position="top">
                <el-select
                  v-model="ruleForm.car_year"
                  class="banner-select w-100"
                  :placeholder="
                    $store.state.translations['main.placeH_vehicleYear']
                  "
                >
                  <el-option
                    v-for="item in years"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
              </el-form-item>
            </div>
            <div class="form-block">
              <label for="inputFrom">{{
                $store.state.translations["main.form_vehicleMake"]
              }}</label>
              <el-form-item prop="car_make" label-position="top">
                <el-select
                  class="banner-select w-100"
                  v-model="ruleForm.car_make"
                  :placeholder="
                    $store.state.translations['main.placeH_vehicleMake']
                  "
                  @focus="__GET_CAR_MAKES()"
                  :loading="!carMakes.length > 0"
                  loading-text="Loading..."
                >
                  <el-option
                    v-for="item in carMakes"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id"
                  >
                  </el-option>
                </el-select>
              </el-form-item>
            </div>
            <div class="form-block">
              <label for="inputTo">{{
                $store.state.translations["main.form_vehicleModel"]
              }}</label>
              <el-form-item prop="vehicle" label-position="top">
                <el-select
                  class="banner-select w-100"
                  v-model="ruleForm.vehicle"
                  :placeholder="
                    $store.state.translations['main.placeH_vehicleModel']
                  "
                  :disabled="ruleForm.car_make == ''"
                >
                  <el-option
                    v-for="item in carModles"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id"
                  >
                  </el-option>
                </el-select>
              </el-form-item>
            </div>
          </div>

          <div
            class="banner-form-btn steps-action d-flex justify-content-end"
            :class="{ 'justify-content-between': active > 0 }"
          >
            <div class="form-btn previos-btn" @click="prev" v-if="active > 0">
              Previos
            </div>
            <div
              class="form-btn"
              type="submit"
              v-on:click="submitForm('ruleForm', 1)"
              v-if="active == 0"
              :class="activeDisabled"
            >
              {{
                active == 2
                  ? $store.state.translations["main.form_btn_lastStage"]
                  : $store.state.translations["main.form_btn_nextStage"]
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
            <div
              class="form-btn"
              type="submit"
              v-on:click="submitForm('ruleForm', 2)"
              v-if="active == 1"
              :class="activeDisabled"
            >
              {{
                active == 2
                  ? $store.state.translations["main.form_btn_lastStage"]
                  : $store.state.translations["main.form_btn_nextStage"]
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
            <div
              class="form-btn"
              type="submit"
              v-on:click="submitForm('ruleForm', 2)"
              v-if="active == 2"
              :class="activeDisabled"
            >
              {{ $store.state.translations["main.form_btn_lastStage"] }}
              <svg
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
          <div class="banner-steps">
            <div
              class="banner-steps"
              v-for="step in steps"
              v-if="active == step"
            >
              <el-steps :active="step + 1" finish-status="success">
                <el-step
                  :title="$store.state.translations['main.step_location']"
                ></el-step>
                <el-step
                  :title="$store.state.translations['main.step_nameOrder']"
                ></el-step>
                <el-step
                  :title="$store.state.translations['main.step_truck']"
                ></el-step>
              </el-steps>
            </div>
          </div>
          <p class="banner-form-info">
            {{ $store.state.translations["main.banner_form_text"] }}
          </p>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
import Title from "./Title.vue";
import moment from "moment";
import yearsData from "../helpers/yearsData";
export default {
  data() {
    return {
      video: true,
      videoMuted: true,
      active: 0,
      aboutUs: [],
      emailIncorrect: false,
      dateFormatList: ["DD/MM/YYYY", "DD/MM/YY"],
      cities: [],
      allCities: [],
      carMakes: [],
      carModles: [],
      carMakesValue: "",
      steps: [0, 1, 2],
      videoSkeleton: false,
      ruleForm: {
        email: "",
        nbm: "",
        date: "",
        ship_to: "",
        ship_from: "",
        vehicle: "",
        car_year: "",
        vehicle_runs: 1,
        ship_via_id: 1,
        car_make: "",
      },
      calendar: {
        type: false,
        value: "",
      },
      firstDate: [
        {
          value: "As soon as possible",
          label: "As soon as possible",
        },
        {
          value: "Within 2 Weeks",
          label: "Within 2 Weeks",
        },
        {
          value: "Within 30 Days",
          label: "Within 30 Days",
        },
        {
          value: "More than 30 days",
          label: "More than 30 days",
        },
      ],
      years: yearsData,
      rules: {
        nbm: [
          {
            min: 10,
            max: 10,
            message: "Length should be 10",
            trigger: "change",
          },
        ],
        email: [
          {
            required: true,
            message: "Please enter your email",
            trigger: "blur",
          },
        ],
        date: [
          {
            required: true,
            message: "Please enter date",
            trigger: "blur",
          },
        ],
        ship_from: [
          {
            required: true,
            message: "Pleace enter adress",
            trigger: "change",
          },
        ],
        ship_to: [
          {
            required: true,
            message: "Pleace enter adress",
            trigger: "change",
          },
        ],
        car_make: [
          {
            required: true,
            message: "Pleace enter transport",
            trigger: "change",
          },
        ],
        vehicle: [
          {
            required: true,
            message: "Pleace enter transport model",
            trigger: "change",
          },
        ],
        car_year: [
          {
            required: true,
            message: "Pleace enter transport model",
            trigger: "change",
          },
        ],
      },
      leadCread: {},
    };
  },
  computed: {
    activeDisabled() {
      return {
        lastStage: this.active == 2,
      };
    },
  },
  methods: {
    moment,
    onChangeDate(_, dateStrings) {
      this.ruleForm.date = dateStrings;
    },
    videoPlay() {
      if (!this.$refs.video.paused) {
        this.$refs.video.pause();
        this.video = false;
      } else {
        this.$refs.video.play();
        this.video = true;
      }
    },
    next() {
      this.active++;
    },
    prev() {
      this.active--;
    },
    videoSound() {
      if (this.$refs.video.muted) {
        this.$refs.video.muted = false;
        this.videoMuted = false;
      } else {
        this.$refs.video.muted = true;
        this.videoMuted = true;
      }
    },
    async __GET_CITIES() {
      this.cities = await this.$store.dispatch("fetchLocations/getCities", {
        state: null,
      });
      this.allCities = this.cities;
    },
    async __CHECK_EMAIL(emal) {
      this.cities = await this.$store.dispatch(
        "fetchCheckEmail/getCheckEmail",
        email
      );
    },
    async __GET_CAR_MAKES() {
      this.carMakes = await this.$store.dispatch(
        "fetchCars/getCarMakes",
        this.$i18n.locale
      );
    },
    async __POST_LEAD() {
      this.$nextTick(() => {
        this.$nuxt.$loading.start();
      });
      this.leadCread = await this.$store.dispatch("fetchLead/postLead", {
        currentLang: this.$i18n.locale,
        data: this.ruleForm,
      });

      if (this.leadCread.uuid && process.browser) {
        localStorage.setItem("editData", JSON.stringify(this.ruleForm));
        this.$router.push(`/calculator/choice-tarif/${this.leadCread.uuid}`);
      } else {
        this.$nuxt.$loading.finish();
        console.log(this.leadCread);
        this.$toast.open({
          message: `${this.leadCread}`,
          type: "error",
          duration: 2000,
          dismissible: true,
          position: "top-right",
        });
      }
    },
    async submitForm(ruleForm, val) {
      this.$refs[ruleForm].validate((valid) => {
        if (valid) {
          if (this.active == 1) {
            this.checkEmail().then((data) => {
              const emailCorrect = data;
              emailCorrect.status == "valid"
                ? this.nextStep(val)
                : (this.emailIncorrect = true);
            });
          } else {
            this.nextStep(val);
          }
        } else {
          return false;
        }
      });
    },

    async checkEmail() {
      const emailCorrect = await this.$store.dispatch(
        "fetchCheckEmail/getCheckEmail",
        this.ruleForm.email
      );
      return await emailCorrect;
    },
    nextStep(val) {
      if (this.active > 1) {
        this.__POST_LEAD();
      } else {
        this.active = val;
      }
      this.emailIncorrect = false;
    },
    async GET_ABOUT_US() {
      this.videoSkeleton = true;
      this.aboutUs = await this.$store.dispatch(
        "fetchAboutUs/getAboutUs",
        this.$i18n.locale
      );
      this.videoSkeleton = false;
    },
  },
  mounted() {
    this.video = true;
    this.__GET_CITIES();
    this.GET_ABOUT_US();
  },
  components: { Title },
  watch: {
    async "ruleForm.car_make"(val) {
      this.carModles = await this.$store.dispatch("fetchCars/getCarsModels", {
        langCode: this.$i18n.locale,
        paramsId: val,
      });
    },
    "ruleForm.ship_to"(val) {
      this.cities = this.allCities.filter((item) => item.id != val);
    },
    "ruleForm.ship_from"(val) {
      this.cities = this.allCities.filter((item) => item.id != val);
    },
    "ruleForm.email"(val) {
      this.emailIncorrect = false;
    },
  },
};
</script>
<style lang="scss">
.Header_body{
  display: flex;
  justify-content: space-between;
}
.formWidth{
  max-width: 500px !important;
}
@media(max-width:1000px){
  .Header_body{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.formWidth{
  margin-top: 30px;
}
}
.banner{
  background-image: url("../static/Img/fura.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding-bottom: 50px;
}
.steps-content {
  margin-top: 16px;
  border: 1px dashed #e9e9e9;
  border-radius: 6px;
  background-color: #fafafa;
  min-height: 200px;
  text-align: center;
  padding-top: 80px;
}

.steps-action {
  margin-top: 24px;
}

.ant-steps-item-content > .ant-steps-item-title::after {
  border-bottom: 2.07381px dashed #008aff;
  background: transparent !important;
}
.ant-steps-item-title::after {
  border: 2.07381px dashed #d8dfec;
  background: transparent !important;
}

.el-select-dropdown {
  background: #f4f8ff !important;
  border: 1px solid #d2dbec !important;
  box-shadow: 0px 8px 24px rgba(2, 78, 144, 0.25) !important;
  border-radius: 12px !important;
  overflow: hidden !important;
  .el-select-dropdown__item {
    height: 55px;
    display: flex;
    align-items: center;
    position: relative;
    &::after {
      content: "";
      position: absolute;
      height: 1px;
      bottom: 0;
      background: #d2dbec;
      left: 20px;
      right: 40px;
    }
    &:last-child {
      &::after {
        background: transparent;
      }
    }
    &:hover {
      background: #e5ebf5;
    }
    span {
      font-family: "Mulish";
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      color: #024e90;
    }
  }
  .el-scrollbar__wrap {
    margin-bottom: 0 !important;
  }
  .el-select-dropdown__wrap {
    max-height: 300px !important;
  }
}
.disabledStep {
  pointer-events: none;
}
</style>
