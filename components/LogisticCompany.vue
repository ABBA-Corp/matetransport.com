<template lang="html">
  <div class="logistic-comp">
    <div class="container_xl">
      <Title title="Mate logistics Company" text="Why you should book with one of the best auto <br/> shipping companies:"/>

      <div class="logistic-comp-grid">
        <LogisticCompCard data-aos="fade-right" data-aos-duration="800"/>
        <LogisticCompCard data-aos="zoom-in" data-aos-duration="800"/>
        <LogisticCompCard data-aos="fade-left" data-aos-duration="800"/>
      </div>
    </div>
  </div>
</template>
<script>
import LogisticCompCard from "./cards/LogisticCompCard.vue";
import Title from "./Title.vue";

export default { components: { Title, LogisticCompCard } };
</script>
<style lang="scss">

</style>
