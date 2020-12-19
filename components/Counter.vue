<template>
  <div>
    <div>
      {{ count }}
    </div>
    <Button @click="count--">-</Button>
    <Button @click="count++">+</Button>
  </div>
</template>

<script lang="ts">
// import { Vue, Component, Prop } from 'vue-property-decorator';
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class CounterComponent extends Vue {

  // private count: number = 0;
  count = 0

}
// export default {
//   name: "Counter",
//   data: () => ({
//     count: 0
//   })
// };
</script>
