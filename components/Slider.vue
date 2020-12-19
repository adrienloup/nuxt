<template>
  <div>
   {{ index + 1 }}
   <div>
     <Slide v-for="(slide, key) in slides" :key="key" :class="{ 'active': key === index }">
       {{ slide.title }}
     </Slide>
     <Button @click.prevent="prev">Prev</Button>
     <Button @click.prevent="next">Next</Button>
     <ul>
       <li v-for="n in slidesCount" :key="n.id" :class="{ 'active': n-1 === index }" @click.prevent="goto(n-1)">{{ n }}</li>
     </ul>
   </div>
 </div>
</template>

<script>
import Slide from '@/components/Slide';
import Button from '@/components/Button';

export default {
  name: 'Slider',
  components: {
    Slide,
    Button
  },
  data() {
    return {
      index: 0
    };
  },
  props: {
    slides: {
      type: Array,
      default: () => []
    }
  },
  watch: {
    slides(slides) {
      if (this.index >= this.slidesCount) {
        this.index = this.slidesCount - 1
      }
    }
  },
  computed: {
    slidesCount() {
      return this.slides.length
    },
    visible() {
      return this.index === this.$parent
    }
  },
  methods: {
    next() {
      this.index++
      if(this.index >= this.slidesCount) {
        this.index = 0
      }
    },
    prev() {
      this.index--
      if(this.index < 0) {
        this.index = this.slidesCount - 1
      }
    },
    goto(index) {
      this.index = index
    }
  },
  // mounted() {
  //   this.slides;
  // }
}
</script>
