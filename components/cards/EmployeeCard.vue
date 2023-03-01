<template lang="html">
  <div class="employee-card">
    <img
      class="employee-bg"
      src="../../assets/images/employee-img.png"
      alt=""
    />
    <div class="employee-card-avatar">
      <img :src="img" alt="" />
    </div>
    <div class="">
      <h1 class="employee-card-name">{{ name }}</h1>
      <p class="employee-card-position">{{ job }}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: ["img", "name", "job"],
};
</script>
<style lang=""></style>
