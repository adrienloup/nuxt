<template>
  <div :class="[`nuxt-${ $store.state.class.bodyClass }`]">
    <Header class="nuxt-header" />
    <Nuxt class="nuxt-content"/>
    <Footer class="nuxt-footer" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import Header from '@/components/base/Header.vue'

@Component({
  components: {
    Header
  }
})
export default class Default extends Vue {

  private mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 1e3)
    })
  }

}
</script>

<style lang="scss">
$t-duration: 600ms;
$t-delay: 200ms;

.page-enter-active,
.page-leave-active {
  transition-duration: $t-duration * 2;

  &::before,
  &::after {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    display: block;
    width: 100%;
    height: 50%;
    transition-property: opacity, transform;
    transition-timing-function: ease-in-out;
  }

  &::before {
    background-color: #00C48D;
  }

  &::after {
    top: 50%;
    background-color: #00C48D;
  }
}

.page-leave {
  &::before,
  &::after {
    transform: scaleX(0);
  }
}

.page-leave-active {
  &::before {
    transition-duration: $t-duration;
  }

  &::after {
    transition-duration: $t-duration - $t-delay;
    transition-delay: $t-delay;
  }
}

.page-leave-to {
  &::before,
  &::after {
    transform: scale(1);
    transform-origin: left;
  }
}

.page-enter {
  &::before,
  &::after {
    transform: scaleX(1);
  }
}

.page-enter-active {
  &::before {
    transition-duration: $t-duration;
  }

  &::after {
    transition-duration: $t-duration - $t-delay;
    transition-delay: $t-delay;
  }
}

.page-enter-to {
  &::before,
  &::after {
    transform: scaleX(0);
    transform-origin: right;
  }
}
</style>