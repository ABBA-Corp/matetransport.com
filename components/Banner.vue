<template lang="html">
  <div class="banner">
    <div class="container_xl banner-title-mobile">
      <Title
        title="Fast & reliable nationwide auto transport company"
        text="Montway Auto Transport is the number one rated car transporter in the U.S."
      />
    </div>
    <div class="banner-grid">
      <div class="banner-video" data-aos="fade-right" data-aos-duration="1000">
        <div class="banner-title">
          <h1>{{ $store.state.staticInfo.title }}</h1>
          <p>
            {{ $store.state.staticInfo.subtitle }}
          </p>
        </div>
        <div class="video-container">
          <video
            ref="video"
            autoplay="autoplay"
            loop="loop"
            :muted="true"
            type="video/mp4"
            src="../assets/video/logistic_vid.mp4"
          ></video>
        </div>
        <div class="video_controller">
          <div class="playVideo" @click="videoPlay">
            <svg
              v-if="!video"
              class="pause_svg"
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="1280.000000pt"
              height="1280.000000pt"
              viewBox="0 0 1280.000000 1280.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <metadata>
                Created by potrace 1.15, written by Peter Selinger 2001-2017
              </metadata>
              <g
                transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
                fill="#fff"
                stroke="none"
              >
                <path
                  d="M4610 6399 l0 -2881 43 25 c195 114 4144 2392 4494 2593 339 194 448
262 440 270 -7 7 -743 434 -1637 949 -894 516 -2001 1155 -2460 1420 -459 265
-845 487 -857 494 l-23 12 0 -2882z"
                />
              </g>
            </svg>
            <svg
              v-else
              width="13"
              height="16"
              viewBox="0 0 13 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.495361"
                y="0.85376"
                width="5.2653"
                height="14.2915"
                rx="1.70865"
                fill="white"
              />
              <rect
                x="7.26404"
                y="0.85376"
                width="5.2653"
                height="14.2915"
                rx="1.70865"
                fill="white"
              />
            </svg>
          </div>
          <div class="playVideo" @click="videoSound">
            <svg
              width="20"
              height="18"
              viewBox="0 0 20 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.40396 1.72494L4.91407 4.46162H1.72696C1.20109 4.46162 0.770828 4.91217 0.770828 5.46285V12.4381C0.770828 12.9889 1.20109 13.4393 1.72696 13.4393H4.91407L8.40396 16.176C9.04138 16.6766 9.93377 16.2093 9.93377 15.375V2.52592C9.93377 1.69156 9.02545 1.22432 8.40396 1.72494Z"
                fill="white"
              />
              <path
                d="M13.089 3.36027C12.6588 2.90972 11.9417 2.90972 11.5116 3.36027C11.0813 3.81082 11.0813 4.56174 11.5116 5.0123C13.5832 7.18162 13.5832 10.7028 11.5116 12.8721C11.0813 13.3226 11.0813 14.0736 11.5116 14.5239C11.7345 14.7576 12.0213 14.8577 12.2922 14.8577C12.5631 14.8577 12.8661 14.741 13.0731 14.5073C16.0371 11.4535 16.0371 6.44739 13.089 3.36027Z"
                fill="white"
              />
              <path
                d="M14.332 0.740397C13.9019 1.19095 13.9019 1.94187 14.332 2.39242C16.0052 4.14457 16.9296 6.46407 16.9296 8.95045C16.9296 11.4368 16.0052 13.7563 14.332 15.5085C13.9019 15.959 13.9019 16.71 14.332 17.1605C14.5551 17.394 14.8419 17.5109 15.1128 17.5109C15.3997 17.5109 15.6865 17.3941 15.8937 17.1772C17.9812 14.9912 19.1444 12.0709 19.1444 8.96714C19.1444 5.86334 17.997 2.95978 15.8937 0.757084C15.4793 0.289846 14.7782 0.289846 14.332 0.740397Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
      <div class="banner-form" data-aos="fade-left" data-aos-duration="1000">
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
            <h2>Get an instant quoteor call now call</h2>
          </div>
          <div v-if="active == 1">
            <div class="form-block">
              <label for="inputFrom">Send a copy the quote to</label>

              <el-form-item prop="email" label-position="top">
                <input
                  class="w-100"
                  type="email"
                  v-model="ruleForm.email"
                  id="inputFrom"
                  placeholder="Your email"
                  required
                />
              </el-form-item>
            </div>

            <div class="form-block">
              <label for="inputFrom">First available date</label>
              <a-date-picker
                @change="onChangeDate"
                :default-value="moment(ruleForm.date, dateFormatList[0])"
                :format="dateFormatList"
              />
              <!-- <input type="text" id="inputFrom" placeholder="Zip or city" /> -->
            </div>

            <div class="form-block">
              <label for="inputTo">Your phone number</label>

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
          <div v-if="active == 2">
            <div class="form-block">
              <label for="">Transport car FROM</label>
              <el-select
                v-model="ruleForm.ship_from"
                class="mb-2"
                filterable
                :disabled="!cities.length > 0"
                ref="selectInput"
                placeholder="Transport car FROM"
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
            </div>
            <div class="form-block">
              <label for="">Transport car TO</label>

              <el-select
                v-model="ruleForm.ship_to"
                class="mb-2"
                filterable
                :disabled="!cities.length > 0"
                ref="selectInput"
                placeholder="Transport car TO"
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
              <!-- <input type="text" id="inputFrom" placeholder="Zip or city" /> -->
            </div>
          </div>
          <div v-if="active == 3">
            <div class="form-block">
              <label for="">Vehicle year</label>
              <el-select
                v-model="ruleForm.car_year"
                class="banner-select"
                placeholder="Vehicle year"
              >
                <el-option
                  v-for="item in years"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </div>
            <div class="form-block">
              <label for="inputFrom"> Vehicle make</label>
              <el-select
                class="banner-select"
                v-model="carMakesValue"
                placeholder="Change marka"
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
              <!-- <input type="text" id="inputFrom" placeholder="Zip or city" /> -->
            </div>
            <div class="form-block">
              <label for="inputTo">Vehicle model</label>
              <el-select
                class="banner-select"
                v-model="ruleForm.vehicle"
                placeholder="Model"
                :disabled="carMakesValue == ''"
              >
                <el-option
                  v-for="item in carModles"
                  :key="item.id"
                  :label="item.name"
                  :value="item.id"
                >
                </el-option>
              </el-select>
            </div>
          </div>

          <div class="banner-form-btn steps-action">
            <div
              class="form-btn"
              type="submit"
              @click="submitForm('ruleForm')"
              v-if="active != 5"
            >
              Next stage<svg
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
            <nuxt-link
              class="form-btn"
              v-else
              :to="localePath('/calculator/delivery-details')"
            >
              Next stage<svg
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
            </nuxt-link>
          </div>
          <div class="banner-steps">
            <el-steps :active="active" finish-status="success">
              <el-step title="Location"></el-step>
              <el-step title="Name order"></el-step>
              <el-step title="Truck"></el-step>
            </el-steps>
          </div>
          <p class="banner-form-info">
            Ma’lumotlarni tanlshingiz va qoldirishingiz bilan siz saytning
            barcha policy and private qoidalariga rozilik bildirasiz
          </p>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
