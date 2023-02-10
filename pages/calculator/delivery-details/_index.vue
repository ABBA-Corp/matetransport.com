<template lang="html">
  <div class="calculator-form">
    <h1 class="calculator-title">Vehicle delivery details</h1>
    <div class="">
      <el-form
        label-position="top"
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="120px"
        class="demo-ruleForm"
        action=""
      >
        <div class="form-block">
          <label for="inputFrom">Delivery address</label>
          <div class="calculator-grid">
            <el-form-item prop="ship_from" label-position="top">
            <input type="text" class="w-100" id="inputFrom" placeholder="Street home flat" />
            </el-form-item>
            <el-form-item prop="ship_from" label-position="top">
            <input type="text" class="w-100" id="inputFrom" placeholder="USA California" />
            </el-form-item>
          </div>
        </div>
        <div class="form-block">
          <label for="inputTo">California City, CA 93505 , This is a?</label>
          <el-form-item prop="ship_from" label-position="top">
          <a-radio-group class="w-100" v-model="value" @change="onChange">
            <div class="calculator-grid">
              <div class="checkbox-input">
                <a-radio :value="1">
                  Residential address
                </a-radio>
              </div>
              <div class="checkbox-input">
                <a-radio :value="2">
                  Residential address
                </a-radio>
              </div>
            </div>
          </a-radio-group>
          </el-form-item>
        </div>
        <div class="form-block">
          <label for="inputTo">California City, CA 93505 , This is a?</label>
          <a-radio-group v-model="value1" @change="onChange">
            <div class="calculator-grid">
              <div class="checkbox-input">
                <a-radio :value="1">
                  Contact me
                </a-radio>
              </div>
              <div class="checkbox-input">
                <a-radio :value="2">
                  Contact someone else
                </a-radio>
              </div>
            </div>
          </a-radio-group>
        </div>
        <div class="form-block">
          <label for="">Have any special instructions? (Optional)</label>
          <textarea
            name=""
            id=""
            cols="20"
            rows="5"
            placeholder="Description"
          ></textarea>
        </div>
        <div
          class="banner-form-btn d-flex justify-content-end steps-action pt-3"
        >
          <nuxt-link
            :to="localePath(`/calculator/transport/${$route.params.index}`)"
            class="form-btn"
            @click="changeSteps(2)"
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
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  layout: "calculator",

  data() {
    return {
      value: 1,
      value1: 1,
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
    };
  },
  props: {
    changeSteps: {
      type: Function,
    },
  },
  methods: {
    onChange(e) {
      console.log("radio checked", e.target.value);
    },
  },
};
</script>
<style lang=""></style>
