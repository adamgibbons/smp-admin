import axios from 'axios'

function getAuthHeader () {
  return `Bearer ${localStorage.getItem('token')}`
}

const state = {
  users: [],
  selectedUser: {}
}

const getters = {
  users: state => {
    return state.users
  },
  selectedUser: state => {
    return state.selectedUser
  }
}

const actions = {
  fetchUsers ({ commit }) {
    axios.get(`${process.env.API_URL}users`, { headers: { 'Authorization': getAuthHeader() } })
      .then(({ data }) => {
        commit('setUsers', { users: data })
      })
      .catch((error) => {
        console.log(error)
      })
  },
  fetchUser ({ commit }, { id }) {
    axios.get(`${process.env.API_URL}users/${id}`, { headers: { 'Authorization': getAuthHeader() } })
      .then(({ data }) => {
        commit('setUser', { user: data })
      })
      .catch((error) => {
        console.log(error)
      })
  },
  downloadCsvReport ({ getters }) {
    axios.get(`${process.env.API_URL}users/${getters.selectedUser._id}/report`, { headers:
      {
        'Authorization': getAuthHeader()
      }
    })
      .then(({ data }) => {
        const url = window.URL.createObjectURL(new Blob([data]))
        const link = document.createElement('a')
        link.href = url
        link.setAttribute('download', `User_Report_${getters.selectedUser._id}.csv`)
        document.body.appendChild(link)
        link.click()
      })
      .catch((error) => {
        console.log(error)
      })
  },
  removeUser ({ commit }, { id }) {
    axios({
      method: 'delete',
      url: `${process.env.API_URL}users/${id}`,
      headers: {
        'Authorization': getAuthHeader(),
        'Content-type': 'application/json',
        'Accept': 'application/json'
      },
      data: { foo: true }
    })
      .then(({ status }) => {
        commit('removeUser', { id })
        console.log('deleted...', status)
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

const mutations = {
  setUsers (state, { users }) {
    state.users = users
  },
  setUser (state, { user }) {
    state.selectedUser = user
  },
  removeUser (state, { id }) {
    const index = state.users.findIndex(user => user._id === id)
    state.users.splice(index, 1)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
