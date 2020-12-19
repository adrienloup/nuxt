<template>
  <div v-if="loading" class="loading">
    <div></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Loader2Component extends Vue {

  private loading: boolean = false;

  public start() {
    this.loading = true;
  }

  public finish() {
    this.loading = false;
  }

}
</script>

<style lang="scss" scoped>
.loading {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 2;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div {
    display: inline-block;
    width: 4rem;
    height: 4rem;
    border: .5rem solid rgba(0, 0, 0, .2);
    border-radius: 50%;
    border-top-color: #00C48D;
    animation: spin 1s ease-in-out infinite;
  }
}

@keyframes spin {
  to {
    -webkit-transform: rotate(360deg);
  }
}
</style>
