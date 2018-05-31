import axios from 'axios'

const state = {
  users: []
}

const getters = {
  users: state => {
    return state.users
  }
}

const actions = {
  fetchUsers ({ commit }) {
    axios.get(`${process.env.API_URL}users`)
      .then(({ data }) => {
        commit('setUsers', { users: data })
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

const mutations = {
  setUsers (state, { users }) {
    state.users = users
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
