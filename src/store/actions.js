export default {
  setData ({ commit }) {
    // 使用localStorage模拟通过接口获取数据
    let phoneData = JSON.parse(localStorage.getItem('phoneData') || '[]')
    const totalPrice = Number(localStorage.getItem('totalPrice' || '0')),
          totalMount = Number(localStorage.getItem('totalMount' || '0')),
          cartData = JSON.parse(localStorage.getItem('cartData') || '[]')
    console.log(phoneData)

    commit('SET_DATA', {
      phoneData,
      totalMount,
      totalPrice,
      cartData
    })
  },
  setTotal ({ commit }, playload) {
    commit('SET_TOTAL', playload)
  },
  setCart ({ commit }, playload) {
    commit('SET_CART', playload)
  }
}