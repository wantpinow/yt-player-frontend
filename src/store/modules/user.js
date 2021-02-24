const state = {
    user: false,
    user_token: false
}

const getters = {
    user: (state) => state.user,
    userToken: (state) => state.user_token
}

const actions = {
    logout({ commit }) {
        commit('setUserToken', false)
        commit('setUser', false)
    }
}

const mutations = {
    setUserToken: (state, token) => (state.user_token = token),
    setUser: (state, user) => (state.user = user)
}

export default {
    state,
    getters,
    actions,
    mutations
}