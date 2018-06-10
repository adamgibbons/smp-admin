import axios from 'axios'
import { get, sum, flatten } from 'lodash'

function getAuthHeader () {
  return `Bearer ${localStorage.getItem('token')}`
}

const state = {
  users: [],
  selectedUser: {
    profile: {
      financial: {},
      consumerDebt: [],
      studentLoans: [],
      vehicles: []
    },
    notes: null
  },
  questionsByType: {
    income: [],
    wants: [],
    needs: [],
    savings: []
  }
}

const getters = {
  users: state => {
    return state.users
  },
  selectedUser: state => {
    return state.selectedUser
  },
  questionsByType: state => {
    return state.questionsByType
  },
  needsResults: state => {
    const needs = state.questionsByType.needs.map((path) => {
      if (path.indexOf('vehicles') !== -1) {
        return state.selectedUser.profile.vehicles.map(({ monthlyLeasePayment, monthlyPayment }) => {
          return monthlyPayment || monthlyLeasePayment || 0
        })
      }
      if (path.indexOf('consumerDebt') !== -1) {
        return state.selectedUser.profile.consumerDebt.map(({ minMonthlyPayment }) => {
          return minMonthlyPayment || 0
        })
      }
      if (path.indexOf('studentLoans') !== -1) {
        return state.selectedUser.profile.studentLoans.map(({ minMonthlyPayment }) => {
          return minMonthlyPayment || 0
        })
      }

      return get(state.selectedUser.profile, path, 0) || 0
    })

    return sum(flatten(needs).map((need) => {
      if (need === 'skip') return 0
      return parseInt(need)
    }))
  },
  wantsResults: state => {
    const wants = state.questionsByType.wants.map((path) => {
      return get(state.selectedUser.profile, path, 0) || 0
    })

    return sum(wants.map((want) => {
      if (want === 'skip') return 0
      return parseInt(want)
    }))
  },
  savingsResults: state => {
    const savings = state.questionsByType.savings.map((path) => {
      return get(state.selectedUser.profile, path, 0) || 0
    })

    return sum(savings.map((saving) => {
      if (saving === 'skip') return 0
      return parseInt(saving)
    }))
  },
  results: (state, getters) => {
    return {
      needs: getters.needsResults,
      wants: getters.wantsResults,
      savings: getters.savingsResults,
      income: parseInt(state.selectedUser.profile.financial.monthlyHouseholdIncome || 0)
    }
  },
  suggested: (state, getters) => {
    const income = parseInt(state.selectedUser.profile.financial.monthlyHouseholdIncome || 0)
    return {
      needs: income * 0.5,
      wants: income * 0.3,
      savings: income * 0.2
    }
  },
  score: (state, getters) => {
    return {
      needs: (getters.results.needs / getters.results.income) * 100,
      wants: (getters.results.wants / getters.results.income) * 100,
      savings: (getters.results.savings / getters.results.income) * 100
    }
  }
}

const actions = {
  fetchQuestions ({ commit }) {
    axios.get(`${process.env.API_URL}questions`)
      .then(({ data }) => {
        commit('setQuestions', { questions: data })
      })
      .catch((error) => {
        console.log(error)
      })
  },
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
  updateNotes ({ commit, getters }, { notes }) {
    axios.put(
      `${process.env.API_URL}users/${getters.selectedUser._id}/notes`,
      { notes },
      { headers: { 'Authorization': getAuthHeader() }
      })
      .then(() => { commit('setNotes', { notes }) })
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
  },
  setNotes (state, { notes }) {
    state.selectedUser.notes = notes
  },
  setQuestions (state, { questions }) {
    state.questionsByType = questions
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
