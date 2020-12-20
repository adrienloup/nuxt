<template>
  <div class="shop-item">
    <h3>{{ item.name }}</h3>
    <Button @click="addToCart(item)">Add</Button>
  </div>
</template>

<script>
import Button from '@/components/Button'

export default {
  name: 'ShopItem',
  components: {
    Button
  },
  props: ['item'],
  data() {
    return {}
  },
  methods: {
    addToCart(item) {
      this.$emit('update-cart', item)
    }
  }
}
</script>
