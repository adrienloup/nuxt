<template>
  <div v-if="todo" class="todo">
    <h3
      contenteditable="true"
      :class="{ done: todo.done }"
      @keydown.enter="updateTodo($event, todo)"
      @blur="updateTodo($event, todo)"
    >
      {{ todo.title }}
    </h3>

    <label>
      <input
        type="checkbox"
        @change="completeTodo(todo)"
        @checked="todo.done"
      />
    </label><br />
    <Button
      class="remove"
      @click.prevent="removeTodo(todo)"
    >
      Remove
    </Button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import Button from '@/components/Button.vue'

@Component({
  components: {
    Button
  }
})
export default class Todo extends Vue {
  @Prop() todo!: any

  updateTodo(e: any, todo: any) {
    e.preventDefault()
    todo.title = e.target.innerText
    e.target.blur()
  }

  completeTodo(todo: any) {
    todo.done = !todo.done
  }

  removeTodo(todo: any) {
    this.$emit('remove-todo', todo)
  }
}
</script>

<style lang="scss" scoped>
.todo {
  padding-top: 1rem;

  strong {
    display: inline-block;
    vertical-align: middle;
  }

  input[type="checkbox"] {
    position: absolute;
    top: -100%;
  }

  label {
    display: flex;
    width: 1.5rem;
    height: 1.5rem;
    position: relative;
    overflow: hidden;
    background: #fff;
    border-radius: .3rem;
    border: 3px solid rgba(0, 0, 0, .2);

    &::before {
      display: none;
      content: "";
      width: .9rem;
      height: .9rem;
      margin: auto;
      background: rgba(0, 0, 0, .2);
      border-radius: .1rem;
    }
  }

  .done {
    text-decoration:line-through;
  }

  .done + label::before {
    display: block;
  }
}
</style>