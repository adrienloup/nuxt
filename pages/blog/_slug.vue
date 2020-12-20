<template>
<!--  <div>-->
<!--    {{ !!post.title }}-->
<!--  </div>-->
  <div v-if="!post.title">
    <LoadingStatic />
  </div>

  <article v-else>
    <h1>{{ post.title }}</h1>

    <p>{{ post.body }}</p>

    <Button @click="goBack">Back</Button>
  </article>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import LoadingStatic from '@/components/base/LoadingStatic.vue'
import Button from '~/components/Button3.vue'

@Component({
  components: {
    LoadingStatic,
    Button
  }
})
export default class BlogPost extends Vue {
  post = {}

  created() {
    this.refresh()
  }

  async refresh() {
    this.post = await fetch(`https://jsonplaceholder.typicode.com/posts/${this.$route.params.slug}`)
      .then(res => res.json())
  }

  goBack() {
    return this.$router.go(-1)
  }
}
</script>

<style lang="scss">
h1 {
  margin-bottom: 1rem;
}
</style>