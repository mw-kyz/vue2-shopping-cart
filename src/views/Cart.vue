<template>
  <div class="container">
    <my-header
      :backIconShow="true"
    >购物车</my-header>
    <CartList />
    <TotalPanel />
  </div>
</template>

<script>
import MyHeader from '@/components/Header'
import CartList from '@/components/CartList'
import TotalPanel from '@/components/TotalPanel'

export default {
  name: 'Cart',
  components: {
    MyHeader,
    CartList,
    TotalPanel
  },
  mounted() {
    this.$store.dispatch('setData')
  }
}
</script>
