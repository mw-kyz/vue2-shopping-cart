<template>
  <router-link
    v-if="backIconShow"
    to="/"
    class="back-icon"
  >返回</router-link>
</template>

<script>
export default {
  name: 'BackIcon',
  props: {
    backIconShow: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.back-icon {
  position: absolute;
  top: .15rem;
  left: .15rem;
  font-size: .14rem;
  color: #fff;
}
</style>