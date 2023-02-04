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
          <div class="banner-form-btn steps-action">
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
import Title from "./Title.vue";

export default {
  data() {
    return {
      loading: false,
      iconLoading: false,
      current: 0,
      video: true,
      videoMuted: false,
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
  },
  mounted() {
    this.video = true;
    this.videoMuted = false;
    this.$refs.video.play();
  },
  components: { Title },
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
