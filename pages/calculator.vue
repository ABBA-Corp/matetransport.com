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
          <div class="calculator-form">
            <h1 class="calculator-title">Vehicle delivery details</h1>
            <div class="">
              <div class="form-block">
                <label for="inputFrom">Delivery address</label>
                <div class="calculator-grid">
                  <input
                    type="text"
                    id="inputFrom"
                    placeholder="Street home flat"
                  />
                  <input
                    type="text"
                    id="inputFrom"
                    placeholder="Street home flat"
                  />
                </div>
              </div>

              <div class="form-block">
                <label for="inputTo"
                  >California City, CA 93505 , This is a?</label
                >
                <a-radio-group v-model="value" @change="onChange">
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
              </div>

              <div class="form-block">
                <label for="inputTo"
                  >California City, CA 93505 , This is a?</label
                >
                <a-radio-group v-model="value1" @change="onChange">
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
                <div class="form-btn">
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
              </div>
            </div>
          </div>
          <div class="calculator-info">
            adas
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: 1,
      value1: 1,
    };
  },
  methods: {
    onChange(e) {
      console.log("radio checked", e.target.value);
    },
  },
};
</script>
<style lang=""></style>
