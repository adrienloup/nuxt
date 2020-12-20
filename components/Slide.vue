<template>
  <div>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class SlideComponent extends Vue {
}
</script>

<style lang="scss" scoped>
div {
  display: none;
  &.active {
    display: block;
  }
}
</style>