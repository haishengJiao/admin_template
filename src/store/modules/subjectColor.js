const state = {
  color: '#E64C65', // 主颜色
  hoverColor: '#CA4359' // 鼠标滑过颜色
}

const mutations = {
  setColor (state, color) {
    state.color = color
    document.body.style.setProperty('--color', color)
  },
  setHoverColor (state, hoverColor) {
    state.hoverColor = hoverColor
    document.body.style.setProperty('--hoverColor', hoverColor)
  }
}

const actions = {

}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
