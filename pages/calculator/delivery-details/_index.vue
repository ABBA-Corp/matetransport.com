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
            <el-form-item prop="adres" label-position="top">
              <input
                type="text"
                class="w-100"
                id="inputFrom"
                v-model="ruleForm.adres"
                placeholder="Street home flat"
              />
            </el-form-item>
            <el-form-item prop="ship_from" label-position="top">
              <input
                type="text"
                class="w-100"
                id="inputFrom"
                disabled
                :value="`USA ${leads?.ship_to?.state?.name}`"
                :placeholder="leads?.ship_from?.name"
              />
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
          <a-radio-group v-model="ruleForm.contact_me" @change="onChange">
            <div class="calculator-grid">
              <div class="checkbox-input">
                <a-radio :value="true">
                  Contact me
                </a-radio>
              </div>
              <div class="checkbox-input">
                <a-radio :value="false">
                  Contact someone else
                </a-radio>
              </div>
            </div>
          </a-radio-group>
        </div>
        <div class="form-block">
          <label for="">Have any special instructions? (Optional)</label>
          <textarea
            v-model="ruleForm.deckription"
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
          <div @click="toNextStep" class="form-btn">
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
        adres: "",
        deckription: "",
        lead: "",
        contact_me: true,
        contact_else: "1234567898",
      },
      leads: {},
    };
  },

  mounted() {
    this.__GET_LEADS();
  },
  methods: {
    onChange(e) {
      console.log("radio checked", e.target.value);
    },
    toNextStep() {
      const firstStep = JSON.parse(localStorage.getItem("app_create"));
      this.ruleForm = {
        ...this.ruleForm,
        lead: this.leads.id,
        tarif: firstStep.tarif,
      };
      localStorage.setItem("app_create", JSON.stringify(this.ruleForm));
      this.$router.push(`/calculator/transport/${this.$route.params.index}`);
    },
    async __GET_LEADS() {
      this.leads = await this.$store.dispatch("fetchLead/getLead", {
        leadId: this.$route.params.index,
        currentLang: this.$i18n.locale,
      });
      if (this.leads.ship_from.name) {
        this.$nuxt.$loading.finish();
      } else {
        this.$nextTick(() => {
          this.$nuxt.$loading.start();
        });
      }
    },
  },
};
</script>
<style lang=""></style>
