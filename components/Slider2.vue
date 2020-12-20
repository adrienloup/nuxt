<template>
  <div v-if="slides">
    <Slide
      v-for="(slide, key) in slides"
      :key="key"
      :class="{ 'active': key === index }"
    >
      <Logo :width="120" />
      <p>{{ slide.title }}</p>
    </Slide>

    <Button @click.prevent="prev">Prev</Button>
    <Button @click.prevent="next">Next</Button>

    <ul>
      <li
        v-for="nSlide in total"
        :key="nSlide.id"
        :class="{ 'active': nSlide - 1 === index }"
        @click.prevent="goto(nSlide - 1)"
      >
        {{ nSlide }}
      </li>
    </ul>
 </div>

  <div v-else>
    <Loader />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import Loader from '@/components/Loader.vue'
import Slide from '@/components/Slide.vue'
import Button from '@/components/base/Button.vue'
import Logo from '@/components/Logo.vue'

@Component({
  components: {
    Loader,
    Slide,
    Button,
    Logo
  }
})
export default class Slider2 extends Vue {
  @Prop() slides!: any[]
  name: string = 'SlideShow'
  index: number = 0

  // @Watch('slides')
  // slidesChanged(slides) {
  //   if (this.index >= this.total) {
  //     this.index = this.total - 1
  //   }
  // }

  next() {
    this.index++
    if (this.index >= this.total) {
      this.index = 0
    }
  }

  prev() {
    this.index--
    if (this.index < 0) {
      this.index = this.total - 1
    }
  }

  goto(index: number) {
    this.index = index
  }

  get total() {
    return this.slides.length
  }
}
</script>
