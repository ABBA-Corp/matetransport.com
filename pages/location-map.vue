<template lang="html">
  <div class="location-map">
    <div class="container_xl">
      <div class="location-map-title">
        <h1>
          New York Transportation <br />
          Services
        </h1>
        <p>
          Effortlessly shipping vehicles & heavy haul equipment <br />
          to/from any location in New York
        </p>
      </div>
      <div class="location-map-grid">
        <div class="location-map-info">
          <div class="location-map-banner">
            <img src="../assets/images/Rectangle 23896.png" alt="" />
          </div>
          <div class="location-map-text">
            <p>
              Ship a Car, New York Inc delivers superior shipping service to Los
              angles people relocating their vehicles, businesses moving their
              general freight and/or transporting heavy haul equipment as well
              as volume relocation services for dealers and corporations. SAC is
              an experienced transport broker with direct access to the largest
              network of carriers. One simple call does it all. When you choose
              Ship A Car, we deliver not only your vehicle and/or freight, but
              peace of mind as well.
            </p>
            <p>
              Contact a Ship A Car transport coordinator now at (866) 821-4555
              for direct vehicle transport service to/from any residential or
              business location in the city of New York.Ship
            </p>
          </div>
        </div>
        <div class="location-map-form">
          <div class="banner-form">
            <form action="">
              <div class="form-title">
                <h2>Get an instant quoteor call now call</h2>
              </div>
              <div class="form-block">
                <label for="inputFrom">Transport car FROM</label>
                <input type="text" id="inputFrom" placeholder="Zip or city" />
              </div>

              <div class="form-block">
                <label for="inputTo">Transport car TO</label>
                <input type="text" id="inputTo" placeholder="Zip or city" />
              </div>
              <p class="banner-form-info">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. publishing software like Aldus PageMaker including
                versions ofLorem Ipsum is simply dummy text of the printing and
                typesetting industry. publishing software like Aldus PageMaker
                including versions of
              </p>
              <div
                class="banner-form-btn d-flex justify-content-end steps-action"
              >
                <div
                  class="form-btn"
                  @click="next"
                  v-if="current < steps.length - 1"
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
              </div>
              <div class="banner-steps">
                <a-steps :current="current">
                  <a-step
                    v-for="item in steps"
                    :key="item.title"
                    :title="item.title"
                  />
                </a-steps>
              </div>

              <!-- <el-steps :active="active" finish-status="success">
            <el-step title="Step 1"></el-step>
            <el-step title="Step 2"></el-step>
            <el-step title="Step 3"></el-step>
          </el-steps> -->

              <!-- <div class="steps-content">
            {{ steps[current].content }}
          </div> -->
              <!-- <div class="steps-action">
            <a-button
              v-if="current < steps.length - 1"
              type="primary"
              @click="next"
            >
              Next
            </a-button>
            <a-button
              v-if="current == steps.length - 1"
              type="primary"
              @click="$message.success('Processing complete!')"
            >
              Done
            </a-button>
            <a-button
              v-if="current > 0"
              style="margin-left: 8px;"
              @click="prev"
            >
              Previous
            </a-button>
          </div> -->
            </form>
          </div>
        </div>
      </div>

      <TitleSmall title="Map" />

      <div class="location-map-maps-grid">
        <LocationMapCard />
        <LocationMapCard />
      </div>
    </div>
  </div>
</template>
<script>
import LocationMapCard from "../components/cards/LocationMapCard.vue";
import TitleSmall from "../components/TitleSmall.vue";

export default {
  data() {
    return {
      current: 0,
      steps: [
        {
          title: "First",
          content: "First-content",
        },
        {
          title: "Second",
          content: "Second-content",
        },
        {
          title: "Last",
          content: "Last-content",
        },
      ],
    };
  },
  components: { TitleSmall, LocationMapCard },
};
</script>
<style lang=""></style>
