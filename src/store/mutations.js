export default {
  SET_DATA (state, data) {
    const { phoneData, totalPrice, totalMount, cartData } = data

    state.phoneData = phoneData
    state.totalPrice = totalPrice
    state.totalMount = totalMount
    state.cartData = cartData
  },
  SET_TOTAL (state, playload) {
    const { price, type } = playload

    switch (type) {
      case 'PLUS':
        state.totalPrice += price
        state.totalMount += 1
        break
      case 'MINUS':
        state.totalPrice -= price
        state.totalMount -= 1
        break
      default:
        break
    }
  },
  SET_CART (state, playload) {
    const {
      type,
      id,
      img,
      phone_name,
      price,
      slogan
    } = playload

    const idx = state.cartData.findIndex(item => item.id === id)

    if (idx === -1) {
      state.cartData.push({
        id,
        img,
        phone_name,
        price,
        slogan,
        totalMount: 1,
        totalPrice: price
      })
    } else {
      switch (type) {
        case 'PLUS':
          state.cartData[idx].totalMount += 1
          state.cartData[idx].totalPrice += price
          break
        case 'MINUS':
          state.cartData[idx].totalMount -= 1
          state.cartData[idx].totalPrice -= price
          // 如果减到0，则从购物车清除
          if (!state.cartData[idx].totalMount) {
            state.cartData = state.cartData.filter(item => item.id !== id)
          }
          break
        default:
          break
      }
    }
  }
}