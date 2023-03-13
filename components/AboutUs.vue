<template lang="html">
  <div class="about-us" id="howWeWork">
    <div class="container_xl position-relative">
      <Title :title="$store.state.translations['main.howWeWork']" />
      <AboutCard />
    </div>
  </div>
</template>
<script>
import AboutCard from "./../components/cards/AboutUsSteps.vue"
import Title from "./Title.vue";

export default {
  data() {
    return {
      current: 0,
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
    };
  },

  components: { Title,AboutCard },

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
  },
};
</script>
<style lang=""></style>
