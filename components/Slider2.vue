<template>
  <div>
    {{ index + 1 }}
    <Slide
      v-for="(slide, key) in slides"
      :key="key"
      :class="{ 'active': key === index }"
    >
      {{ slide.title }}
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
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'
import Slide from '@/components/Slide.vue'
import Button from '@/components/Button.vue'
//
// export default {
//   name: 'Slider',
//   components: {
//     Slide,
//     Button
//   },
//   data() {
//     return {
//       index: 0
//     };
//   },
//   props: {
//     slides: {
//       type: Array,
//       default: () => []
//     }
//   },
//   watch: {
//     slides(slides) {
//       if (this.index >= this.total) {
//         this.index = this.total - 1
//       }
//     }
//   },
//   computed: {
//     total() {
//       return this.slides.length
//     },
//     visible() {
//       console.log(this.$el);
//       return this.index === this.$parent
//     }
//   },
//   methods: {
//     next() {
//       this.index++
//       if(this.index >= this.total) {
//         this.index = 0
//       }
//     },
//     prev() {
//       this.index--
//       if(this.index < 0) {
//         this.index = this.total - 1
//       }
//     },
//     goto(index) {
//       this.index = index
//     }
//   },
  // mounted() {
  //   this.slides;
  // }
// }
@Component({
  components: {
    Slide,
    Button
  }
})
export default class Slider2 extends Vue {

  @Prop() slides!: any[]
  index: number = 0
  // index = 0

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
