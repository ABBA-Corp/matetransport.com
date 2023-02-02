<template lang="html">
  <div class="log-services-card">
    <div class="logs-card-img">
      <img src="../../assets/images/Group 11.png" alt="" />
    </div>
    <div class="logs-card-body">
      <h3
        v-if="service.title"
        @click="$router.push(localeLocation(`/service/${service.id}`))"
      >
        {{ service.title }}
      </h3>
      <h3 v-else>Car delivery</h3>

      <p v-if="service.sub_title">
        {{ service.sub_title }}
      </p>
      <p v-else>
        Let us diagnose your problems and come up with a solution to your car or
        truck issues.
      </p>
    </div>
  </div>
</template>
<script>
export default {
  props: ["service"],
};
</script>
<style lang=""></style>
