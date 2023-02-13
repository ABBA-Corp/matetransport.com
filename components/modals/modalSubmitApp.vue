<template lang="html">
  <modal :adaptive="true" name="modal_leave_weak" width="996px" height="auto">
    <div class="modal_container window-header">
      <div class="modal_header d-flex justify-content-between">
        <div>
          <h5>{{ $store.state.translations["modal.app_title"] }}</h5>
          <p class="fasting-contact-text sub-text">
            {{ $store.state.translations["modal.app_text"] }}
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
        <el-form
          label-position="top"
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="120px"
          class="demo-ruleForm"
          action=""
        >
          <div class="modal_form_container">
            <div class="m-form-title-hr">
              <h1 class="m-form-title">
                Truck mode
              </h1>
              <span></span>
            </div>
            <div class="form-block-grid">
              <div class="modal_form_block form-block">
                <label for="">Truck marka</label>
                <el-form-item prop="car_make" label-position="top">
                  <el-select
                    class="banner-select w-100"
                    v-model="ruleForm.car_make"
                    placeholder="Change marka"
                    @focus="__GET_CAR_MAKES()"
                    :loading="!carMakes.length > 0"
                    loading-text="Loading..."
                    popper-class="modal-select-opitons"
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
              <div class="modal_form_block form-block">
                <label for="">Truck Year</label>
                <el-form-item prop="car_year" label-position="top">
                  <el-select
                    v-model="ruleForm.car_year"
                    class="banner-select w-100"
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
                </el-form-item>
              </div>
              <div class="modal_form_block form-block">
                <label for="">Truck model</label>
                <el-form-item prop="vehicle" label-position="top">
                  <el-select
                    class="banner-select w-100"
                    v-model="ruleForm.vehicle"
                    placeholder="Model"
                    :disabled="ruleForm.car_make == ''"
                    loading-text="Loading..."
                    popper-class="modal-select-opitons"
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
                <el-form-item prop="ship_from" label-position="top">
                  <el-select
                    v-model="ruleForm.ship_from"
                    class="w-100"
                    filterable
                    :loading="!shipFromOptions.length > 0"
                    placeholder="Pickup location"
                    loading-text="Loading..."
                    popper-class="modal-select-opitons"
                  >
                    <el-option
                      class="edit-select"
                      v-for="item in shipFromOptions"
                      :key="item.id"
                      :label="`${item.state.name} ${item.name} ${item.zip}`"
                      :value="item.id"
                    >
                    </el-option>
                  </el-select>
                </el-form-item>
              </div>
              <div class="modal_form_block form-block">
                <label for="">Delivery location</label>
                <el-form-item prop="ship_to" label-position="top">
                  <el-select
                    v-model="ruleForm.ship_to"
                    label="Khasan"
                    class="w-100"
                    filterable
                    ref="selectInput"
                    placeholder="Delivery location"
                    loading-text="Loading..."
                    popper-class="modal-select-opitons"
                  >
                    <el-option
                      class="edit-select"
                      v-for="item in shipFromOptions"
                      :key="item.id"
                      :label="`${item.state.name} ${item.name} ${item.zip}`"
                      :value="item.id"
                    >
                    </el-option>
                  </el-select>
                </el-form-item>
              </div>
              <div class="modal_form_block form-block">
                <label for="">Delivery data</label>
                <el-form-item prop="date" label-position="top">
                  <a-date-picker
                    @change="onChangeDate"
                    class="w-100"
                    :default-value="moment(ruleForm.date, dateFormatList[0])"
                    :format="dateFormatList"
                  />
                </el-form-item>
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
                <el-form-item prop="" label-position="top">
                  <input class="w-100" type="text" placeholder="Full name" />
                </el-form-item>
              </div>
              <div class="modal_form_block form-block">
                <label for="">Email</label>
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
              <div class="modal_form_block form-block">
                <label for="">Phone number</label>
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
          </div>
          <div class="modal-application-form-btn">
            <div type="submit" class="form-btn" @click="submitForm('ruleForm')">
              Send all informations
            </div>
          </div>
        </el-form>
      </div>
    </div>
  </modal>
</template>
<script>
import moment from "moment";
import yearsData from "../../helpers/yearsData";
const fmt = "YYYY-MM-DD HH:mm:ss";
export default {
  data() {
    return {
      dateFormatList: ["DD/MM/YYYY", "DD/MM/YY"],
      carMakes: [],
      shipFromOptions: [],
      carMakes: [],
      carModles: [],
      carMakesValue: "",
      allCities: [],
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
            message: "incorrect email",
            trigger: "blur",
          },
        ],

        vehicle: [
          {
            required: true,
            message: "Pleace enter vehicle model",
            trigger: "change",
          },
        ],
        car_year: [
          {
            required: true,
            message: "Pleace enter vehicle year",
            trigger: "change",
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
        date: [
          {
            required: true,
            message: "Pleace enter date",
            trigger: "change",
          },
        ],
      },
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
      years: yearsData,
    };
  },
  mounted() {
    this.__GET_CITIES();
  },
  methods: {
    moment,
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
    onChangeDate(value, dateStrings) {
      this.ruleForm.date = dateStrings;
    },
    async __GET_CAR_MAKES() {
      this.carMakes = await this.$store.dispatch(
        "fetchCars/getCarMakes",
        this.$i18n.locale
      );
    },
    async __GET_CITIES() {
      this.shipFromOptions = await this.$store.dispatch(
        "fetchLocations/getCities"
      );
      this.allCities = this.shipFromOptions;
    },
    async __POST_LEAD() {
      this.$nextTick(() => {
        this.$nuxt.$loading.start();
      });
      this.leadCread = await this.$store.dispatch("fetchLead/postLead", {
        currentLang: this.$i18n.locale,
        data: this.ruleForm,
      });
      this.$nuxt.$loading.finish();
      if (this.leadCread.uuid) {
        this.$router.push(`/calculator/choice-tarif/${this.leadCread.uuid}`);
        this.hide("modal_leave_weak");
      }
    },
    async submitForm(ruleForm) {
      this.$refs[ruleForm].validate(async (valid) => {
        if (valid) {
          console.log(this.ruleForm);
          this.__POST_LEAD();
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
  watch: {
    "ruleForm.ship_to"(val) {
      this.shipFromOptions = this.allCities.filter((item) => item.id != val);
    },
    "ruleForm.ship_from"(val) {
      this.shipFromOptions = this.allCities.filter((item) => item.id != val);
    },
    async "ruleForm.car_make"(val) {
      this.carModles = await this.$store.dispatch("fetchCars/getCarsModels", {
        langCode: this.$i18n.locale,
        paramsId: val,
      });
    },
    async shipFrom(newVal, oldVal) {
      this.shipFromOptions = await this.$store.dispatch(
        "fetchLocations/getCities",
        this.shipFrom
      );
    },
  },
};
</script>
<style lang=""></style>
