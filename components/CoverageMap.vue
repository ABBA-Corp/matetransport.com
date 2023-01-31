<template lang="html">
  <div class="coverage-map">
    <div class="container_xl">
      <Title
        title="USA car shipping <br/> coverage map"
        text="Специализированный онлайн-сервис «Matelogistics» <br/> предоставляет полный спектр услуг. Объявления <br/> охватывают всю"
      />
      <div class="coverage-map-grid">
        <div class="coverage-map-img">
          <checkbox-svg-map
            :map="USA"
            :location-class="getLocationClass"
            v-model="selectedLocations"
            @mouseover="pointLocation"
            @mouseout="unpointLocation"
            @mousemove="moveOnLocation"
          />
          <div class="examples__block__map__tooltip" :style="tooltipStyle">
            {{ pointedLocation }}
          </div>
        </div>
        <div class="coverage-map-form">
          <div class="form-block-map">
            <label for="inputFrom">Tochka A</label>
            <input
              type="text"
              id="inputFrom"
              :value="countries[selectedLocations[0]]"
              placeholder="Zip or city"
            />
          </div>

          <div class="form-block-map">
            <label for="inputTo">Tochka B</label>
            <input
              type="text"
              id="inputTo"
              :value="countries[selectedLocations[1]]"
              placeholder="Zip or city"
            />
          </div>

          <div
            class="coverage-map-form-btn d-flex justify-content-end steps-action"
          >
            <div class="form-btn">
              Next step<svg
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
          <p class="form-block-form-info">
            Специализированный онлайн-сервис «Matelogistics» <br />
            предоставляет полный спектр услуг. Объявления
          </p>
        </div>
      </div>

      <div class="mate-news">
        <img src="../assets/images/MATE NEWS.png" alt="" />
        <div class="log-news">
          <img src="../assets/svg/Footer logo.svg" alt="" />
          <h3>
            логистика сохасидаги <br />
            янгиликлар
          </h3>
        </div>
      </div>

      <LastNews>
        <div class="reload-news">
          <div class="reload-news-btn">
            <svg
              width="41"
              height="34"
              viewBox="0 0 41 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.8682 19.3943C13.4231 18.7578 12.9711 17.7639 12.1266 17.7639H9.59822C9.58175 17.5137 9.57254 17.2616 9.57254 17.0074C9.57254 10.7077 14.6976 5.5827 20.9971 5.5827C24.0245 5.5827 26.7801 6.76666 28.8265 8.69536L32.3918 4.52441C29.2708 1.66933 25.2543 0.105469 20.9971 0.105469C16.4825 0.105469 12.2381 1.86361 9.04574 5.05589C5.85346 8.24825 4.09531 12.4927 4.09531 17.0073C4.09531 17.2604 4.10164 17.5125 4.11264 17.7638H1.98295C1.13845 17.7638 0.68635 18.7577 1.24133 19.3943L7.05475 26.0625L12.8682 19.3943Z"
                fill="#024E90"
              />
              <path
                d="M40.753 16.179L34.9396 9.51069L29.1261 16.179C28.5712 16.8155 29.0233 17.8094 29.8678 17.8094H32.3932C31.98 23.7361 27.027 28.4318 20.9972 28.4318C18.365 28.4318 15.9382 27.5366 14.0044 26.0353L10.4389 30.2065C13.4258 32.6053 17.111 33.9091 20.9972 33.9091C25.5119 33.9091 29.7563 32.151 32.9486 28.9586C35.9512 25.9561 37.6845 22.0228 37.88 17.8095H40.0114C40.8559 17.8094 41.3079 16.8155 40.753 16.179Z"
                fill="#024E90"
              />
            </svg>
          </div>
          <div class="d-flex flex-column justify-content-center">
            <p class="last-news-title">Охирги янгиланиш</p>
            <h5>26.10.2022</h5>
          </div>
        </div>
      </LastNews>
    </div>
  </div>
