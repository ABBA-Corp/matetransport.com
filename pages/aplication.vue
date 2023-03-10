<template>
  <div>
  <ModalSubmitApp/>
  <LoaderComp :loading="true"></LoaderComp>
  </div>
</template>
<script>
import LoaderComp from "../components/LoaderComp.vue";
import ModalSubmitApp from "../components/modals/modalSubmitApp.vue";
export default{
  components: { ModalSubmitApp },
}
</script>
<style>
</style>