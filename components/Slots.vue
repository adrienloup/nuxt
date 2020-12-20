<template>
  <div class="slots">
    <strong>
      <slot>Slots</slot>
    </strong>
    <div>
      <slot name="slotA">Slot A</slot>
    </div>
    <div>
      <slot name="slotB">Slot B</slot>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class Slots extends Vue {
}
</script>

<style lang="scss" scoped>
.slots {
  display: inline-block;
  vertical-align: top;
  margin-right: 1rem;

  strong {
    display: block;
  }
}
</style>