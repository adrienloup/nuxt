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
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class Slots extends Vue {
}
</script>

<style lang="scss" scoped>
.slots {
  display: inline-block;
  vertical-align: top;
  margin-right: .5rem;
  padding: .8rem .5rem .8rem 1rem;
  border-radius: .4rem;
  border: 2px solid #00C48D;

  strong {
    display: block;
  }

  div {
    display: inline-block;
    vertical-align: top;
    margin: .5rem .5rem 0 0;
  }

  & + .slots {
    margin-left: 1rem;
  }
}
</style>