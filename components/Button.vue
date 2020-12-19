<template>
<!--  <a v-if="href" :href="href" class="button">-->
<!--    <slot/>-->
<!--  </a>-->
<!--  <button v-else class="button">-->
<!--    <slot/>-->
<!--  </button>-->
  <component
    :is="type"
    :href="href"
    v-on="$listeners"
    class="button">
    <slot />
  </component>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ButtonComponent extends Vue {

  // @Prop(String) href!: string;
  // @Prop(String) to!: string;

  @Prop({
    type: String,
    default: null,
  }) public href!: string;

  @Prop({
    type: String,
    default: null,
  }) public to!: string;

  private get type(): any {
    if (this.href) {
      return 'a'
    } else {
      this.$emit('tutu');
      return 'button'
    }
    // if (this.to && this.nuxt) {
    //   return 'nuxt-link';
    // }
    // if (this.to) {
    //   return 'router-link';
    // }
    // if (this.href) {
    //   return 'a';
    // }
    // this.$emit('tutu');
    // return 'button';
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