<template>
  <div>

    <Logo :width="150" />

    <h1>{{ title }}</h1>

    <br />

    <Authentication />

<!--    <br />-->

<!--    <TodoList />-->

<!--    <br />-->

<!--    <Shop />-->

<!--    <br />-->

<!--    <Slider2 :slides="[{ title: 'slide1' }, { title: 'slide2' }]" />-->

<!--    <br />-->

<!--    <Posts2 />-->

<!--    <br />-->

<!--    <Counter />-->

<!--    <br />-->

<!--    <Counter2 />-->

<!--    <br />-->

<!--    <br />-->

<!--    <Slider :slides="[{ title: 'slide1' }, { title: 'slide2' }, { title: 'slide3' }]" />-->

<!--    <br />-->

<!--    <Posts />-->

<!--    <br />-->

<!--    <Posts2 />-->

  </div>
</template>

<script lang="ts">
// import { Component, Vue } from 'vue-property-decorator'
import Vue from 'vue'
import Component from 'vue-class-component'
import Logo from '@/components/Logo.vue'
import Authentication from '@/components/Authentication.vue'
// import Login from '@/components/Login.vue'
// import TodoList from '@/components/TodoList.vue'
// import Shop from '@/components/Shop.vue'
// import Slots from '@/components/Slots.vue'
// import Slider from '@/components/Slider.vue'
// import Slider2 from '@/components/Slider2.vue'
// import Posts from '@/components/Posts.vue'
// import Posts2 from '@/components/Posts2.vue'
// import Counter from '@/components/Counter.vue'
// import Counter2 from '@/components/Counter2.vue'

@Component({
  components: {
    Logo,
    Authentication,
    // Login,
    // TodoList,
    // Shop,
    // Slots,
    // Slider,
    // Slider2,
    // Posts,
    // Posts2,
    // Counter,
    // Counter2
  }
})
export default class PageIndex extends Vue {
  title: string = 'This Home Page'
}
</script>
