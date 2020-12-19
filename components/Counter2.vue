<template>
  <div>
    {{ count }}<br />
    <Button @click="decrement()">-</Button>
    <Button @click="increment()">+</Button>
  </div>
</template>

<script lang="ts">
// import Vue from 'vue';
// import Component from 'vue-class-component'
import { Component, Prop, Vue } from 'vue-property-decorator'
import Button from '@/components/Button.vue'

@Component({
  components: {
    Button
  }
})
export default class Counter extends Vue {
  count = 0;

  increment() {
    this.count++
  }

  decrement() {
    this.count--
  }
}
</script>
