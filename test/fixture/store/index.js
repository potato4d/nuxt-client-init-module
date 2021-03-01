export const state = () => ({
  isDispatched: false,
  sequence: []
})

export const getters = {
  isDispatched: (state) => state.isDispatched,
  getSequence: state => state.sequence
}

export const mutations = {
  dispatchAction(state) {
    state.isDispatched = !state.isDispatched
  },
  calledFrom(state, caller) {
    state.sequence.push(caller)
  }
}

export const actions = {
  nuxtClientInit({ commit }) {
    commit('dispatchAction')

    commit('calledFrom', 'nuxtClientInit')
  },
  addCaller({ commit }, caller) {
    commit('calledFrom', caller)
  }
}
