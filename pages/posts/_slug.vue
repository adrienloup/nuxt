<template>
  <article>

    <h1>{{ post.title }}</h1>

    <div v-if="$fetchState.pending">
      <Loader />
    </div>

    <div v-else-if="$fetchState.error">
      Error while fetching.
    </div>

    <section>
      <img :src="post.url" :alt="post.title" />
    </section>

    <Button @click="goBack">
      Back
    </Button>

  </article>
</template>

<script>
import Loader from '@/components/Loader'
import Button from '@/components/Button'

export default {
  components: {
    Loader,
    Button
  },
  data() {
    return {
      post: {}
    }
  },
  methods: {
    goBack() { // TODO
      return this.$router.go(-1)
    },
    tutu() {
      console.log('tutu')
    }
  },
  async fetch() {
    this.post = await this.$http.$get(`https://jsonplaceholder.typicode.com/photos/${this.$route.params.slug}`)
  }
}
</script>