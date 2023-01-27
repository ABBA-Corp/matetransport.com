<template lang="html">
  <div class="banner">
    <div class="banner-grid">
      <div class="banner-video">
        <div class="banner-title">
          <h1>Fast & reliable nationwide auto transport company</h1>
          <p>
            Montway Auto Transport is the number one rated car transporter in
            the U.S.
          </p>
        </div>
        <div class="video-container">
          <video
            autoplay="autoplay"
            loop="loop"
            playsinline
            muted="muted"
            src="../assets/video/Logistics_Intro_Video_KEFt2quibkg_135.mp4"
          ></video>
        </div>
      </div>
      <div class="banner-form">
        <div class="ellipse-shodow3"></div>

        <form action="">
          <div class="form-title">
            <h2>Get an instant quoteor call now call</h2>
          </div>
          <div class="form-block">
            <label for="inputFrom">Send a copy the quote to</label>
            <input type="text" id="inputFrom" placeholder="Zip or city" />
          </div>
          <div class="form-block">
            <label for="inputFrom">First available date</label>
            <el-select
              class="banner-select"
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
            <!-- <input type="text" id="inputFrom" placeholder="Zip or city" /> -->
          </div>
          <div class="form-block">
            <label for="inputTo">Your phone number</label>
            <input type="text" id="inputTo" placeholder="Zip or city" />
          </div>
          <div class="banner-form-btn d-flex justify-content-end steps-action">
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
</template>
<script>
export default {
  data() {
    return {
      loading: false,
      iconLoading: false,
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
      ],
      value: "",
    };
  },
  methods: {
    next() {
      this.current++;
    },
    prev() {
      this.current--;
    },
    enterLoading() {
      this.loading = true;
    },
    enterIconLoading() {
      this.iconLoading = { delay: 1000 };
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

.banner-select {
  .el-input {
    input {
      height: 60px !important;
    }
  }
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
