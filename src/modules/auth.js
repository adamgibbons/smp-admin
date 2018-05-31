import axios from 'axios'

const state = {
  user: {
    name: null,
    email: null
  },
  auth: false,
  token: null,
  authenticating: false
}

const getters = {
  authenticated: state => {
    return state.auth
  },
  user: state => {
    return state.user
  },
  authenticating: state => {
    return state.authenticating
  }
}

const actions = {
  login ({ commit }, { email, password }) {
    commit('toggleAuthenticating', { isAuthenticating: true })
    commit('setLoginMessage', { success: false, error: null })

    axios.post(`${process.env.API_URL}login`, { email, password })
      .then(({ data }) => {
        const { auth, token } = data

        if (auth) {
          localStorage.setItem('token', token)
        }

        // TODO set name
        commit('login', { token, auth, email })
        commit('toggleAuthenticating', { isAuthenticating: false })
      })
      .catch((error) => {
        commit('toggleAuthenticating', { isAuthenticating: false })
        commit('setLoginMessage', { success: false, error: error.response.data })
      })
  },
  logout ({ commit }) {
    localStorage.removeItem('id_token')
    commit('logout')
  }
}

const mutations = {
  setLoginMessage (state, { success, error }) {
    state.loginMessage = { success, error }
  },
  toggleAuthenticating (state, { isAuthenticating }) {
    state.authenticating = isAuthenticating
  },
  login (state, { name, email, token, auth }) {
    state.user.name = name
    state.user.email = email
    state.auth = auth
    state.token = token
  },
  logout (state) {
    state.user.name = null
    state.user.email = null
    state.auth = false
    state.token = null
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
