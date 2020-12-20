<template>
  <div v-if="!posts.length">
    <LoadingStatic />
  </div>

  <div v-else>
    <Search :search="search" :list="shortPosts" :slugPart="slugPart" />
    <Button @click="refresh()">Refresh</Button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import LoadingStatic from '@/components/base/LoadingStatic.vue'
import Search from '@/components/Search.vue'
import Button from '@/components/base/Button.vue'

@Component({
  components: {
    LoadingStatic,
    Search,
    Button
  }
})
export default class Blog extends Vue {
  posts = []
  shortPosts = []
  search = ''
  slugPart = 'blog-slug'

  created() {
    this.refresh()
  }

  async refresh() {
    this.posts = []
    await fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(posts => {
        this.posts = posts
        this.shortPosts = this.posts.slice(0, 10)
      })
  }
}
</script>
