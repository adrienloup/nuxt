<template>
  <component
    class="button"
    :is="is"
    :href="href"
    :to="to"
    :nuxt="nuxt"
    v-on="$listeners"
  >
    <slot />
  </component>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Button extends Vue {
  @Prop({
    type: String,
    default: null,
  }) public href!: string

  @Prop({
    type: String,
    default: null,
  }) public to!: string

  @Prop({
    type: Boolean,
    default: null,
  }) public nuxt!: boolean

  private get is(): any {
    if (this.to && this.nuxt) {
      return 'nuxt-link';
    }
    if (this.to) {
      return 'router-link'
    }
    if (this.href) {
      return 'a'
    }
    return 'button'
  }
}
</script>

<style lang="scss" scoped>
.button {
  min-width: 70px;
  display: inline-block;
  vertical-align: top;
  padding: 1rem 1.4rem;
  text-align: center;
  background-color: #00C48D;
  border-radius: 2rem;
  border: none;
  text-decoration: none;
  font-weight: bold;
  font-size: 1rem;
  color: #fff;
  cursor: pointer;
  outline: none;
  &:hover {
     background-color: #009D71;
  }
}
</style>