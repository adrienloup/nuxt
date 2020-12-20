<template>
  <div>
    <div v-if="$fetchState.pending">
      <LoadingStatic />
    </div>

    <div v-else-if="$fetchState.error">
      Error while fetching
    </div>

    <div v-else>
      <Button @click="$fetch">Refresh</Button>
      <Button @click="clear()">Clear</Button>

      <ul>
        <li v-for="(user, index) in users" :key="index.id">
          {{ user.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import LoadingStatic from '@/components/base/LoadingStatic'
import Button from '@/components/base/Button'

export default {
  components: {
    LoadingStatic,
    Button
  },
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      users: []
    }
  },
  methods: {
    clear() {
      this.users = []
      this.$emit('clear')
    }
  },
  async fetch() {
    this.users = await fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
  }
}
</script>

