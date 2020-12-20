<template>
  <header>
    <Button to="/">Home</Button>
    <Button to="/other">Components</Button>
    <Button to="/secret">Secret</Button>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import Button from '@/components/Button.vue'

@Component({
  components: {
    Button
  }
})
export default class Header extends Vue {
}
</script>