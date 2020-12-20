<template>
  <div v-if="!posts.length">
    <Loader />
  </div>

  <div v-else>
    <Search :search="search" :list="posts" />
    <Button @click="refresh()">Refresh</Button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import Loader from '@/components/Loader.vue'
import Button from '~/components/Button3.vue'
import Search from '@/components/Search.vue'

@Component({
  components: {
    Loader,
    Button,
    Search
  }
})
export default class ComponentPosts2 extends Vue {
  posts = []
  search = ''

  created() {
    this.refresh()
  }

  async refresh() {
    this.posts = []

    await fetch('https://api.nuxtjs.dev/posts')
      .then(res => res.json())
      .then(posts => {
        this.posts = posts
      })
  }
}
</script>
