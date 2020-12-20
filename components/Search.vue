<template>
  <div>
    <label>
      <input v-model="search" type="text" class="input" />
      {{ listed.length }}
    </label>

    <div v-for="item in listed">
      <div v-if="slugPart">
        <NuxtLink :to="{ name: slugPart, params: { slug: item.id } }">
          {{ item.title }}
        </NuxtLink>
      </div>
      <div v-else>
        {{ item.title }}
      </div>
    </div>

    <div v-if="listed.length === 0">Not found</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Search extends Vue {
  @Prop() list!: any[]
  @Prop() slugPart!: string
  search: string = ''

  public get listed() {
    return this.list.filter(item => {
      return item.title.toLowerCase().includes(this.search)
    })
  }
}
</script>