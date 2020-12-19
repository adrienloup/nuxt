<template>
  <div class="shop-item">
    <div>
      <strong>{{ item.name }}</strong>
    </div>
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