</template>
<script>
import LastNews from "./LastNews.vue";
import Title from "./Title.vue";
import { CheckboxSvgMap } from "vue-svg-map";
// import SvgMap from "vue-simple-svg-map";
import { getLocationName } from "../utilities";
import USA from "@svg-maps/usa";
export default {
  data() {
    return {
      USA,
      countries: {
        ak: "Alaska",
        al: "Alabama",
        ar: "Arkansas",
        as: "American Samoa",
        az: "Arizona",
        ca: "California",
        co: "Colorado",
        ct: "Connecticut",
        dc: "District of Columbia",
        de: "Delaware",
        fl: "Florida",
        ga: "Georgia",
        gu: "Guam",
        hi: "Hawaii",
        ia: "Iowa",
        id: "Idaho",
        il: "Illinois",
        in: "Indiana",
        ks: "Kansas",
        ky: "Kentucky",
        la: "Louisiana",
        ma: "Massachusetts",
        md: "Maryland",
        me: "Maine",
        mi: "Michigan",
        mn: "Minnesota",
        mo: "Missouri",
        ms: "Mississippi",
        mt: "Montana",
        nc: "North Carolina",
        nd: "North Dakota",
        ne: "Nebraska",
        nh: "New Hampshire",
        nj: "New Jersey",
        nm: "New Mexico",
        nv: "Nevada",
        ny: "New York",
        oh: "Ohio",
        ok: "Oklahoma",
        or: "Oregon",
        pa: "Pennsylvania",
        pr: "Puerto Rico",
        ri: "Rhode Island",
        sc: "South Carolina",
        sd: "South Dakota",
        tn: "Tennessee",
        tx: "Texas",
        ut: "Utah",
        va: "Virginia",
        vi: "Virgin Islands",
        vt: "Vermont",
        wa: "Washington",
        wi: "Wisconsin",
        wv: "West Virginia",
        wy: "Wyoming",
      },
      selectedLocations: [],
      pointedLocation: null,
      tooltipStyle: null,
    };
  },
  methods: {
    pointLocation(event) {
      this.pointedLocation = getLocationName(event.target);
    },
    unpointLocation(event) {
      this.pointedLocation = null;
      this.tooltipStyle = { display: "none" };
    },
    moveOnLocation(event) {
      this.tooltipStyle = {
        display: "block",
        top: `${event.clientY + 10}px`,
        left: `${event.clientX - 100}px`,
      };
    },
    getLocationClass(location, index) {
      // Generate heat map
      return `svg-map__location svg-map__location--heat${index % 4}`;
    },
  },
  components: { Title, LastNews, CheckboxSvgMap },
  watch: {
    selectedLocations(newVal, oldVal) {
      if (this.selectedLocations.length > 2) {
        this.selectedLocations = this.selectedLocations.slice(-2);
      }
    },
  },
};
</script>
<style lang="" src="vue-svg-map/dist/index.css"></style>

<style lang="scss">
// .svg-map__location {
//   fill: rgb(2, 78, 144);
// }
// .svg-map {
//   stroke: none;
//   width: 600px;
// }

// .svg-map__location:focus,
// .svg-map__location:hover {
//   fill: rgb(40, 146, 239);
// }
// .svg-map__location[aria-checked="true"] {
//   fill: rgb(40, 146, 239);
// }
// .mate-news {
//   position: relative;
//   &::after {
//     content: "";
//     position: absolute;
//     width: 395px;
//     height: 381px;
//     left: calc(-395px - 30px);
//     background: #73abff;
//     opacity: 0.45;
//     filter: blur(165.385px);
//   }
//   &::before {
//     content: "";
//     position: absolute;
//     width: 395px;
//     height: 381px;
//     bottom: -243px;
//     left: 50%;
//     background: #73abff;
//     opacity: 0.45;
//     filter: blur(165.385px);
//   }
// }

// .svg-map {
//   width: 100%;
//   height: auto;
//   stroke: #666;
//   stroke-width: 1;
//   stroke-linecap: round;
//   stroke-linejoin: round;

//   &__location {
//     fill: #a1d99b;
//     cursor: pointer;

//     &:focus,
//     &:hover {
//       fill: #b8e2b3;
//       outline: 0;
//     }

//     &[aria-checked="true"] {
//       fill: #f4bc44;
//     }
//   }
// }
/* Using box model */
* {
  box-sizing: border-box;
}

/* Maps examples */
// .examples {
//   width: 1000px;
//   margin: 0 auto;
//   font-family: Arial, sans-serif;
//   text-align: center;

//   &__title {
//     margin-bottom: 80px;
//     padding-bottom: 40px;
//     border-bottom: 1px dotted black;
//     font-size: 24px;
//   }

//   &__block {
//     margin-bottom: 80px;
//     padding-bottom: 80px;
//     border-bottom: 1px dotted black;

//     &__title {
//       margin-bottom: 40px;
//       font-size: 20px;
//     }

//     &__info {
//       display: inline-block;
//       vertical-align: top;
//       width: 450px;
//       text-align: left;

//       &__item {
//         margin-bottom: 20px;
//       }
//     }

//     &__map {
//       display: inline-block;
//       width: 500px;

//       &--australia {
//         .svg-map {
//           stroke-width: 0.5; // Australia stroke is larger than other maps
//         }
//       }

//       &--usa {
//         width: 800px; // USA needs more space	for tooltip

//         .svg-map__location {
//           &--heat0 {
//             fill: blue;
//           }

//           &--heat1 {
//             fill: lightblue;
//           }

//           &--heat2 {
//             fill: orange;
//           }

//           &--heat3 {
//             fill: red;
//           }

//           &:focus,
//           &:hover {
//             opacity: 0.75;
//           }
//         }
//       }

//       &__tooltip {
//         position: fixed;
//         // width: 200px;
//         padding: 10px;
//         border: 1px solid darkgray;
//         background-color: white;
//       }
//     }
//   }
// }
</style>
