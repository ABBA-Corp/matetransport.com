<template lang="html">
  <div class="logistic-comp">
    <div class="container_xl">
      <Title title="Mate logistics Company" text="Why you should book with one of the best auto <br/> shipping companies:"/>

      <div class="logistic-comp-grid">
        <LogisticCompCard />
        <LogisticCompCard />
        <LogisticCompCard />
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
.logistic-comp-grid {
  display: flex;
  justify-content: space-between;
  margin-top: calc(56px + 30px);
  margin-left: 46px;
}
</style>
