<template>
  <div>
    <h1>{{ title }}</h1>

    <br />

    <Authentication />

    <br />

    <h2>Slider</h2>

    <Slider :slides="[{ title: 'Slide 1' }, { title: 'Slide 2' }, { title: 'Slide 3' }]" />

    <br />

    <h2>Blog</h2>

    <Blog />

    <br />

    <h2>TodoList</h2>

    <TodoList />

    <br />

    <h2>Lazy</h2>

    <Lazy />

    <br />

    <h2>Search</h2>

    <Search :search="''" :list="[{ id: 1, title: 'apple' },{ id: 2, title: 'banana' },{ id: 3, title: 'cherries' },{ id: 4, title: 'peach' },{ id: 5, title: 'orange' }]" />

    <br />

    <h2>Slots</h2>

    <Slots>
      <template>Slot 1</template>
    </Slots>

    <Slots>
      <template>Slot 2</template>
      <template slot="slotA">Replace A</template>
    </Slots>

    <Slots>
      <template>Slot 3</template>
      <template slot="slotB">Replace B</template>
    </Slots>

  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import Authentication from '@/components/Authentication.vue'
import Slider from '@/components/Slider2.vue'
import Blog from '@/components/Blog.vue'
import TodoList from '@/components/todolist/List.vue'
import Lazy from '@/components/lazy/Lazy.vue'
import Search from '@/components/Search.vue'
import Slots from '@/components/Slots.vue'

@Component({
  components: {
    Authentication,
    Slider,
    Blog,
    TodoList,
    Lazy,
    Search,
    Slots
  }
})
export default class PageComponent extends Vue {
  title: string = 'Component'
}
</script>
