<template>
  <div class="shop">
    <div v-if="!items">
      <Loader />
    </div>

    <div v-else>
      <h2>{{ name }}</h2><br />

      <ShopCart
        :cart="cart"
        :total="total"
        @empty-cart="emptyCart"
      /><br />

      <ShopItem
        v-for="item in items"
        :key="item.id"
        :item="item"
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
      name: 'ShoppingCart',
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