import Title from "./Title.vue";
import moment from "moment";
export default {
  data() {
    return {
      loading: false,
      iconLoading: false,
      current: 0,
      video: true,
      videoMuted: false,
      active: 1,
      date: "01/01/2015",
      dateFormatList: ["DD/MM/YYYY", "DD/MM/YY"],
      cities: [],
      carMakes: [],
      carModles: [],
      carMakesValue: "",
      ruleForm: {
        email: "",
        nbm: "",
        date: "01/01/2015",
        ship_to: "",
        ship_from: "",
        vehicle: "",
        car_year: "",
        vehicle_runs: 1,
        ship_via_id: 1,
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

      years: [
        {
          value: 2023,
          label: 2023,
        },
        {
          value: 2022,
          label: 2022,
        },
        {
          value: 2021,
          label: 2021,
        },
        {
          value: 2020,
          label: 2020,
        },
        {
          value: 2019,
          label: 2019,
        },
        {
          value: 2018,
          label: 2018,
        },
      ],

      rules: {
        nbm: [
          {
            required: true,
            message: "incorrect number",
            trigger: "blur",
          },
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
            message: "incorrect email",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    moment,
    onChangeDate(value, dateStrings) {
      this.ruleForm.date = dateStrings.replaceAll("/", ".");
    },

    videoPlay() {
      if (!this.$refs.video.paused) {
        this.$refs.video.pause();
        this.video = false;
      } else {
        this.$refs.video.play();
        this.video = true;
        console.log(this.$refs.video.muted);
      }
    },
    videoSound() {
      if (this.$refs.video.muted) {
        this.$refs.video.muted = false;
      } else {
        this.$refs.video.muted = true;
      }
    },
    async __GET_CITIES() {
      this.cities = await this.$store.dispatch("fetchLocations/getCities", {
        state: null,
      });
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
    async submitForm(ruleForm) {
      if (this.active == 3) {
        // const leadData = await this.$store.dispatch("fetchLead/postLead", {
        //   currentLang: this.$i18n.locale,
        //   data: this.ruleForm,
        // });
        this.$router.push(`/calculator/delivery-details/sadsadassadssad`);
      } else {
        this.$refs[ruleForm].validate(async (valid) => {
          if (valid) {
            const emailCorrent = await this.$store.dispatch(
              "fetchCheckEmail/getCheckEmail",
              this.ruleForm.email
            );

            if (emailCorrent.deliverability == "DELIVERABLE") {
              console.log(this.ruleForm);
              if (this.active++ > 2) {
                this.active = 0;
              }
            } else {
              console.log("toast");
              this.$toast.open({
                message: `Email ${emailCorrent.deliverability}`,
                type: "error",
                duration: 2000,
                dismissible: true,
                position: "top-right",
              });
            }
          } else {
            console.log("error submit!!");
            return false;
          }
        });
      }
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
  mounted() {
    this.video = true;
    this.videoMuted = false;
  },
  components: { Title },
  watch: {
    // "ruleForm.firstDateValue"(val) {
    //   if (val == "More than 30 days") {
    //     this.calendar.type = true;
    //   } else {
    //     this.calendar.type = false;
    //   }
    // },
    active(val) {
      if (val == 2) {
        this.__GET_CITIES();
      }
    },
    async carMakesValue(val) {
      this.carModles = await this.$store.dispatch("fetchCars/getCarsModels", {
        langCode: this.$i18n.locale,
        paramsId: val,
      });
    },
  },
};
</script>
<style lang="scss">
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
</style>
