<template>
  <div>
    <label>
      <input
        v-model="search"
        type="text"
        class="input"
      />
    </label>
    {{ listed.length }}

    <div v-for="item in listed">
      <NuxtLink :to="{ name: 'posts-slug', params: { slug: item.id } }">
        {{ item.title }}
      </NuxtLink>
    </div>

    <div v-if="listed.length === 0">not found</div>
  </div>
</template>

<script lang="ts">
// export default {
//   name: "Search",
//   data: () => ({
//     search: ''
//   }),
//   props: {
//     list: {
//       type: Array,
//       default: () => []
//     }
//   },
//   computed: {
//     listed: function() {
//       return this.list.filter(item => {
//         return item.title.toLowerCase().includes(this.search);
//       });
//     }
//   }
// };
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class SearchComponent extends Vue {

  @Prop() list!: any[];

  private search: string = '';

  public get listed() {
    return this.list.filter(item => {
      return item.title.toLowerCase().includes(this.search);
    });
  }

}
</script>