<template>
  <div class="loading">
    <div></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class LoaderComponent extends Vue {
}
</script>

<style lang="scss" scoped>
.loading {
  display: inline-block;
  width: 4rem;
  height: 4rem;
  border: .5rem solid rgba(0, 0, 0, .2);
  border-radius: 50%;
  border-top-color: #00C48D;
  animation: spin 1s ease-in-out infinite;
}

@keyframes spin {
  to {
    -webkit-transform: rotate(360deg);
  }
}
</style>