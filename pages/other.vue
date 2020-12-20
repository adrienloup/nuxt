<template>
  <div>
    <h1>Other</h1>
    <br />
    <Authentication />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Authentication from '@/components/Authentication.vue'

@Component({
  components: {
    Authentication
  }
})
export default class PageOther extends Vue {
}
</script>
