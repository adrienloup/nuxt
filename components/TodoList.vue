<template>
  <div class="todolist">
    <strong>{{ name }}</strong>

    <br /><br />

    <form @submit.prevent="addTask">
      <label>
        <input v-model="todo" type="text" />
      </label>

      <br /><br />
      {{ todo }}

      <Button type="submit">Add</Button>
    </form>

    <Todo />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import Button from '@/components/Button.vue'
import Todo from '@/components/Todo.vue'

@Component({
  components: {
    Button,
    Todo
  }
})
export default class ComponentTodoList extends Vue {

  name: string = 'TodoList'
  todo: string = ''
  lists: any[] = []

  addTask() {
    console.log('addTask')
  }

}
</script>

<style lang="scss" scoped>
.todolist {
  margin: 1rem 0
}
</style>

