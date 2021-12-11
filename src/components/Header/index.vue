<template>
  <header class="header">
    <BackIcon :backIconShow="backIconShow" />
    <h1><slot></slot></h1>
    <ChangeIcon :changeIconShow="changeIconShow" />
  </header>
</template>

<script>
import BackIcon from './BackIcon.vue'
import ChangeIcon from './ChangeIcon.vue'

export default {
  name: 'MyHeader',
  props: {
    backIconShow: {
      type: Boolean,
      default: false
    },
    changeIconShow: {
      type: Boolean,
      default: false
    }
  },
  components: {
    BackIcon,
    ChangeIcon
  }
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: .44rem;
  background-color: #ff6704;
  color: #fff;
  font-size: .18rem;

  .back {
    position: absolute;
    top: .15rem;
    left: .15rem;
    font-size: .14rem;
    color: #fff;
  }
}
</style>