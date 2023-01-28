<template lang="html">
  <div class="bg-color">
    <div class="calculator">
      <div class="container_xl position-relative">
        <div>
          <nuxt-link class="all-news-back-btn" to="/"
            ><svg
              width="16"
              height="13"
              viewBox="0 0 16 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.0383 5.43603C14.9729 5.42597 14.9066 5.42132 14.8403 5.42214H3.55262L3.79875 5.31368C4.03934 5.2058 4.25821 5.05897 4.44556 4.87985L7.61091 1.88098C8.02779 1.50395 8.09784 0.897436 7.7769 0.443911C7.40338 -0.039371 6.68706 -0.144304 6.17691 0.209574C6.1357 0.23818 6.09653 0.269362 6.05972 0.302916L0.335755 5.72582C-0.111572 6.14915 -0.111966 6.83586 0.334861 7.25965C0.335147 7.25993 0.335469 7.26023 0.335755 7.2605L6.05972 12.6834C6.5074 13.1064 7.23223 13.1054 7.6787 12.6813C7.71383 12.6479 7.74664 12.6124 7.7769 12.5749C8.09784 12.1214 8.02779 11.5149 7.61091 11.1379L4.45128 8.13359C4.28332 7.97429 4.09021 7.84072 3.87889 7.73772L3.53545 7.5913H14.7773C15.3621 7.61187 15.8752 7.22485 15.9851 6.68025C16.0863 6.08899 15.6624 5.53195 15.0383 5.43603Z"
                fill="#005BA8"
              />
            </svg>
            Back
          </nuxt-link>
        </div>
        <div class="calculator-container">
          <CalculatorStep1 :changeSteps="changeSteps" v-if="steps == 1" />
          <CalculatorStep2 :changeSteps="changeSteps" v-if="steps == 2" />
          <CalculatorStep3 v-if="steps == 3" />
          <div class="calculator-info">
            <div class="calculator-info-body">
              <CalculatorInfoItems
                name="Distance"
                :edit="true"
                option="2753mi"
              />
              <CalculatorInfoItems
                name="First avail. date"
                :edit="true"
                option="01/21/2023"
              />
              <CalculatorInfoItems
                name="Vehicle"
                :edit="true"
                option="2020 Alfa Romeo Giulia Quadrifoglio"
              />
              <CalculatorInfoItems
                name="Ship from"
                :edit="true"
                option="New York, NY 10025"
              />
              <CalculatorInfoItems
                name="Ship to"
                :edit="true"
                option="California City, CA 93505"
              />
              <CalculatorInfoItems
                name="Vehicle condition"
                :edit="true"
                :checkbox="['Running', 'Non-running']"
              />
              <CalculatorInfoItems
                name="Transport type"
                :edit="true"
                :checkbox="['Open (-$190)', 'Enclosed']"
              />

              <CalculatorInfoItems
                name="Service type"
                :edit="true"
                option="Door to door"
              />
              <CalculatorInfoItems
                name="Insurance"
                :edit="true"
                option="Included"
              />
              <CalculatorInfoItems
                name="Transit time"
                :edit="true"
                option="7-9 days"
                info="We coordinate all shipments through a large network of
                      licensed Auto Shipping Carriers nationwide. We coordinate
                      all shipments through a large network of licensed Auto
                      Shipping Carriers nationwide."
              />
            </div>
            <div class="calculator-info-footer">
              <div class="calculator-footer-items">
                <span
                  >Transit time
                  <a-tooltip placement="top" color="red">
                    <template slot="title" color="red">
                      <span color="red" class="hover-info">Transit time</span>
                    </template>
                    <a-button
                      ><svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.65625 5V3.65625H6.34375V5H7.65625ZM7.65625 10.3438V6.34375H6.34375V10.3438H7.65625ZM2.28125 2.3125C3.59375 1 5.16667 0.34375 7 0.34375C8.83333 0.34375 10.3958 1 11.6875 2.3125C13 3.60417 13.6562 5.16667 13.6562 7C13.6562 8.83333 13 10.4062 11.6875 11.7188C10.3958 13.0104 8.83333 13.6562 7 13.6562C5.16667 13.6562 3.59375 13.0104 2.28125 11.7188C0.989583 10.4062 0.34375 8.83333 0.34375 7C0.34375 5.16667 0.989583 3.60417 2.28125 2.3125Z"
                          fill="#9A999B"
                        />
                      </svg>
                    </a-button> </a-tooltip
                ></span>

                <h3>$600</h3>
              </div>
              <div class="calculator-footer-items">
                <span>Price option </span>
                <p>Have you had problems in the order process?</p>
              </div>
              <div class="calculator-footer-items">
                <span></span>
                <b>$2729 Discounted cash price</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CalculatorInfoItems from "../components/calculator/calculatorInfoItems.vue";

import CalculatorStep1 from "../components/calculator/calculatorStep1.vue";
import CalculatorStep2 from "../components/calculator/calculatorStep2.vue";
import CalculatorStep3 from "../components/calculator/calculatorStep3.vue";
export default {
  name: "MyMap",
  data() {
    return {
      steps: 1,
    };
  },
  methods: {
    changeSteps(step) {
      this.steps = step;
      console.log(step);
    },
  },
  components: {
    CalculatorInfoItems,
    CalculatorStep1,
    CalculatorStep2,
    CalculatorStep3,
  },
  watch: {
    selectedLocations(newVal, oldVal) {
      if ((newVal = !oldVal)) {
        console.log(this.selectedLocations);
      }
      console.log(this.selectedLocations);
    },
  },
};
</script>
