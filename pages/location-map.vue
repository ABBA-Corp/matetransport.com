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
        <div class="location-map-info"></div>
        <div class="location-map-form">
          <form action="">
            <div class="form-title">
              <h2>Get an instant quoteor call now call</h2>
            </div>
            <div class="form-block">
              <label for="inputFrom">Send a copy the quote to</label>
              <input type="text" id="inputFrom" placeholder="Zip or city" />
            </div>

            <div class="form-block">
              <label for="inputTo">Your phone number</label>
              <input type="text" id="inputTo" placeholder="Zip or city" />
            </div>
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
            <p class="banner-form-info">
              Ma’lumotlarni tanlshingiz va qoldirishingiz bilan siz saytning
              barcha policy and private qoidalariga rozilik bildirasiz
            </p>
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
  </div>
</template>
<script>
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
};
</script>
<style lang=""></style>
