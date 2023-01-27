<template lang="html">
  <div class="about-logistic-comp">
    <div class="container_xl">
      <Title
        title="Mate logistics Company"
        text="Why you should book with one of the best auto <br/> shipping companies:"
      />
      <div class="about-logistic-comp-grid about-shadow">
        <AboutLogisticCard />
        <AboutLogisticCard />
        <AboutLogisticCard />
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
.about-logistic-comp {
  padding-top: 60px;
  padding-bottom: 120px;
}
.about-logistic-comp-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
}
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
