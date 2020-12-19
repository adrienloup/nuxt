<template>
  <div class="todo">
    Todo
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class ComponentTodo extends Vue {
}
</script>

<style lang="scss" scoped>
.todo {
  padding: 1rem;
}
</style>