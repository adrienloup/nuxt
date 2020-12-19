<template>
  <div class="shop">
    <div v-if="!items">
      <Loader />
    </div>

    <div v-else>
      <ShopCart
        :cart="cart"
        :total="total"
        @empty-cart="emptyCart"
      />

      <ShopItem
        v-for="item in items"
        :item="item"
        :key="item.id"
        @update-cart="updateCart"
      />
    </div>
  </div>
</template>

<script>
import Loader from '@/components/Loader'
import ShopItem from '@/components/ShopItem'
import ShopCart from '@/components/ShopCart'

export default {
  name: 'Shop',
  components: {
    Loader,
    ShopItem,
    ShopCart
  },
  data() {
    return {
      items: [
        { id: 1, name: 'Banana', price: 1 },
        { id: 2, name: 'Orange', price: 2 },
        { id: 3, name: 'Apple', price: 1 }
      ],
      cart: [],
      total: 0
    }
  },
  methods: {
    updateCart(e) {
      this.cart.push(e)
      this.total = this.cart.length
    },
    emptyCart() {
      this.cart = []
      this.total = 0
    }
  }
}
</script>

<style lang="scss" scoped>
.shop {
  margin: 1rem 0;

  &-item {
    margin-top: 1rem;
  }
}
</style>