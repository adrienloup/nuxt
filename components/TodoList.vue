<template>
  <div v-if="lists">
    <h2>{{ name }}</h2><br />

    <form @submit.prevent="addTask">
      <label>
        <input
          v-model="search"
          type="text"
        />
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
    <Loader />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import Loader from '@/components/Loader.vue'
import Button from '@/components/Button.vue'
import Todo from '@/components/Todo.vue'

@Component({
  components: {
    Loader,
    Button,
    Todo,
  }
})
export default class TodoList extends Vue {
  name: string = 'TodoList'
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
form {
  label {
    display: block;
    margin-bottom: .25rem;
  }
}
</style>