const system = {
  namespaced: true,

  state: {
      visible: false,
  },

  getters: {
      visible: state => state.visible,
  },

  mutations: {

      'SET_VISIBLE' (state, payload) {
          state.visible = payload;
      },
  },

  actions: {
      setVisible({ commit }, payload) {
          commit('SET_VISIBLE', payload);
      },
  }

}

export default system