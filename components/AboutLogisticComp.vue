<template lang="html">
  <div class="about-logistic-comp">
    <div class="container_xl">
      <Title
        title="Mate logistics Company"
        text="Why you should book with one of the best auto <br/> shipping companies:"
      />
      <div class="about-logistic-comp-grid about-shadow">
        <AboutLogisticCard
          data-aos="fade-up"
          data-aos-duration="800"
          :data-aos-delay="200"
        />
        <AboutLogisticCard
          data-aos="fade-up"
          data-aos-duration="800"
          :data-aos-delay="400"
        />
        <AboutLogisticCard
          data-aos="fade-up"
          data-aos-duration="800"
          :data-aos-delay="600"
        />
      </div>
    </div>
  </div>
</template>
<script>
import AboutLogisticCard from "./cards/AboutLogisticCard.vue";
import Title from "./Title.vue";

export default {
  components: { Title, AboutLogisticCard },
};
</script>
<style lang="scss">
.about-shadow {
  position: relative;
  &::after {
    content: "";
    position: absolute;
    width: 395px;
    height: 381px;
    left: calc(-395px - 30px);
    background: #73abff;
    opacity: 0.45;
    filter: blur(165.385px);
  }
  &::before {
    content: "";
    position: absolute;
    width: 395px;
    height: 381px;
    top: 30px;
    right: calc(-395px - 50px);
    background: #73abff;
    opacity: 0.45;
    filter: blur(165.385px);
  }
}
</style>
