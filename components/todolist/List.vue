<template>
  <div v-if="lists">
    <form @submit.prevent="addTask">
      <label>
        <input v-model="search" type="text" />
      </label>
      <Button type="submit">Add</Button>
    </form>

    <div v-if="lists.length">
      <Todo
        v-for="todo in lists"
        :key="todo.id"
        :todo="todo"
        @remove-todo="removeTodo"
      />
    </div>
  </div>

  <div v-else>
    <LoadingStatic />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import LoadingStatic from '@/components/base/LoadingStatic.vue'
import Button from '@/components/base/Button.vue'
import Todo from '@/components/todolist/Todo.vue'

@Component({
  components: {
    LoadingStatic,
    Button,
    Todo,
  }
})
export default class TodoList extends Vue {
  search: string = ''
  lists: any[] = []

  addTask() {
    if (!this.search) {
      return
    }
    this.lists.push({
      id: this.lists.length + 1,
      title: this.search,
      done: false
    })
    this.search = ''
  }

  removeTodo(e: any) {
    return this.lists.splice(this.lists.findIndex(todo => todo.id === e.id), 1)
  }
}
</script>

<style lang="scss" scoped>
label {
  vertical-align: middle;
  display: inline-block;
}
</style>