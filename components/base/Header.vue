<template>
  <header>
    <Button to="/">Home</Button>
    <Button to="/component">Component</Button>
    <Button to="/secret">Secret</Button>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import Button from '@/components/base/Button.vue'

@Component({
  components: {
    Button
  }
})
export default class BaseHeader extends Vue {
}
</script>