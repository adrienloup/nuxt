<template>
  <div>

    <div v-if="$fetchState.pending">
      <Loader />
    </div>

    <div v-else-if="$fetchState.error">
      Error while fetching.
    </div>

    <div v-else>
      <Search
        :search="search"
        :list="shortened"
      />
      <Button @click="$fetch">Refresh</Button>
    </div>

  </div>
</template>

<script>
import Loader from '@/components/Loader';
import Button from '~/components/Button3';
import Search from '@/components/Search';

export default {
  name: "Posts",
  components: {
    Loader,
    Button,
    Search
  },
  data() {
    return {
      post: [],
      shortened: [],
      search: ''
    }
  },
  activated() {
    if (this.$fetchState.timestamp <= Date.now() - 30000) { // TODO ??
      this.$fetch();
    }
  },
  async fetch() {
    try {
      this.post = await this.$http.$get('https://api.nuxtjs.dev/posts');
      this.shortened = this.post.slice(0, 20);
    } catch (e) {
      console.log(e);
    }
  }
}
// import { Vue, Component, Prop } from 'vue-property-decorator';
// import Loader from '@/components/Loader.vue';
// import Button from '~/components/Button3.vue';
// import Search from '~/components/Search.vue';
//
// @Component({
//   components: {
//     Loader,
//     Button,
//     Search
//   }
// })
// export default class SearchComponent extends Vue {
//
//   private posts: any[] = []; // TODO string[]
//   private shortened: any[] = []; // TODO string[]
//   private search: string = '';
//
//   public activated() {
//     if (this.$fetchState.timestamp <= Date.now() - 30000) { // TODO ??
//       this.$fetch();
//     }
//   }
//
//  public async fetch(): Promise<void> {
//      // https://api.nuxtjs.dev/posts
//       // this.post = await this.$http.$get('https://jsonplaceholder.typicode.com/photos');
//       this.posts = await this.$fetch('https://jsonplaceholder.typicode.com/photos');
//       this.shortened = this.posts.slice(0, 20);
//   }
//
// }
</script>
