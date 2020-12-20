<template>
  <div>
    <strong>Cart {{ total }}</strong><br />
    <Button @click="emptyCart(cart)">Clear</Button>
  </div>
</template>

<script>
import Button from '@/components/Button'

export default {
  name: 'ShopCart',
  components: {
    Button
  },
  props: ['cart', 'total'],
  data() {
    return {}
  },
  methods: {
    emptyCart(item) {
      this.$emit('empty-cart', item)
    }
  }
}
</script>
