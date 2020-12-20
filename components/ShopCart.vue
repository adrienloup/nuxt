<template>
  <div>
    <h3>Cart {{ total }}</h3>
    <Button @click="emptyCart(cart)">Clear</Button>
  </div>
</template>

<script>
import Button from '~/components/Button3'

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
