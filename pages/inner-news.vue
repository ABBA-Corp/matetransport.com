<template lang="html">
  <div class="bg-color">
    <div class="inner-news">
      <div class="container_xl">
        <div>
          <nuxt-link class="inner-news-back-btn" to="/"
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
        <div class="inner-news-container">
          <div
            class="inner-news-title d-flex align-items-center justify-content-between"
          >
            <div class="d-flex flex-column">
              <h1>Delivery Trucks</h1>
              <p>
                Sasco Global provides professional and <br />
                comprehensive Air Freight
              </p>
            </div>
            <div>
              <el-select
                class="inner-news-select"
                v-model="value"
                placeholder="Select"
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

          <div class="inner-news-banner">
            <img src="../assets/images/inner-news-banner.png" alt="" />
          </div>
          <div class="inner-news-desc">
            <p>
              Sasco Global provides professional and comprehensive Air Freight
              services committed to the safe, reliable and cost effective
              service of your consignment. Our dedicated network of integrated
              air and ground services, combine to ensure timely customs
              clearance and delivery for your cargo every time. Freight
              forwarding is our strength in the market and we are specialist in
              freight movement of luxurious and general items.Sasco Global
              provides professional and comprehensive Air Freight services
              committed to the safe, reliable and cost effective delivery of
              your consignment. Our dedicated network of integrated air and
              ground services, combine to ensure timely customs clearance and
              delivery for your cargo every time.
            </p>
            <p>
              Freight forwarding is our strength in the market and we are
              specialist in freight movement of luxurious and general
              items.Sasco Global provides professional and comprehensive Air
              Freight services committed to the safe, reliable and cost
              effective delivery of your consignment. Our dedicated network of
              integrated air and ground services, combine to ensure timely
              customs clearance and delivery for your cargo every time. Freight
              forwarding is our strength in the market and we are specialist in
              freight movement of luxurious and general items.Sasco Global
              provides professional and comprehensive Air Freight services
              committed to the safe, reliable and cost effective delivery of
              your consignment.
            </p>
          </div>
        </div>
        <LastNews> <Title title="News" /></LastNews>
      </div>
    </div>
  </div>
</template>
<script>
import NewsCard from "../components/cards/NewsCard.vue";
import ServiceApplicationCard from "../components/cards/ServiceApplicationCard.vue";
import LastNews from "../components/LastNews.vue";
import Title from "../components/Title.vue";

export default {
  data() {
    return {
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
        {
          value: "Option4",
          label: "Option4",
        },
        {
          value: "Option5",
          label: "Option5",
        },
      ],
      value: "",
    };
  },

  components: { NewsCard, ServiceApplicationCard, LastNews, Title },
};
</script>
<style lang="scss">
.bg-color {
  background: #f5f5f5;
}
</style>
