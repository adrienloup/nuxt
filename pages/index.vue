<template>
  <div>

    <Logo :width="132" :height="100" />

    <h1>{{ title }}</h1>

    <br />

    <TodoList />

    <br />

    <Shop />

    <br />

    <Slider2 :slides="[{ title: 'slide1' }, { title: 'slide2' }]" />

    <br />

    <Posts2 />

    <br />

    <Counter />

    <br />

    <Counter2 />

    <br />

    <br />

    <Slider :slides="[{ title: 'slide1' }, { title: 'slide2' }, { title: 'slide3' }]" />

    <br />

    <Posts />

    <br />

    <Posts2 />

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Logo from '@/components/Logo.vue'
import TodoList from '@/components/TodoList.vue'
import Shop from '@/components/Shop.vue'
import Slots from '@/components/Slots.vue'
import Slider from '@/components/Slider.vue'
import Slider2 from '@/components/Slider2.vue'
import Posts from '@/components/Posts.vue'
import Posts2 from '@/components/Posts2.vue'
import Counter from '@/components/Counter.vue'
import Counter2 from '@/components/Counter2.vue'

@Component({
  components: {
    Logo,
    TodoList,
    Shop,
    Slots,
    Slider,
    Slider2,
    Posts,
    Posts2,
    Counter,
    Counter2
  }
})
export default class PageIndex extends Vue {

  title: string = 'This Home page'
  search: string = ''

  // mounted() {
  //   this.slides;
  // }
}
</script>
