<template>
  <router-link
    v-if="changeIconShow"
    to="/cart"
    class="change-icon"
  >
    <span class="cart">
      购物车({{ totalMount }})
    </span>
  </router-link>
</template>

<script>
import { mapState } from 'vuex'
import { setStorage } from '@/libs/utils.js'

export default {
  name: 'ChangeIcon',
  props: {
    changeIconShow: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapState(['totalMount', 'totalPrice', 'cartData'])
  },
  updated () {
    setStorage({
      totalPrice: this.totalPrice,
      totalMount: this.totalMount,
      cartData: this.cartData
    })
  }
}
</script>

<style lang="scss" scoped>
.change-icon {
  color: #fff;

  .cart {
    position: absolute;
    right: .15rem;
    top: .15rem;
    font-size: .14rem;
  }
}
</style>