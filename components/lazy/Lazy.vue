<template>
  <div>
    <Button v-if="!show" @click="showList">Show</Button>
    <List v-if="show" @clear="clearList" />
  </div>
</template>

<script>
import List from '~/components/lazy/List'
import Button from '@/components/base/Button'

export default {
  name: 'Lazy',
  components: {
    List,
    Button
  },
  data () {
    return {
      show: false
    }
  },
  methods: {
    showList() {
      this.show = true
    },
    clearList() {
      this.show = false
    }
  }
}
</script>

<style lang="scss">
ul {
  padding: 1rem 1rem 0;
}
</style>
