<template lang="html">
  <div class="partners-card">
    <div class="partners-grid">
      <div>
      <div class="partners-avatar">
        <img :src="review.image" alt="" />
      </div>
      </div>
      <div class="partners-body">
        <div class="IconGoogle partners-title">
          <h3 class="Text">{{ review?.title }}</h3>
          <img style="margin-left: 20px;" width="40" src="../../static/Img/google2.jpg" alt="">
        </div>
        <div class="partners-text">
          <p v-html="review?.text"></p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["review"],
};
</script>
<style scoped lang="scss">
.IconGoogle{
  display: flex;
  align-items: center;
}
.Text{
  margin-top: 10px;
}
</style>
