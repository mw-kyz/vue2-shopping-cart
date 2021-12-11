<template>
  <div class="container">
    <my-header
      :changeIconShow="true"
    >小米手机</my-header>
    <PhoneList />
  </div>
</template>

<script>
import MyHeader from '@/components/Header'
import PhoneList from '@/components/PhoneList'

export default {
  name: 'Home',
  components: {
    MyHeader,
    PhoneList
  },
  mounted() {
    this.$store.dispatch('setData')
  }
}
</script>
