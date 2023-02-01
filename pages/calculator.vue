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
                :edit="false"
                :checkbox="['Running', 'Non-running']"
              />
              <CalculatorInfoItems
                name="Transport type"
                :edit="false"
                :checkbox="['Open (-$190)', 'Enclosed']"
              />

              <CalculatorInfoItems
                name="Service type"
                :edit="false"
                option="Door to door"
              />
              <CalculatorInfoItems
                name="Insurance"
                :edit="false"
                option="Included"
              />
              <CalculatorInfoItems
                name="Transit time"
                :edit="false"
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
          <div class="block-help block-help-mobile">
            <p>
              Ma’lumotlarni tanlshingiz va qoldirishingiz bilan siz saytning
              barcha policy and private qoidalariga rozilik bildirasiz
            </p>
            <div class="contact-us">
              <div class="contact-us-svg">
                <svg
                  width="47"
                  height="47"
                  viewBox="0 0 47 47"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M40.1145 6.88048C30.9358 -2.29543 16.0564 -2.29323 6.88048 6.88552C-2.29544 16.0643 -2.29323 30.9436 6.88553 40.1195C16.0643 49.2954 30.9436 49.2932 40.1196 40.1145C44.5264 35.7063 47.0014 29.728 47 23.495C46.9987 17.2629 44.5219 11.2865 40.1145 6.88048ZM35.5899 32.7352C35.5889 32.7362 35.5879 32.7373 35.5868 32.7383V32.7305L34.3961 33.9133C32.8562 35.4727 30.6135 36.1143 28.4819 35.6053C26.3343 35.0305 24.2928 34.1155 22.4346 32.895C20.7083 31.7917 19.1085 30.502 17.6641 29.0488C16.3352 27.7296 15.1413 26.2811 14.0999 24.7248C12.9609 23.0503 12.0594 21.2261 11.4209 19.3042C10.689 17.0463 11.2955 14.5688 12.9876 12.9044L14.3819 11.5101C14.7696 11.1207 15.3995 11.1193 15.7888 11.5069C15.7898 11.5079 15.7909 11.509 15.7919 11.5101L20.1942 15.9124C20.5836 16.3 20.585 16.9299 20.1974 17.3192C20.1963 17.3202 20.1953 17.3213 20.1942 17.3224L17.6092 19.9074C16.8675 20.641 16.7742 21.8068 17.3899 22.649C18.3249 23.9322 19.3595 25.1396 20.4841 26.2602C21.738 27.5195 23.1011 28.665 24.5574 29.6834C25.3989 30.2704 26.5398 30.1714 27.2677 29.4484L29.7665 26.9104C30.1542 26.521 30.7841 26.5197 31.1734 26.9073C31.1744 26.9083 31.1754 26.9093 31.1765 26.9104L35.5867 31.3284C35.9762 31.716 35.9776 32.3458 35.5899 32.7352Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div class="contact-us-body">
                <h4>Buyurtma jarayonida muammolarga duch keldingizmi?</h4>
                <p>bizning call centrimiz sizga yordam berdi aloqadamiz 24/7</p>
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
